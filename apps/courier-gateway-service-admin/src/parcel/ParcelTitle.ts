import { Parcel as TParcel } from "../api/parcel/Parcel";

export const PARCEL_TITLE_FIELD = "id";

export const ParcelTitle = (record: TParcel): string => {
  return record.id || String(record.id);
};
