import { IsString } from "class-validator";

export class ShippingEvent {
  @IsString()
  CustomerId!: string;
  @IsString()
  Message!: string;
}
