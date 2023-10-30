import {
    List, Divider, IconButton,
    ListItem, ListItemButton, ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Drawer, DrawerHeader } from './styled';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';

interface DrawerProps {
    open?: boolean;
    handleDrawerClose: () => void
}

export const DrawerAdmin = ({ open, handleDrawerClose }: DrawerProps) => {

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {open ?
                        <ChevronLeftIcon />
                        :
                        <ChevronRightIcon />
                    }

                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Пользователи'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DnsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Информация о сайте'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    )
}