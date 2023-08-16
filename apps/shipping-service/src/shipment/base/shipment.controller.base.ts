/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ShipmentService } from "../shipment.service";
import { ShipmentCreateInput } from "./ShipmentCreateInput";
import { ShipmentWhereInput } from "./ShipmentWhereInput";
import { ShipmentWhereUniqueInput } from "./ShipmentWhereUniqueInput";
import { ShipmentFindManyArgs } from "./ShipmentFindManyArgs";
import { ShipmentUpdateInput } from "./ShipmentUpdateInput";
import { Shipment } from "./Shipment";

export class ShipmentControllerBase {
  constructor(protected readonly service: ShipmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Shipment })
  async create(@common.Body() data: ShipmentCreateInput): Promise<Shipment> {
    return await this.service.create({
      data: {
        ...data,

        courier: data.courier
          ? {
              connect: data.courier,
            }
          : undefined,
      },
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deliveredAt: true,
        id: true,
        price: true,
        status: true,
        trackingNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Shipment] })
  @ApiNestedQuery(ShipmentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Shipment[]> {
    const args = plainToClass(ShipmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deliveredAt: true,
        id: true,
        price: true,
        status: true,
        trackingNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ShipmentWhereUniqueInput
  ): Promise<Shipment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deliveredAt: true,
        id: true,
        price: true,
        status: true,
        trackingNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ShipmentWhereUniqueInput,
    @common.Body() data: ShipmentUpdateInput
  ): Promise<Shipment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          courier: data.courier
            ? {
                connect: data.courier,
              }
            : undefined,
        },
        select: {
          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          deliveredAt: true,
          id: true,
          price: true,
          status: true,
          trackingNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ShipmentWhereUniqueInput
  ): Promise<Shipment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          deliveredAt: true,
          id: true,
          price: true,
          status: true,
          trackingNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
