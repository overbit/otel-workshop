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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateParcelArgs } from "./CreateParcelArgs";
import { UpdateParcelArgs } from "./UpdateParcelArgs";
import { DeleteParcelArgs } from "./DeleteParcelArgs";
import { ParcelCountArgs } from "./ParcelCountArgs";
import { ParcelFindManyArgs } from "./ParcelFindManyArgs";
import { ParcelFindUniqueArgs } from "./ParcelFindUniqueArgs";
import { Parcel } from "./Parcel";
import { QuoteFindManyArgs } from "../../quote/base/QuoteFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { ParcelService } from "../parcel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Parcel)
export class ParcelResolverBase {
  constructor(
    protected readonly service: ParcelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "read",
    possession: "any",
  })
  async _parcelsMeta(
    @graphql.Args() args: ParcelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Parcel])
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "read",
    possession: "any",
  })
  async parcels(@graphql.Args() args: ParcelFindManyArgs): Promise<Parcel[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Parcel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "read",
    possession: "own",
  })
  async parcel(
    @graphql.Args() args: ParcelFindUniqueArgs
  ): Promise<Parcel | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Parcel)
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "create",
    possession: "any",
  })
  async createParcel(@graphql.Args() args: CreateParcelArgs): Promise<Parcel> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Parcel)
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "update",
    possession: "any",
  })
  async updateParcel(
    @graphql.Args() args: UpdateParcelArgs
  ): Promise<Parcel | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Parcel)
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "delete",
    possession: "any",
  })
  async deleteParcel(
    @graphql.Args() args: DeleteParcelArgs
  ): Promise<Parcel | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Quote], { name: "quotes" })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async resolveFieldQuotes(
    @graphql.Parent() parent: Parcel,
    @graphql.Args() args: QuoteFindManyArgs
  ): Promise<Quote[]> {
    const results = await this.service.findQuotes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}