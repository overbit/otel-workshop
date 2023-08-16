import * as graphql from "@nestjs/graphql";
import { CourierResolverBase } from "./base/courier.resolver.base";
import { Courier } from "./base/Courier";
import { CourierService } from "./courier.service";

@graphql.Resolver(() => Courier)
export class CourierResolver extends CourierResolverBase {
  constructor(protected readonly service: CourierService) {
    super(service);
  }
}
