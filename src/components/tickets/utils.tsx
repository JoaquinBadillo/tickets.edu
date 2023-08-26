import { TextInput, ReferenceInput } from "react-admin";

export const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />
];