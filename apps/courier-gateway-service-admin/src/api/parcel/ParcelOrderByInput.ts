import { SortOrder } from "../../util/SortOrder";

export type ParcelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  maxDimension?: SortOrder;
  parcelType?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
};
