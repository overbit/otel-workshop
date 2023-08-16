import { InputJsonValue } from "../../types";
import { QuoteCreateNestedManyWithoutParcelsInput } from "./QuoteCreateNestedManyWithoutParcelsInput";

export type ParcelCreateInput = {
  maxDimension?: InputJsonValue;
  parcelType?: "Small" | "Large" | "Medium" | null;
  price?: number | null;
  quotes?: QuoteCreateNestedManyWithoutParcelsInput;
  weight?: number | null;
};
