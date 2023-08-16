import * as graphql from "@nestjs/graphql";
import { ShipmentResolverBase } from "./base/shipment.resolver.base";
import { Shipment } from "./base/Shipment";
import { ShipmentService } from "./shipment.service";

@graphql.Resolver(() => Shipment)
export class ShipmentResolver extends ShipmentResolverBase {
  constructor(protected readonly service: ShipmentService) {
    super(service);
  }
}
