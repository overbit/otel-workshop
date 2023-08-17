import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "email";

export const CustomerTitle = (record: TCustomer): string => {
  return record.email || String(record.id);
};
