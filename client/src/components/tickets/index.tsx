import { 
    Create,
    Datagrid,
    Edit, 
    EditButton, 
    List, 
    ReferenceField,
    ReferenceInput,
    SimpleForm,
    TextField, 
    TextInput,
} from 'react-admin';

import { PostTitle } from './hooks';
import { postFilters } from './utils';

export const TicketList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TicketEdit = () => (
    <Edit title = {<PostTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Edit>
);

export const TicketCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
);