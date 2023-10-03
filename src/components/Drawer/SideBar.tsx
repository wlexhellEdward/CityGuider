import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Container from "@mui/material/Container"
import DrawerStyle from './DrawerStyle.tsx'
import CardFavorite from '../CardFavorite/CardFavorite.tsx';
import Autocomplete from '../Autocomplete/Autocomplete.tsx'
import { deleteFavoriteItem, setIsClicked } from '../../store/reducers'

import Input from '@mui/material/Input';
import { Places } from './Places.tsx';
import SearchPlace from '../SearchPlace/SearchPlace.tsx';
import Typography from '@mui/material/Typography';
import searchIcon from '../../assets/img/Search.svg'
import Box from '@mui/material/Box'
import { useAppDispatch, useTypeSelector } from '../../hooks/redux.ts';

const DrawerWidth = 600

interface SideBarProps {
  currentStatus: string;
  isLoaded: boolean;
}



export default function SideBar({ currentStatus, isLoaded }: SideBarProps) {


  const dispatch = useAppDispatch()
  const favoriteItems = useTypeSelector((state) => state.favoriteItems.favoriteItems)


  const itemsArray = useTypeSelector((state) => state.selectedItems.selectedItems)


  const handleSetSearchButtonIsClicked = dispatch(setIsClicked())





  const useDrawerStyle = DrawerStyle()

  const openedMixin = (theme: Theme): CSSObject => ({
    width: 'auto',
    maxWidth: DrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(11)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(13)} + 1px)`,
    },
  });
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: 'auto',
      maxWidth: DrawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',

      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  const DrawerContent = styled('div')(() => ({
    display: 'flex',
    columnGap: '20px',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: 5
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 4,
      backgroundColor: `#7D908C`
    },
    overflowY: 'scroll',
  }))






  return (
    <>
      <Drawer className={useDrawerStyle.classes.drawer} variant="permanent" anchor='left' open={currentStatus != 'close' ? true : false}>
        <DrawerContent className={useDrawerStyle.classes.drawerContent}>
          <Container className={useDrawerStyle.classes.containerSearch}>
            <Autocomplete isLoaded={isLoaded} />
          </Container>
          <Box>
            {currentStatus == 'search' ?
              <Container className={useDrawerStyle.classes.platePlaces}>
                <Typography className={useDrawerStyle.classes.titleFavorite}>Искать: </Typography>
                <Container className={useDrawerStyle.classes.containerPlaces}>
                  {Places.map((item) => {
                    return (
                      <>
                        <SearchPlace searchPlace={item} isSelected={itemsArray.includes(item.type)} />
                      </>
                    )
                  })}
                </Container>
                <Container disableGutters>
                  <Typography className={useDrawerStyle.classes.titleRadius}>В радиусе: </Typography>
                  <Container disableGutters className={useDrawerStyle.classes.containerInputs} >
                    <Input className={useDrawerStyle.classes.inputSearch} />
                    <Typography className={useDrawerStyle.classes.spanDescription}>км</Typography>
                  </Container>
                  <Container className={useDrawerStyle.classes.buttonSearch} >
                    <img onClick={() => handleSetSearchButtonIsClicked} src={searchIcon} alt="" />
                  </Container>
                </Container>

              </Container>
              :
              <Container className={useDrawerStyle.classes.cardsFavorites}>
                <Typography className={useDrawerStyle.classes.titleFavorite}>Избранное:</Typography>
                <Box className={useDrawerStyle.classes.containerCardsFavorites}>
                  {favoriteItems.map((item) => {
                    return (<>
                      <CardFavorite favoriteItem={item} />
                    </>)
                  })}
                </Box>

              </Container>
            }
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}