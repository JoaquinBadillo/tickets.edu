import { Admin, Resource, ShowGuesser } from "react-admin";

import { 
  AlbumList, 
  Dashboard,
  LoginPage, 
  TicketList, 
  TicketEdit, 
  TicketCreate, 
  UserList, 
  UserEdit,
  UserCreate
} from "../components";

import { authProvider } from "../lib/authProvider";

import TicketIcon from "@mui/icons-material/ReceiptLong";
import UserIcon from "@mui/icons-material/Group";
import SummaryIcon from "@mui/icons-material/BarChart";


import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin 
    authProvider={authProvider} 
    dataProvider={dataProvider} 
    dashboard={Dashboard}
    loginPage={LoginPage}
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
          />
        }
      
        <Resource 
          name="posts" 
          list={TicketList} 
          edit={TicketEdit} 
          create={TicketCreate} 
          icon={TicketIcon}
        /> 

        <Resource 
          name="albums" 
          list={AlbumList}
          icon={SummaryIcon}
        /> 
      </>
    )}
    
  </Admin>
);

export default App;