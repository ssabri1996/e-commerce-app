import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const PublicityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="avtive" source="avtive" />
        <TextInput label="content" source="content" />
        <DateTimeInput label="date" source="date" />
        <BooleanInput label="isReady" source="isReady" />
        <TextInput label="playing" source="playing" />
      </SimpleForm>
    </Create>
  );
};
