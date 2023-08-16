import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ParcelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Parcels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Max Dimension" source="maxDimension" />
        <TextField label="Parcel Type" source="parcelType" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Weight" source="weight" />
      </Datagrid>
    </List>
  );
};
