import { useState } from 'react'

import { Box, Button, List, ListItem, ListItemIcon } from '@mui/material'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logo from '@/assets/img/Drawer/Logo.svg'
import Exit from '@/assets/img/DrawerActions/exit.svg'
import ArrowBox from '@/components/arrowBox'
import { СonfirmModal } from '@/components/confirmModal'
import SideBar from '@/components/drawer'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { setCurrentStatus } from '@/store/reducers'
import Favorite from '@/ui/favorite'
import FavoriteSelected from '@/ui/favorite/favoriteSelected'
import Search from '@/ui/search/Search';
import SearchSelected from '@/ui/search/SearchSelected'

import AsideStyle from './styled'
import DoesntExistPhoto from '/public/doesntExist.png'
import { Link } from 'react-router-dom'


export default function Aside() {
    const dispatch = useAppDispatch()
    const [showModal, setShowModal] = useState(false)
    const currentStatus = useTypeSelector((state) => state.currentStatus.status)
    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    const [favorites, search] = ['favorites', 'search']
    const role = useTypeSelector(state => state.userSlice.role)
    console.log(role)
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
                        <Box data-testid='button-search' className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('search')}>
                            {role ?
                                <Link to='/admin'>
                                    <AdminPanelSettingsIcon  className={useAsideStyle.classes.adminIcon}/>
                                </Link>
                                :
                                null
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