import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentService } from "./shipment.service";
import { ShipmentControllerBase } from "./base/shipment.controller.base";

@swagger.ApiTags("shipments")
@common.Controller("shipments")
export class ShipmentController extends ShipmentControllerBase {
  constructor(protected readonly service: ShipmentService) {
    super(service);
  }
}
