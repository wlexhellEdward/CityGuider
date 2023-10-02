import AsideStyle from './AsideStyle'
import Container from '@mui/material/Container'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useTypeSelector,useAppDispatch } from '../../hooks/redux'
import { setCurrentStatus } from '../../store/reducers/currentStatus/currentStatusSlice'

import Logo from '../../assets/img/Logo.svg'
import Profile from '../../assets/img/profile.svg'
import Favorite from '../../GUI/Favorite/Favorite';
import Search from '../../GUI/Search/Search';
import FavoriteSelected from '../../GUI/Favorite/FavoriteSelected'
import SearchSelected from '../../GUI/Search/SearchSelected'


export default function Aside() {
    const dispatch = useAppDispatch()
    const currentStatus = useTypeSelector((state) => state.currentStatus.status)
    const switchCurrentStatus = (status: string) => {
        dispatch(setCurrentStatus(status))
    }


    const useAsideStyle = AsideStyle()

    return (
        <Container className={useAsideStyle.classes.asideContainer}>
            <List className={useAsideStyle.classes.listItems}>
                <ListItem className={useAsideStyle.classes.logo}>
                    <ListItemIcon className={useAsideStyle.classes.logo}>
                        <img onClick={() => switchCurrentStatus('close')} src={Logo} alt="" />
                    </ListItemIcon>
                </ListItem>
                <ListItem className={useAsideStyle.classes.listItemButton}>
                    <Container className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('favorites')} disableGutters>
                        {currentStatus !== 'favorites' ?
                            <Favorite />
                            :
                            <FavoriteSelected />
                        }
                    </Container>
                    <Container className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('search')} disableGutters>
                        {currentStatus !== 'search' ?
                            <Search />
                            :
                            <SearchSelected />
                        }
                    </Container>
                </ListItem>
            </List>

            <Container className={useAsideStyle.classes.profileOutter}>
                <img src={Profile} alt="" />
            </Container>

        </Container>
    )
}