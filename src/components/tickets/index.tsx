import {
  Create,
  DateField,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  usePermissions,
  Show,
  TopToolbar,
  SelectColumnsButton,
  FilterButton,
  CreateButton,
  ExportButton,
  useRecordContext,
  Toolbar,
  SaveButton,
  useGetList,
  useDataProvider,
  useRedirect,
  UrlField,
} from "react-admin";

import { useState } from "react";

import { Box } from "@mui/system";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { TicketTitle } from "./hooks";
import { TicketFilters } from "./utils";

const defaultTheme = createTheme();

const TicketColumnActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

export const TicketList = () => {
  const { permissions } = usePermissions();

  const { data, isLoading, error } = useGetList("tickets", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "id", order: "DESC" },
  });

  if (isLoading || error) return <div>loading...</div>;

  const data_test = {
    rows: data,
    columns: [
      {
        field: "id",
        headerName: "ID",
        minWidth: 210,
        renderCell: (params) => (
          <ReferenceField
            basePath="/tickets"
            record={params.row}
            source="id"
            reference="tickets"
          >
            <UrlField source="id" href={`#/tickets/${params.row.id}/show`} />
          </ReferenceField>
        ),
      },
      { field: "title", headerName: "Título", minWidth: 280 },
      { field: "status", headerName: "Estado", minWidth: 100 },
      { field: "date", headerName: "Fecha", minWidth: 105 },
      permissions === "admin" && {
        field: "usuario",
        headerName: "Usuario",
        minWidth: 120,
        renderCell: (params) => (
          <ReferenceField
            basePath="/tickets"
            record={params.row}
            source="userId"
            reference="users"
          >
            <TextField source="user" />
          </ReferenceField>
        ),
      },
      { field: "folio", headerName: "Folio", minWidth: 150 },
      {
        field: "edit",
        headerName: "Editar",
        minWidth: 100,
        renderCell: (params) => (
          <EditButton basePath="/tickets" record={params.row} label="Editar" />
        ),
      },
    ],
  };

  return (
    <Box sx={{ height: "70%", width: "100%" }}>
      <TicketColumnActions />
      <DataGrid {...data_test} />
    </Box>
  );
};

export const SelectStatus = () => {
  const record = useRecordContext();
  if (!record) return null;

  let choices = [
    { id: "Cerrado", name: "Cerrado" },
    { id: "En Progreso", name: "En Progreso" },
    { id: "Abierto", name: "Abierto" },
  ];

  if (record.status === "En Progreso") choices.pop();
  else if (record.status === "Cerrado") {
    choices = [{ id: "Cerrado", name: "Cerrado" }];
  }

  const isClosed = record.status === "Cerrado";

  return (
    <SelectInput
      validate={required()}
      source="status"
      label="Status"
      defaultValue={record.status}
      choices={choices}
      disabled={isClosed}
      sx={{ paddingLeft: "10px" }}
    />
  );
};

