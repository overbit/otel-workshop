import { Module } from "@nestjs/common";
import { ShipmentModuleBase } from "./base/shipment.module.base";
import { ShipmentService } from "./shipment.service";
import { ShipmentController } from "./shipment.controller";
import { ShipmentResolver } from "./shipment.resolver";
import { Kafka } from "kafkajs";
import { KafkaModule } from "../kafka/kafka.module";

@Module({
  imports: [ShipmentModuleBase, KafkaModule],
  controllers: [ShipmentController],
  providers: [ShipmentService, ShipmentResolver],
  exports: [ShipmentService],
})
export class ShipmentModule {}
