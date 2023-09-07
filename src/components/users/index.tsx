import { 
    Create,
    Datagrid,
    Edit, 
    EditButton, 
    EmailField,
    List, 
    SimpleList,
    SimpleForm,
    TextField, 
    TextInput
} from "react-admin";

import { useMediaQuery, Theme} from "@mui/material";

import { UserTitle } from "./hooks";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";

const defaultTheme = createTheme();

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
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

                    <TextInput source="name" />
                    <TextInput source="email"  />
                </SimpleForm>
            </ThemeProvider>
        </Edit>
    );
};

export const UserCreate = () => {
    return (
        <Create>
            <ThemeProvider theme={defaultTheme}>
                <SimpleForm warnWhenUnsavedChanges>
                    <TextInput source="name" />
                    <TextInput source="email" />
                </SimpleForm>
            </ThemeProvider>
        </Create>
    );

};