import { Admin, Resource, ShowGuesser } from "react-admin";

import { 
  AlbumList, 
  Dashboard,
  LoginPage, 
  TicketList, 
  TicketEdit, 
  TicketCreate, 
  UserList, 
} from "../components";

import { authProvider } from "../lib/authProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";


import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin 
    authProvider={authProvider} 
    dataProvider={dataProvider} 
    dashboard={Dashboard}
    loginPage={LoginPage}
  >
    <Resource 
      name="users" 
      list={UserList} 
      recordRepresentation="name" 
      show={ShowGuesser}
      icon={UserIcon}
    />
      
    {/* Change to tickets -> Requires API endpoint */}
    <Resource 
      name="posts" 
      list={TicketList} 
      edit={TicketEdit} 
      create={TicketCreate} 
      icon={PostIcon}
    /> 

    <Resource 
      name="albums" 
      list={AlbumList}
    /> 

  </Admin>
);

export default App;