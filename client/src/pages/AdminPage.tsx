import { useState } from 'react';

import { Box } from '@mui/material';

import { Bar } from '@/components/adminComponents/bar';
import { DrawerAdmin } from '@/components/adminComponents/drawer';
import { AdminContent } from '@/components/adminComponents/mainContent';


export function AdminPage() {
    const [open, setOpen] = useState(false);
    const handleTogleDrawerOpen = () => {
        setOpen(prev => !prev);
    };

    return (
        <Box>
            <Bar />
            <DrawerAdmin open={open} handleDrawerClose={handleTogleDrawerOpen} />
            <AdminContent />
        </Box>
    );
}
