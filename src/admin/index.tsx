import { Admin, Resource, Layout, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";

import {
  ChangePass,
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
  TopBar
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

const CustomLayout = (props: any) => (
  <Layout {...props} appBar={TopBar} sx={{margin: 0}} />
);


const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
    layout={CustomLayout}
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

        <CustomRoutes>
          <Route path="/change-password" element={<ChangePass />} />
        </CustomRoutes>
      </>
    )}
  </Admin>
);

export default App;
