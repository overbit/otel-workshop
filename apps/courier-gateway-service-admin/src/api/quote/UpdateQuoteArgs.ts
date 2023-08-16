import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";
import { QuoteUpdateInput } from "./QuoteUpdateInput";

export type UpdateQuoteArgs = {
  where: QuoteWhereUniqueInput;
  data: QuoteUpdateInput;
};
