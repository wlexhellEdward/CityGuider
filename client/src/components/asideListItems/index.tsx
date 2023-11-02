import { Link } from 'react-router-dom';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Box, Button, List, ListItem, ListItemIcon } from '@mui/material';

import Logo from '@/assets/img/Drawer/Logo.svg';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setCurrentStatus } from '@/store/reducers';
import Favorite from '@/ui/favorite'
import FavoriteSelected from '@/ui/favorite/favoriteSelected'
import Search from '@/ui/search/Search';
import SearchSelected from '@/ui/search/SearchSelected'

import AsideListItemsStyle from './styled';
import DoesntExistPhoto from '/public/doesntExist.png';

export const AsideListItems = () => {
    const dispatch = useAppDispatch();
    const { status: currentStatus } = useTypeSelector(state => state.currentStatus);
    const { role, Pallete } = useTypeSelector(state => ({
        role: state.userSlice.role,
        Pallete: state.appSlice.Pallete
    }));

    const useAsideStyle = AsideListItemsStyle({ Pallete });

    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status));
    const [favorites, search] = ['favorites', 'search']


    const handleCloseClick = () => { switchCurrentStatus('close') };

    return (
        <List className={useAsideStyle.classes.listItems}>
            {currentStatus !== 'close' ?
                <Box className={useAsideStyle.classes.drawerAction}>
                    <Button data-testid='button-close' className={useAsideStyle.classes.buttonCloseDrawer} onClick={handleCloseClick}>{'<'}</Button>
                </Box>
                :
                null
            }
            <ListItem className={useAsideStyle.classes.logo}>
                <ListItemIcon onClick={handleCloseClick} className={useAsideStyle.classes.logo}>
                    <img title='icon for closing drawer' src={Logo} alt={DoesntExistPhoto} />
                </ListItemIcon>
            </ListItem>
            <ListItem className={useAsideStyle.classes.listItemButton}>
                <Box data-testid='button-favorite' className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('favorites')}>
                    {currentStatus !== favorites ?
                        <Favorite />
                        :
                        <FavoriteSelected />
                    }
                </Box>
                <Box data-testid='button-search' className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('search')}>
                    {currentStatus !== search ?
                        <Search />
                        :
                        <SearchSelected />
                    }
                </Box>
                <Box data-testid='button-search' className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('search')}>
                    {role ?
                        <Link to='/admin'>
                            <AdminPanelSettingsIcon className={useAsideStyle.classes.adminIcon} />
                        </Link>
                        :
                        null
                    }
                </Box>
            </ListItem>
        </List>
    );
};

