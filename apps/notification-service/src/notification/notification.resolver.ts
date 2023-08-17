import * as graphql from "@nestjs/graphql";
import { NotificationResolverBase } from "./base/notification.resolver.base";
import { Notification } from "./base/Notification";
import { NotificationService } from "./notification.service";

@graphql.Resolver(() => Notification)
export class NotificationResolver extends NotificationResolverBase {
  constructor(protected readonly service: NotificationService) {
    super(service);
  }
}
