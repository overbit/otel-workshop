import { Module } from "@nestjs/common";
import { ClientProxyFactory, ClientsModule } from "@nestjs/microservices";
import { generateKafkaClientOptions } from "./generateKafkaClientOptions";
import { KafkaProducerService } from "./kafka.producer.service";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [],
  providers: [
    {
      provide: "KAFKA_CLIENT",
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(
          generateKafkaClientOptions(configService)
        );
      },
      inject: [ConfigService],
    },
    KafkaProducerService,
  ],
  exports: [KafkaProducerService],
})
export class KafkaModule {}
