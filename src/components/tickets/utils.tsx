import { TextInput, ReferenceInput } from "react-admin";

export const TicketFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="Usuario" reference="users" />
];