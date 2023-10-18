import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";

import {
  Dashboard,
  LoginPage,
  TicketList,
  TicketEdit,
  TicketCreate,
  ReportDashboard,
  UserList,
  UserEdit,
  UserCreate,
  UserShow,
  TicketShow,
} from "../components";

import { authProvider } from "../lib/authProvider";

import TicketIcon from "@mui/icons-material/ReceiptLong";
import UserIcon from "@mui/icons-material/Group";
import SummaryIcon from "@mui/icons-material/BarChart";

import i18nProvider from "../lib/language";

import restProvider from "../lib/dataProvider";

const dataProvider = restProvider(
  import.meta.env.VITE_API_URL || "http://127.0.0.1:1337/api"
);

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
  >
    {(permissions) => (
      <>
        {permissions === "admin" && (
          <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            recordRepresentation="name"
            show={UserShow}
            create={UserCreate}
            icon={UserIcon}
            options={{ label: "Usuarios" }}
          />
        )}

        <Resource
          name="tickets"
          list={TicketList}
          edit={TicketEdit}
          show={TicketShow}
          create={TicketCreate}
          icon={TicketIcon}
        />

        {permissions === "admin" && (
          <>
            <Resource
              name="reports"
              list={<ReportDashboard />}
              icon={SummaryIcon}
              options={{ label: "Reporte" }}
            />
          </>
        )}
      </>
    )}
  </Admin>
);

export default App;
