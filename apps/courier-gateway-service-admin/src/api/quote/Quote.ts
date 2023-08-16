import { Parcel } from "../parcel/Parcel";

export type Quote = {
  createdAt: Date;
  description: string | null;
  id: string;
  parcel?: Parcel | null;
  price: number | null;
  updatedAt: Date;
};
