import { 
    Create,
    Datagrid,
    DateField,
    Edit, 
    EditButton, 
    List, 
    ReferenceField,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextField, 
    TextInput,
    usePermissions
} from "react-admin";

import { Box } from "@mui/system";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";

import { PostTitle } from "./hooks";
import { postFilters } from "./utils";

const defaultTheme = createTheme();

export const TicketList = () => {
    const { permissions } = usePermissions();
    return (
        <List filters={postFilters}>
            <Datagrid>
                <DateField source="date" />
                { permissions === "admin" && 
                  <ReferenceField source="userId" reference="users" link="show" /> }
                <TextField source="title" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export const TicketEdit = () => {
    return (
        <Edit title = {<PostTitle />}>
            <ThemeProvider theme={defaultTheme}>
                <SimpleForm warnWhenUnsavedChanges>
                    <CardHeader 
                        title="Editar Ticket"
                        titleTypographyProps={{fontWeight: "bold"}}
                    />

                    <ReferenceInput label="Usuario" source="userId" reference="users">
                        <SelectInput label="Usuario" disabled />
                    </ReferenceInput>

                    <TextInput 
                        source="title" 
                        label="Título"
                        sx={{minWidth: "300px", width: "60%", }}
                    />

                    <TextInput 
                        source="description"
                        label="Descripción" 
                        multiline rows={5}
                        sx={{minWidth: "300px", width: "80%",}}
                    />
                </SimpleForm>
            </ThemeProvider>
        </Edit>
    );
};

export const TicketCreate = () => (
    <Create title="Levantar Titcket">
        <ThemeProvider theme={defaultTheme}>
            <SimpleForm warnWhenUnsavedChanges>
                <CardHeader 
                    title="Nuevo Ticket"
                    titleTypographyProps={{fontWeight: "bold"}}
                />

                <TextInput 
                    source="title" 
                    title="Título"
                    label="Título"
                    resettable 
                    sx={{minWidth: "300px", width: "60%", }}
                    validate={required()}
                />

                <SelectInput 
                    source="status" 
                    title="Estado"
                    label="Estado"
                    sx={{minWidth: "300px", width: "60%", }}
                    validate={required()}
                    choices={[
                        { id: "open", name: "Abierto" }
                    ]}
                    defaultValue={"open"}
                    disabled
                />

                <Box sx={{minWidth: "300px", width: "60%", flexDirection: "row", flexWrap: "true"}}>
                    <SelectInput 
                        source="priority"
                        title="Prioridad"
                        label="Prioridad"
                        choices={[
                            { id: "alta", name: "Alta" },
                            { id: "media", name: "Media" },
                            { id: "baja", name: "Baja" },
                        ]}
                        defaultValue={"baja"}
                        validate={required()}
                        sx={{mr: "10px", my: 0}}
                    />

                    <SelectInput 
                        source="category"
                        title="Categoría"
                        label="Categoría"
                        choices={[
                            { id: "interno", name: "Interno" },
                            { id: "beneficiarios", name: "Beneficiarios" },
                            { id: "empresa", name: "Empresa" },
                            { id: "gobierno", name: "Gobierno" }
                        ]}
                        validate={required()}
                        sx={{mr: "10px", my: 0}}
                    />

                    <SelectInput 
                        source="incident"
                        title="Tipo de Incidente" 
                        label="Tipo de Incidente" 
                        choices={[
                            { id: "mantenimiento", name: "Mantenimiento" },
                            { id: "limpieza", name: "Limpieza" },
                            { id: "psicologicos", name: "Psicológicos" },
                            { id: "seguirdad", name: "Seguirdad" },
                            { id: "ti", name: "TI" },
                            { id: "abastecimiento", name: "Abastecimiento" },
                        ]}
                        validate={required()}
                        sx={{mr: "10px", my: 0}}
                    />

                    <SelectInput
                        source="location"
                        title="Ubicación"
                        label="Ubicación"
                        choices={[
                            { id: "sf", name: "Santa Fe" },
                            { id: "tol", name: "Toluca" }
                        ]}
                        validate={required()}
                        sx={{mr: "10px", my: 0}}
                    />
                </Box>

                <TextInput 
                    source="description"
                    title="Descripción"
                    label="Descripción"
                    multiline rows={5} 
                    sx={{minWidth: "300px", width: "80%",}}
                    validate={required()}
                />
            </SimpleForm>
        </ThemeProvider>
    </Create>
);