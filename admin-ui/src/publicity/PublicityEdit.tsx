import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const PublicityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="avtive" source="avtive" />
        <TextInput label="content" source="content" />
        <DateTimeInput label="date" source="date" />
        <BooleanInput label="isReady" source="isReady" />
        <TextInput label="playing" source="playing" />
      </SimpleForm>
    </Edit>
  );
};
