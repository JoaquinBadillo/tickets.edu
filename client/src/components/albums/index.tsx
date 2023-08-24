import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton
} from 'react-admin';

export const AlbumList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);