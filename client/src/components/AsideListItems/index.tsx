import { Link } from 'react-router-dom';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Box, Button, List, ListItem, ListItemIcon } from '@mui/material';

import Logo from '@/assets/img/drawer/Logo.svg';
import { URL } from '@/constants/routes';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setCurrentStatus } from '@/store/reducers';
import Favorite from 'city-guider-ui-library/src/svg/favorite'
import FavoriteSelected from 'city-guider-ui-library/src/svg/favoriteSelected'
import Search from 'city-guider-ui-library/src/svg/search/Search';
import SearchSelected from 'city-guider-ui-library/src/svg/search/SearchSelected'

import { titles } from './config';
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
                    <img title={titles.listItem} src={Logo} alt={DoesntExistPhoto} />
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
                        <Link to={URL.admin}>
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

