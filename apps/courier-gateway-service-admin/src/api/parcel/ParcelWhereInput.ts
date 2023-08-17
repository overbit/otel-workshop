import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";

export type ParcelWhereInput = {
  price?: FloatNullableFilter;
  quotes?: QuoteListRelationFilter;
};
