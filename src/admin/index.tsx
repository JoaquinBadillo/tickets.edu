import { Admin, CustomRoutes, Resource, ShowGuesser } from "react-admin";
import { Route } from "react-router-dom";

import { 
  AlbumList, 
  Dashboard,
  LoginPage, 
  TicketList, 
  TicketEdit, 
  TicketCreate, 
  ReportDashboard,
  UserList, 
  UserEdit,
  UserCreate
} from "../components";

import { authProvider } from "../lib/authProvider";

import TicketIcon from "@mui/icons-material/ReceiptLong";
import UserIcon from "@mui/icons-material/Group";
import SummaryIcon from "@mui/icons-material/BarChart";

import i18nProvider from "../lib/language";

import simpleRestProvider from "ra-data-simple-rest";


const dataProvider = simpleRestProvider("http://127.0.0.1:1337/api");

const App = () => (
  <Admin 
    authProvider={authProvider} 
    dataProvider={dataProvider} 
    dashboard={Dashboard}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
  >
    {permissions => (
      <>
        { permissions === "admin" &&
          <Resource 
            name="users" 
            list={UserList}
            edit={UserEdit}
            recordRepresentation="name" 
            show={ShowGuesser}
            create={UserCreate} 
            icon={UserIcon}
            options={{ label: "Usuarios" }}
          />
        }
      
        <Resource 
          name="tickets" 
          list={TicketList} 
          edit={TicketEdit} 
          create={TicketCreate} 
          icon={TicketIcon}
        /> 

        <Resource 
          name="reports" 
          list={AlbumList}
          icon={SummaryIcon}
          options={{ label: "Reporte" }}
        />

        { permissions === "admin" &&
          <CustomRoutes>
            <Route path="/reports" element={<ReportDashboard />} />
          </CustomRoutes>
        } 
      </>
    )}
    
  </Admin>
);

export default App;