import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
