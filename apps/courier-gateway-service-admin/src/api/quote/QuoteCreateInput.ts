import { ParcelWhereUniqueInput } from "../parcel/ParcelWhereUniqueInput";

export type QuoteCreateInput = {
  description?: string | null;
  parcel?: ParcelWhereUniqueInput | null;
  price?: number | null;
};
