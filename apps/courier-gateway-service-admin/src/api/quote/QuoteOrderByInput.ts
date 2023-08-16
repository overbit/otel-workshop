import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  parcelId?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
