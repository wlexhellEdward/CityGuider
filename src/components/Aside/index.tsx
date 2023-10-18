import { Box, Button, List, ListItem, ListItemIcon } from '@mui/material'
import Logo from 'assets/img/Drawer/Logo.svg'
import Profile from 'assets/img/Drawer/profile.svg'
import ArrowBox from 'components/ArrowBox'
import SideBar from 'components/Drawer'
import Favorite from 'GUI/Favorite'
import FavoriteSelected from 'GUI/Favorite/FavoriteSelected'
import Search from 'GUI/Search/Search';
import SearchSelected from 'GUI/Search/SearchSelected'
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import { useGoogleMaps } from 'hooks/useGoogleMapsLoader'
import DoesntExistPhoto from 'public/doesntExist.png'
import { setCurrentStatus } from 'store/reducers'

import AsideStyle from './styled'

export default function Aside() {
    const dispatch = useAppDispatch()
    const currentStatus = useTypeSelector((state) => state.currentStatus.status)
    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    const [favorites, search] = ['favorites', 'search']
    const isLoaded = useGoogleMaps()
    const handleCloseClick = () => { switchCurrentStatus('close') }
    const isOpen = 'close' !== useTypeSelector(state => state.currentStatus.status) ? true : false


    const useAsideStyle = AsideStyle()

    return (
        <>
            <Box className={useAsideStyle.classes.container}>
                <Box className={useAsideStyle.classes.asideContainer}>
                    <List className={useAsideStyle.classes.listItems}>
                        {isOpen ?
                            <Box className={useAsideStyle.classes.drawerAction}>
                                <Button className={useAsideStyle.classes.buttonCloseDrawer} onClick={handleCloseClick}>{'<'}</Button>
                            </Box>
                            :
                            <></>
                        }
                        <ListItem className={useAsideStyle.classes.logo}>
                            <ListItemIcon onClick={handleCloseClick} className={useAsideStyle.classes.logo}>
                                <img title='icon for closing drawer' src={Logo} alt={DoesntExistPhoto} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem className={useAsideStyle.classes.listItemButton}>
                            <Box className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('favorites')}>
                                {currentStatus !== favorites ?
                                    <Favorite />
                                    :
                                    <FavoriteSelected />
                                }
                            </Box>
                            <Box className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('search')}>
                                {currentStatus !== search ?
                                    <Search />
                                    :
                                    <SearchSelected />
                                }
                            </Box>
                        </ListItem>
                    </List>

                    <Box className={useAsideStyle.classes.profileOutter}>
                        <img src={Profile} alt={DoesntExistPhoto} title='img for profile' />
                    </Box>
                </Box>
                {currentStatus !== 'close' ?
                    <SideBar currentStatus={currentStatus} isLoaded={isLoaded} />
                    :
                    <ArrowBox />
                }
            </Box>
        </>
    )
}