import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourierServiceBase } from "./base/courier.service.base";

@Injectable()
export class CourierService extends CourierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
