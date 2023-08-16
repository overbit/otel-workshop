import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParcelServiceBase } from "./base/parcel.service.base";

@Injectable()
export class ParcelService extends ParcelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
