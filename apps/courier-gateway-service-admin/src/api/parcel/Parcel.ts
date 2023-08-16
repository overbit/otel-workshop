import { JsonValue } from "type-fest";
import { Quote } from "../quote/Quote";

export type Parcel = {
  createdAt: Date;
  id: string;
  maxDimension: JsonValue;
  parcelType?: "Small" | "Large" | "Medium" | null;
  price: number | null;
  quotes?: Array<Quote>;
  updatedAt: Date;
  weight: number | null;
};
