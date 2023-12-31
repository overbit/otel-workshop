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
import { NotificationService } from "../notification.service";
import { NotificationCreateInput } from "./NotificationCreateInput";
import { NotificationWhereInput } from "./NotificationWhereInput";
import { NotificationWhereUniqueInput } from "./NotificationWhereUniqueInput";
import { NotificationFindManyArgs } from "./NotificationFindManyArgs";
import { NotificationUpdateInput } from "./NotificationUpdateInput";
import { Notification } from "./Notification";

export class NotificationControllerBase {
  constructor(protected readonly service: NotificationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Notification })
  async create(
    @common.Body() data: NotificationCreateInput
  ): Promise<Notification> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        customerId: true,
        id: true,
        message: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Notification] })
  @ApiNestedQuery(NotificationFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Notification[]> {
    const args = plainToClass(NotificationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        customerId: true,
        id: true,
        message: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Notification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: NotificationWhereUniqueInput
  ): Promise<Notification | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        customerId: true,
        id: true,
        message: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: Notification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: NotificationWhereUniqueInput,
    @common.Body() data: NotificationUpdateInput
  ): Promise<Notification | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          customerId: true,
          id: true,
          message: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: Notification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: NotificationWhereUniqueInput
  ): Promise<Notification | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          customerId: true,
          id: true,
          message: true,
          title: true,
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
