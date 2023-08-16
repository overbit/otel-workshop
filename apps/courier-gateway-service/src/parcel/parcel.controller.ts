import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParcelService } from "./parcel.service";
import { ParcelControllerBase } from "./base/parcel.controller.base";

@swagger.ApiTags("parcels")
@common.Controller("parcels")
export class ParcelController extends ParcelControllerBase {
  constructor(
    protected readonly service: ParcelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
