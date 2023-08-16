import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ParcelTitle } from "../parcel/ParcelTitle";

export const QuoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <ReferenceInput source="parcel.id" reference="Parcel" label="Parcel">
          <SelectInput optionText={ParcelTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
