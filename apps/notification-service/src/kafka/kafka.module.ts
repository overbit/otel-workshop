import { ConsoleLogger, Module } from "@nestjs/common";
import { ClientProxyFactory, ClientsModule } from "@nestjs/microservices";
import { generateKafkaClientOptions } from "./generateKafkaClientOptions";
import { KafkaProducerService } from "./kafka.producer.service";
import { ConfigService } from "@nestjs/config";
import { NotificationModule } from "../notification/notification.module";
import { KafkaController } from "./kafka.controller";

@Module({
  imports: [NotificationModule],
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
  controllers: [KafkaController],
  exports: [KafkaProducerService],
})
export class KafkaModule {}
