import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuoteService } from "./quote.service";
import { QuoteControllerBase } from "./base/quote.controller.base";

@swagger.ApiTags("quotes")
@common.Controller("quotes")
export class QuoteController extends QuoteControllerBase {
  constructor(
    protected readonly service: QuoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
