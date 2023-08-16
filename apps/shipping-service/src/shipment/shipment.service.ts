import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShipmentServiceBase } from "./base/shipment.service.base";
import { Prisma, Shipment } from "@prisma/client";
import axios from "axios";
import { KafkaProducerService } from "../kafka/kafka.producer.service";
import { ShippingEvent } from "./shipping.event";
import { MyMessageBrokerTopics } from "../kafka/topics";

@Injectable()
export class ShipmentService extends ShipmentServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    private readonly kafkaProducerService: KafkaProducerService
  ) {
    super(prisma);
  }

  async create<T extends Prisma.ShipmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentCreateArgs>
  ): Promise<Shipment> {
    const {
      data: { accessToken },
    } = await axios.post(`http://localhost:3002/api/login`, {
      username: "admin",
      password: "admin",
    });

    const { data: parcels } = await axios.get(
      `http://localhost:3002/api/parcels`,
      {
        params: {},
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const randomParcel = Math.floor(Math.random() * parcels.length);

    const shipment = await super.create<T>({
      ...args,
      data: {
        ...args.data,
        price: parcels[randomParcel].price,
      },
    });

    const event: ShippingEvent = {
      Message: `Shipment id: ${shipment.id}`,
      CustomerId: "1b2c",
    };

    await this.kafkaProducerService.emitMessage(
      MyMessageBrokerTopics.ShipmentCreateV1,
      {
        key: shipment.id,
        value: event,
      }
    );

    return shipment;
  }
}