const TicketEditToolbar = (props?: any) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const TicketEdit = () => {
  const { permissions } = usePermissions();

  return (
    <Edit>
      <ThemeProvider theme={defaultTheme}>
        <SimpleForm toolbar={<TicketEditToolbar />} warnWhenUnsavedChanges>
          <CardHeader
            title="Editar Ticket"
            titleTypographyProps={{ fontWeight: "bold" }}
          />

          <Box>
            {permissions === "admin" && (
              <ReferenceInput label="Usuario" source="userId" reference="users">
                <SelectInput label="Usuario" disabled />
              </ReferenceInput>
            )}

            <SelectStatus />
          </Box>

          <TextInput
            source="title"
            label="Título"
            sx={{ minWidth: "300px", width: "60%" }}
          />

          <TextInput
            source="folio"
            label="Número de Folio"
            multiline
            rows={5}
            sx={{ minWidth: "150px", width: "80%" }}
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
  Servicios: [
    { id: "Agua", name: "Agua" },
    { id: "Luz", name: "Luz" },
    { id: "Teléfono", name: "Teléfono" },
    { id: "Basura", name: "Basura" },
    { id: "Limpieza del Aula", name: "Limpieza del Aula" },
  ],
  Digital: [
    {
      id: "Internet servidores equipos",
      name: "Internet, servidores y equipos",
    },
    { id: "Software", name: "Software" },
    { id: "Hardware", name: "Hardware" },
    { id: "Cámaras de Seguridad", name: "Cámaras de seguridad" },
    {
      id: "Soporte técnico presencial remoto",
      name: "Soporte técnico presencial y remoto",
    },
  ],
  Infraestructura: [
    { id: "Paredes", name: "Paredes" },
    { id: "Techo", name: "Techo" },
    { id: "Ventanas", name: "Ventanas" },
    { id: "Puertas", name: "Puertas" },
    { id: "Aulas en general", name: "Aulas en general" },
  ],
  "Recursos Humanos": [
    { id: "Permisos", name: "Permisos" },
    { id: "Asistencias", name: "Asistencias" },
    { id: "Salud", name: "Salud" },
    { id: "Trámites", name: "Trámites" },
    { id: "Honorarios", name: "Honorarios" },
  ],
  Beneficiarios: [
    { id: "Asistencias", name: "Asistencias" },
    { id: "Documentación", name: "Documentación" },
    { id: "Apoyo académico", name: "Apoyo académico" },
    { id: "Salud", name: "Salud" },
    { id: "Seguridad, bullying", name: "Seguridad, bulling" },
  ],
  Mobiliario: [
    { id: "Sillas, butacas", name: "Sillas, butacas" },
    { id: "Escritorios", name: "Escritorios" },
    { id: "Pizarrones", name: "Pizarrones" },
    { id: "Cafeteria", name: "Cafetería" },
    { id: "Estantes, archiveros", name: "Estantes, archiveros" },
  ],
  Seguridad: [
    { id: "Delincuencia", name: "Delincuencia" },
    { id: "Robos", name: "Robos" },
    { id: "Bandalismo", name: "Bandalismo" },
    { id: "Imagen institucional", name: "Imagen institucional" },
  ],
  Materiales: [
    { id: "Educativos", name: "Materiales Educativos" },
    { id: "Papeleria", name: "Papelería" },
    { id: "Materiales de Limpieza", name: "Materiales de Limpieza" },
  ],
  "Fenómenos Meteorológicos": [
    { id: "Inundaciones", name: "Inundaciones" },
    { id: "Incendios", name: "Incendios" },
    { id: "Sismos", name: "Sismos" },
  ],
};

export const TicketCreate = () => {
  const [clasificacion, setClasificacion] = useState("Servicios");

  const changeHandler = (event: any) => {
    setClasificacion(event.target.value);
  };

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
            sx={{ minWidth: "300px", width: "60%" }}
            validate={required()}
          />

          <SelectInput
            source="status"
            title="Estado"
            label="Estado"
            sx={{ minWidth: "300px", width: "60%" }}
            validate={required()}
            choices={[{ id: "Abierto", name: "Abierto" }]}
            defaultValue={"Abierto"}
            disabled
          />

          <Box
            sx={{
              minWidth: "300px",
              width: "60%",
              flexDirection: "row",
              flexWrap: "true",
            }}
          >
            <SelectInput
              source="priority"
              title="Prioridad"
              label="Prioridad"
              choices={[
                { id: "Alta", name: "Alta" },
                { id: "Media", name: "Media" },
                { id: "Baja", name: "Baja" },
              ]}
              defaultValue={"Baja"}
              validate={required()}
              sx={{ mr: "10px", my: 0 }}
            />

            <SelectInput
              source="category"
              title="Clasificación"
              label="Clasificación"
              choices={[
                { id: "Servicios", name: "Servicios" },
                { id: "Digital", name: "Digital" },
                { id: "Infraestructura", name: "Infraestructura" },
                { id: "Recursos Humanos", name: "Recursos Humanos" },
                { id: "Beneficiarios", name: "Beneficiarios" },
                { id: "Mobiliario", name: "Mobiliario" },
                { id: "Seguridad", name: "Seguridad" },
                { id: "Materiales", name: "Materiales" },
                {
                  id: "Fenómenos Meteorológicos",
                  name: "Fenómenos Meteorológicos",
                },
              ]}
              defaultValue={"Servicios"}
              onChange={changeHandler}
              validate={required()}
              sx={{ mr: "10px", my: 0 }}
            />

            <SelectInput
              source="incident"
              title="Tipo de Incidencia"
              label="Incidente"
              choices={clasificacionDict[clasificacion]}
              validate={required()}
              sx={{ mr: "10px", my: 0 }}
            />

            <SelectInput
              source="location"
              title="Ubicación"
              label="Ubicación"
              choices={[
                { id: "sf", name: "Santa Fe" },
                { id: "tol", name: "Toluca" },
              ]}
              validate={required()}
              sx={{ mr: "10px", my: 0 }}
            />
          </Box>

          <TextInput
            source="folio"
            title="Número de folio"
            label="Número de folio"
            multiline
            rows={1}
            sx={{ minWidth: "150px", width: "80%" }}
            validate={required()}
            defaultValue={" "}
          />

          <TextInput
            source="description"
            title="Descripción"
            label="Descripción"
            multiline
            rows={5}
            sx={{ minWidth: "300px", width: "80%" }}
            validate={required()}
          />
        </SimpleForm>
      </ThemeProvider>
    </Create>
  );
};

export const TicketShow = () => (
  <Show title={<TicketTitle />}>
    <SimpleShowLayout>
      <TextField source="title" label="Título" />
      <TextField source="status" label="Estado" />
      <TextField source="priority" label="Prioridad" />
      <TextField source="category" label="Categoría" />
      <TextField source="incident" label="Incidente" />
      <TextField source="folio" label="Número de folio" component="pre" />
      <TextField source="description" label="Descripción" component="pre" />
    </SimpleShowLayout>
  </Show>
);
