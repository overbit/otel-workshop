import { ParcelWhereUniqueInput } from "../parcel/ParcelWhereUniqueInput";

export type QuoteUpdateInput = {
  description?: string | null;
  parcel?: ParcelWhereUniqueInput | null;
  price?: number | null;
};
