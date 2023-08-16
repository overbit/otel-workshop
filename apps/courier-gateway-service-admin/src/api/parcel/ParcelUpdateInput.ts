import { InputJsonValue } from "../../types";
import { QuoteUpdateManyWithoutParcelsInput } from "./QuoteUpdateManyWithoutParcelsInput";

export type ParcelUpdateInput = {
  maxDimension?: InputJsonValue;
  parcelType?: "Small" | "Large" | "Medium" | null;
  price?: number | null;
  quotes?: QuoteUpdateManyWithoutParcelsInput;
  weight?: number | null;
};
