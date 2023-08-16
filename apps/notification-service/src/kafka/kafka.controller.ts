import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
  Transport,
} from "@nestjs/microservices";
import { KafkaMessage } from "./KafkaMessage";
import { plainToInstance } from "class-transformer";
import { ShippingEvent } from "./ShippingEvent";
import { NotificationService } from "../notification/notification.service";
import * as common from "@nestjs/common";

@common.Controller("kafka-controller")
export class KafkaController {
  private readonly logger = new common.Logger("notification-service");

  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern("shipment.create.v1")
  async onShipmentCreateV1(@Payload() message: KafkaMessage): Promise<void> {
    const event = plainToInstance(ShippingEvent, message.value);
    this.logger.log(`Received event: ${JSON.stringify(event)}`);

    if (event) {
      this.notificationService.create({
        data: {
          message: event.Message,
          customerId: event.CustomerId,
          title: "Shipment created",
        },
      });
    }

    throw new Error("FORCED ERROR");
  }
}
