import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ParcelTitle } from "../parcel/ParcelTitle";

export const QuoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <ReferenceInput source="parcel.id" reference="Parcel" label="Parcel">
          <SelectInput optionText={ParcelTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
