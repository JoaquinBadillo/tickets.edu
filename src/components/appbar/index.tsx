//@ts-nocheck
import * as React from 'react';
import { Box } from '@mui/material';
import { AppBar, UserMenu, useUserMenu, Logout, useRedirect } from 'react-admin';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsMenuItem = React.forwardRef((props, ref) => {
    const redirect = useRedirect();

    return (
        <MenuItem
            onClick={() => {
                redirect('/change-password');
            }}
            ref={ref}
            {...props}
        >
            <ListItemIcon>
                <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cambiar Contraseña</ListItemText>
        </MenuItem>
    );
});

const TopBar = () => (
    <AppBar 
        toolbar={<></>} 
        userMenu={
            <UserMenu>
                <SettingsMenuItem />
                <Logout />
            </UserMenu>
        } 
        sx={{backgroundColor: "#8d3186"}}>
        <span>Tickets.edu</span>
        <Box flex="1" />
    </AppBar>
);

export default TopBar;