import { Module } from "@nestjs/common";
import { CourierModuleBase } from "./base/courier.module.base";
import { CourierService } from "./courier.service";
import { CourierController } from "./courier.controller";
import { CourierResolver } from "./courier.resolver";

@Module({
  imports: [CourierModuleBase],
  controllers: [CourierController],
  providers: [CourierService, CourierResolver],
  exports: [CourierService],
})
export class CourierModule {}
