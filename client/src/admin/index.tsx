import { Admin, Resource } from "react-admin";
import { UserList } from "../users";
import { TicketList } from "../tickets";

import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    {/* Change to tickets -> Requires API endpoint */}
    <Resource name="comments" list={TicketList} /> 
  </Admin>
);

export default App;