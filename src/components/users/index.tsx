import { List, SimpleList, Datagrid, TextField, EmailField } from "react-admin";
import UrlField from "./urlField";
import { useMediaQuery, Theme} from '@mui/material';

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
                    <TextField source="phone" />
                    <UrlField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    );
};