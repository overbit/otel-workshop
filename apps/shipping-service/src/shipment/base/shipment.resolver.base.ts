/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateShipmentArgs } from "./CreateShipmentArgs";
import { UpdateShipmentArgs } from "./UpdateShipmentArgs";
import { DeleteShipmentArgs } from "./DeleteShipmentArgs";
import { ShipmentCountArgs } from "./ShipmentCountArgs";
import { ShipmentFindManyArgs } from "./ShipmentFindManyArgs";
import { ShipmentFindUniqueArgs } from "./ShipmentFindUniqueArgs";
import { Shipment } from "./Shipment";
import { Courier } from "../../courier/base/Courier";
import { ShipmentService } from "../shipment.service";
@graphql.Resolver(() => Shipment)
export class ShipmentResolverBase {
  constructor(protected readonly service: ShipmentService) {}

  async _shipmentsMeta(
    @graphql.Args() args: ShipmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Shipment])
  async shipments(
    @graphql.Args() args: ShipmentFindManyArgs
  ): Promise<Shipment[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Shipment, { nullable: true })
  async shipment(
    @graphql.Args() args: ShipmentFindUniqueArgs
  ): Promise<Shipment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Shipment)
  async createShipment(
    @graphql.Args() args: CreateShipmentArgs
  ): Promise<Shipment> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        courier: args.data.courier
          ? {
              connect: args.data.courier,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Shipment)
  async updateShipment(
    @graphql.Args() args: UpdateShipmentArgs
  ): Promise<Shipment | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          courier: args.data.courier
            ? {
                connect: args.data.courier,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Shipment)
  async deleteShipment(
    @graphql.Args() args: DeleteShipmentArgs
  ): Promise<Shipment | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Courier, {
    nullable: true,
    name: "courier",
  })
  async resolveFieldCourier(
    @graphql.Parent() parent: Shipment
  ): Promise<Courier | null> {
    const result = await this.service.getCourier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}