import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NotificationService } from "./notification.service";
import { NotificationControllerBase } from "./base/notification.controller.base";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationController extends NotificationControllerBase {
  constructor(protected readonly service: NotificationService) {
    super(service);
  }
}
