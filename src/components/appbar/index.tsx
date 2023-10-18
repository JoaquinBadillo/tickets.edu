import { AppBar} from 'react-admin';
import { Box } from '@mui/material';

const TopBar = () => (
    <AppBar toolbar={<></>}>
        <span>Tickets.edu</span>
        <Box flex="1" />
    </AppBar>
);

export default TopBar;