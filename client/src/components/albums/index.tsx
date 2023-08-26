import {
    EditButton,
    Datagrid,
    List,
    TextField,
    ReferenceField
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