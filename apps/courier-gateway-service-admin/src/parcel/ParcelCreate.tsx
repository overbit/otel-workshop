import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuoteTitle } from "../quote/QuoteTitle";

export const ParcelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="parcelType"
          label="Parcel Type"
          choices={[
            { label: "Small", value: "Small" },
            { label: "Large", value: "Large" },
            { label: "Medium", value: "Medium" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Price" source="price" />
        <ReferenceArrayInput
          source="quotes"
          reference="Quote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuoteTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
