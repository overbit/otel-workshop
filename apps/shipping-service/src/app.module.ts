import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { ShipmentModule } from "./shipment/shipment.module";
import { CourierModule } from "./courier/courier.module";
import { QuoteModule } from "./quote/quote.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";
import {
  OpenTelemetryModule,
  GraphQLResolverInjector,
  ControllerInjector,
  GuardInjector,
  PipeInjector,
  EventEmitterInjector,
  NodeAutoInstrumentationsDefaultConfig,
} from "@amplication/opentelemetry-nestjs";
import {
  SimpleSpanProcessor,
  BatchSpanProcessor,
} from "@opentelemetry/sdk-trace-base";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { KafkaJsInstrumentation } from "opentelemetry-instrumentation-kafkajs";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    ShipmentModule,
    CourierModule,
    QuoteModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),

    OpenTelemetryModule.forRoot({
      serviceName: "shipping-service",
      spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
        new KafkaJsInstrumentation({
          producerHook: (span, topic, message) => {
            span.updateName(`Kafka.Produce ${topic}`);
          },
        }),
      ],
      traceAutoInjectors: [
        ControllerInjector,
        GraphQLResolverInjector,
        EventEmitterInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
