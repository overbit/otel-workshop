import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuoteTitle } from "../quote/QuoteTitle";

export const ParcelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
