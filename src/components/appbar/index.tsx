import { AppBar} from 'react-admin';
import { Box } from '@mui/material';

const TopBar = () => (
    <AppBar toolbar={<></>} sx={{backgroundColor: "#8d3186"}}>
        <span>Tickets.edu</span>
        <Box flex="1" />
    </AppBar>
);

export default TopBar;