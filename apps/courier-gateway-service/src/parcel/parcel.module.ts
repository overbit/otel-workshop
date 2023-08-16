import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParcelModuleBase } from "./base/parcel.module.base";
import { ParcelService } from "./parcel.service";
import { ParcelController } from "./parcel.controller";
import { ParcelResolver } from "./parcel.resolver";

@Module({
  imports: [ParcelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParcelController],
  providers: [ParcelService, ParcelResolver],
  exports: [ParcelService],
})
export class ParcelModule {}
