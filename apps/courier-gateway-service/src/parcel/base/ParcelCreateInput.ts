/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "@app/custom-validators";
import { IsOptional, IsEnum, IsNumber, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumParcelParcelType } from "./EnumParcelParcelType";
import { QuoteCreateNestedManyWithoutParcelsInput } from "./QuoteCreateNestedManyWithoutParcelsInput";
import { Type } from "class-transformer";

@InputType()
class ParcelCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  maxDimension?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumParcelParcelType,
  })
  @IsEnum(EnumParcelParcelType)
  @IsOptional()
  @Field(() => EnumParcelParcelType, {
    nullable: true,
  })
  parcelType?: "Small" | "Large" | "Medium" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => QuoteCreateNestedManyWithoutParcelsInput,
  })
  @ValidateNested()
  @Type(() => QuoteCreateNestedManyWithoutParcelsInput)
  @IsOptional()
  @Field(() => QuoteCreateNestedManyWithoutParcelsInput, {
    nullable: true,
  })
  quotes?: QuoteCreateNestedManyWithoutParcelsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  weight?: number | null;
}

export { ParcelCreateInput as ParcelCreateInput };
