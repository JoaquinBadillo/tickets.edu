import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const TicketList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="postId" reference="posts" />
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="body" />
        </Datagrid>
    </List>
);