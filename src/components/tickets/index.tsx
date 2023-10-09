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
  usePermissions,
} from "react-admin";

import { useState } from "react";

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
                <DateField source="date" label="Fecha" />
                { permissions === "admin" && 
                  <ReferenceField source="userId" reference="users" link="show" label="Usuario" /> }
                <TextField source="title" label="Título" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export const TicketEdit = () => {
  return (
    <Edit title={<PostTitle />}>
      <ThemeProvider theme={defaultTheme}>
        <SimpleForm warnWhenUnsavedChanges>
          <CardHeader
            title="Editar Ticket"
            titleTypographyProps={{ fontWeight: "bold" }}
          />

          <ReferenceInput label="Usuario" source="userId" reference="users">
            <SelectInput label="Usuario" disabled />
          </ReferenceInput>

          <TextInput
            source="title"
            label="Título"
            sx={{ minWidth: "300px", width: "60%" }}
          />

          <TextInput
            source="description"
            label="Descripción"
            multiline
            rows={5}
            sx={{ minWidth: "300px", width: "80%" }}
          />
        </SimpleForm>
      </ThemeProvider>
    </Edit>
  );
};

interface IClasificacionDict {
  [key: string]: { id: string; name: string }[];
}
// Declaración de clasificación & tipo de incidencia para Tickets
export const clasificacionDict: IClasificacionDict = {
  servicios: [
    { id: "agua", name: "Agua" },
    { id: "luz", name: "Luz" },
    { id: "telefono", name: "Teléfono" },
    { id: "basura", name: "Basura" },
    { id: "limpieza_del_aula", name: "Limpieza del Aula" },
  ],
  digital: [
    {
      id: "internet_servidores_equipos",
      name: "Internet, Servidores y Equipos",
    },
    { id: "software", name: "Software" },
    { id: "hardware", name: "Hardware" },
    { id: "camaras_de_seguridad", name: "Cámaras de seguridad" },
    {
      id: "soporte_tecnico_presencial_remoto",
      name: "Soporte técnico presencial y remoto",
    },
  ],
  infraestructura: [
    { id: "paredes", name: "Paredes" },
    { id: "techo", name: "Techo" },
    { id: "ventanas", name: "Ventanas" },
    { id: "puertas", name: "Puertas" },
    { id: "aulas_en_general", name: "Aulas en general" },
  ],
  recursosHumanos: [
    { id: "permisos", name: "Permisos" },
    { id: "asistencias", name: "Asistencias" },
    { id: "salud", name: "Salud" },
    { id: "tramites", name: "Trámites" },
    { id: "honorarios", name: "Honorarios" },
  ],
  beneficiarios: [
    { id: "asistencias_beneficiarios", name: "Asistencias" },
    { id: "documentacion", name: "Documentación" },
    { id: "apoyo_academico", name: "Apoyo académico" },
    { id: "salud_beneficiarios", name: "Salud" },
    { id: "seguridad_bulling", name: "Seguridad, bulling" },
  ],
  mobiliario: [
    { id: "sillas_butacas", name: "Sillas, butacas" },
    { id: "escritorios", name: "Escritorios" },
    { id: "pizarrones", name: "Pizarrones" },
    { id: "cafeteria", name: "Cafetería" },
    { id: "etantes_archiveros", name: "Estantes, archiveros" },
  ],
  seguridad: [
    { id: "delincuencia", name: "Delincuencia" },
    { id: "robos", name: "Robos" },
    { id: "bandalismo", name: "Bandalismo" },
    { id: "imagen_institucional", name: "Imagen institucional" },
  ],
  materiales: [
    { id: "educativos", name: "Materiales Educativos" },
    { id: "papeleria", name: "Papelería" },
    { id: "limpieza_materiales", name: "Materiales de Limpieza" },
  ],
  fenomenoMeteorologico: [
    { id: "inundaciones", name: "Inundaciones" },
    { id: "incendios", name: "Incendios" },
    { id: "sismos", name: "Sismos" },
  ],
};

export const TicketCreate = () => {
  const [clasificacion, setClasificacion] = useState("servicios");

  const changeHandler = (event: any) => {
    setClasificacion(event.target.value);
  };

  console.log(clasificacionDict[clasificacion]);

  return (
    <Create title="Levantar Titcket">
      <ThemeProvider theme={defaultTheme}>
        <SimpleForm warnWhenUnsavedChanges>
          <CardHeader
            title="Nuevo Ticket"
            titleTypographyProps={{ fontWeight: "bold" }}
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
                        { id: "Open", name: "Abierto" }
                    ]}
                    defaultValue={"Open"}
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
              title="Clasificación"
              label="Clasificación"
              choices={[
                { id: "servicios", name: "Servicios" },
                { id: "digital", name: "Digital" },
                { id: "infraestructura", name: "Infraestructura" },
                { id: "recursos_humanos", name: "Recursos Humanos" },
                { id: "beneficiarios", name: "Beneficiarios" },
                { id: "mobiliario", name: "Mobiliario" },
                { id: "seguridad", name: "Seguridad" },
                { id: "materiales", name: "Materiales" },
                {
                  id: "fenomeno_meteorologico",
                  name: "Fenómeno Meteorológico",
                },
              ]}
              onChange={changeHandler}
              validate={required()}
              sx={{ mr: "10px", my: 0 }}
            />

            <SelectInput
              source="incidente"
              title="Tipo de Incidencia"
              label="Incidente"
              choices={clasificacionDict[clasificacion]}
              validate={required()}
              sx={{ mr: "10px", my: 0 }}
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