import { Container, List, ListItem, ListItemIcon } from '@mui/material'
import Logo from 'assets/img/Logo.svg'
import Profile from 'assets/img/profile.svg'
import Favorite from 'GUI/Favorite'
import FavoriteSelected from 'GUI/Favorite/FavoriteSelected'
import Search from 'GUI/Search/Search';
import SearchSelected from 'GUI/Search/SearchSelected'
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import { setCurrentStatus } from 'store/reducers'

import DoesntExistPhoto from '../../../public/doesntExist.jpg'

import AsideStyle from './styled'

export default function Aside() {
    const dispatch = useAppDispatch()
    const currentStatus = useTypeSelector((state) => state.currentStatus.status)
    const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))
    const [favorites, search] = ['favorites', 'search']


    const useAsideStyle = AsideStyle()

    return (
        <Container className={useAsideStyle.classes.asideContainer}>
            <List className={useAsideStyle.classes.listItems}>
                <ListItem className={useAsideStyle.classes.logo}>
                    <ListItemIcon className={useAsideStyle.classes.logo}>
                        <img onClick={() => switchCurrentStatus('close')} title='icon for closing drawer' src={Logo} alt={DoesntExistPhoto} />
                    </ListItemIcon>
                </ListItem>
                <ListItem className={useAsideStyle.classes.listItemButton}>
                    <Container className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('favorites')} disableGutters>
                        {currentStatus !== favorites ?
                            <Favorite />
                            :
                            <FavoriteSelected />
                        }
                    </Container>
                    <Container className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('search')} disableGutters>
                        {currentStatus !== search ?
                            <Search />
                            :
                            <SearchSelected />
                        }
                    </Container>
                </ListItem>
            </List>

            <Container className={useAsideStyle.classes.profileOutter}>
                <img src={Profile} alt={DoesntExistPhoto} title='img for profile' />
            </Container>

        </Container>
    )
}