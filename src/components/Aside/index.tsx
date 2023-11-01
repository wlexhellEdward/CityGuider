import { Box, Button, List, ListItem, ListItemIcon } from '@mui/material'
import Logo from 'assets/img/Drawer/Logo.svg'
import Exit from 'assets/img/DrawerActions/exit.svg'
import ArrowBox from 'components/arrowBox'
import { СonfirmModal } from 'components/confirmModal'
import SideBar from 'components/drawer'
import Favorite from 'ui/Favorite'
import FavoriteSelected from 'ui/Favorite/favoriteSelected'
import Search from 'ui/Search/Search';
import SearchSelected from 'ui/Search/SearchSelected'
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import DoesntExistPhoto from 'public/doesntExist.png'
import { useState } from 'react'
import { setCurrentStatus } from 'store/reducers'

import AsideStyle from './styled'


export default function Aside() {
    const dispatch = useAppDispatch()
    const [showModal, setShowModal] = useState(false)
    const currentStatus = useTypeSelector((state) => state.currentStatus.status)
    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    const [favorites, search] = ['favorites', 'search']
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const handleCloseClick = () => { switchCurrentStatus('close') }
    const handleClickProfile = () => {
        setShowModal(prev => !prev)
    }
    

    const useAsideStyle = AsideStyle({ Pallete: pallete })

    return (
        <Box className={useAsideStyle.classes.container}>
            <Box data-testid='aside' className={useAsideStyle.classes.asideContainer}>
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
                    </ListItem>
                </List>

                <Box className={useAsideStyle.classes.profileOutter}>
                    <img onClick={handleClickProfile} src={Exit} alt={DoesntExistPhoto} title='img for profile' />
                </Box>
                {showModal ?
                    <СonfirmModal isOpen={showModal} handleClose={handleClickProfile} />
                    :
                    null
                }
            </Box>
            {currentStatus !== 'close' ?
                <SideBar currentStatus={currentStatus} />
                :
                <ArrowBox />
            }
        </Box>
    )
}