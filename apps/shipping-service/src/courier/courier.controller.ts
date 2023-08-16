import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourierService } from "./courier.service";
import { CourierControllerBase } from "./base/courier.controller.base";

@swagger.ApiTags("couriers")
@common.Controller("couriers")
export class CourierController extends CourierControllerBase {
  constructor(protected readonly service: CourierService) {
    super(service);
  }
}
