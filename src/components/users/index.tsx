import { 
    Create,
    Datagrid,
    Edit, 
    EditButton, 
    EmailField,
    List,
    Show,
    SimpleList,
    SimpleForm,
    SimpleShowLayout,
    TextField, 
    TextInput,
    SelectInput,
    required,
    useCreate,
    useNotify,
    SaveButton
} from "react-admin";

import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

import { useMediaQuery, Theme} from "@mui/material";

import { UserTitle } from "./hooks";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import { useEffect, useState } from "react";


const defaultTheme = createTheme();

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
    return (
        <List pagination={false}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="name" label="Nombre"/>
                    <EmailField source="email" />
                    <TextField source="role" label="Permisos" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};

export const UserEdit = () => {
    return (
        <Edit title = {<UserTitle />}>
            <ThemeProvider theme={defaultTheme}>
                <SimpleForm warnWhenUnsavedChanges>
                    <CardHeader 
                        title="Editar Usuario"
                        titleTypographyProps={{fontWeight: "bold"}}
                    />
                    <TextInput source="name" label="Nombre" />
                    <TextInput source="email"  />
                </SimpleForm>
            </ThemeProvider>
        </Edit>
    );
};

const CreateAside = ({userData, disabled} : any) => {
    if (disabled || !userData)
        return null;

    return (
        <Box sx={{ width: '200px', margin: '1em' }}>
            <Typography variant="h6">Usuario Creado</Typography>
            <Typography variant="body1">
                <strong>Nombre:</strong> {userData.name}
            </Typography>
            <Typography variant="body1">
                <strong>Email:</strong> {userData.email}
            </Typography>
            <Typography variant="body1">
                <strong>Rol:</strong> {userData.role}
            </Typography>
            <Typography variant="body1">
                <strong>Contraseña:</strong> {userData.password}
            </Typography>     
        </Box>
    );
}

export const UserCreate = () => {
    const notify = useNotify();
    const [uuid, setUuid] = useState<string>(uuidv4());
    const [formData, setFormData] = useState<any>(undefined);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [create, { isLoading, error }] = useCreate();

    const onChange = (e: any) => {
        setDisabled(true);
        setFormData((prev: any) => ({
            ...prev, 
            password: uuid,
            [e.target.id]: e.target.value
        }));
    }

    const userSave = (data: any) => {
        setUuid(uuidv4());
        setFormData((prev: any) => ({
            ...prev, 
            role: data.role,
        }));
        create('users', { data: {...data, password: uuid} });
    };

    useEffect(() => {
        if (error) {
            notify('ra.message.error');
            return;
        }
        
        if (formData && !isLoading && !error) {
            setDisabled(false);
        }
        
    }, [error, isLoading]);

    return (
        <Create 
            aside={<CreateAside 
                userData={formData} 
                disabled={disabled}
            />} 
        >

            <ThemeProvider theme={defaultTheme}>
                <SimpleForm 
                    warnWhenUnsavedChanges 
                    onChange={onChange}
                    onSubmit={userSave}
                >
                    <TextInput source="name" label="Nombre" required/>
                    <TextInput source="email" required/>
                    <SelectInput 
                      source="role" 
                      label="Rol" 
                      choices={[
                        {id: "admin", name: "Administrador"},
                        {id: "usuario", name: "Usuario"}
                      ]}
                      validate={required()}
                      defaultValue={"usuario"}
                    />
                </SimpleForm>
            </ThemeProvider>
        </Create>
    );
};

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" label="Nombre" />
            <TextField source="email" />
            <TextField source="role" label="Rol" />
        </SimpleShowLayout>
    </Show>
);