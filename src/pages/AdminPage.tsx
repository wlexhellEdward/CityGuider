import { useState } from 'react';
import { Bar } from 'components/AdminComponents/Bar';
import { DrawerAdmin } from 'components/AdminComponents/Drawer';
import { Box } from '@mui/material';
import { AdminContent } from 'components/AdminComponents/AdminContent';


export function AdminPage() {
    const [open, setOpen] = useState(false);
    const handleTogleDrawerOpen = () => {
        setOpen(prev => !prev);
    };


    return (
        <Box>
            <Bar />
            <DrawerAdmin open={open} handleDrawerClose={handleTogleDrawerOpen} />
            <Box component="main">
            <AdminContent/>
            </Box>
        </Box>
    );
}
