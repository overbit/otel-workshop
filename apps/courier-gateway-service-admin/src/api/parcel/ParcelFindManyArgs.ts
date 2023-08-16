import { ParcelWhereInput } from "./ParcelWhereInput";
import { ParcelOrderByInput } from "./ParcelOrderByInput";

export type ParcelFindManyArgs = {
  where?: ParcelWhereInput;
  orderBy?: Array<ParcelOrderByInput>;
  skip?: number;
  take?: number;
};
