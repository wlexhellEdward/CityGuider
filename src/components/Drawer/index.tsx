import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { useState } from 'react'
import { Container, Typography, Box } from "@mui/material"
import DrawerStyle from './styled.ts'
import CardFavorite from '../CardFavorite/index.tsx';
import Autocomplete from '../Autocomplete/index.tsx'
import Input from '@mui/material/Input';
import { Places } from './Places.ts';
import SearchPlace from '../SearchPlace/index.tsx';
import searchIcon from '../../assets/img/Search.svg'
import { useAppDispatch, useTypeSelector } from '../../hooks/redux.ts';
import { clearResults, setResults } from '../../store/reducers/index.ts';
import { Loader } from '../Loader/index.tsx';

const DrawerWidth = 600

interface SideBarProps {
  currentStatus: string;
  isLoaded: boolean;
}



export default function SideBar({ currentStatus, isLoaded }: SideBarProps) {

  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState("1")
  const map = useTypeSelector(state => state.map.map)
  const center = useTypeSelector(state => state.currentPosition.position)
  const favoriteItems = useTypeSelector((state) => state.favoriteItems.favoriteItems)
  const selectedItems = useTypeSelector(state => state.searchSlice.selectedItems)


  const handlerSetInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.replace(/[^0-9]/g, ''))
  }

  const itemsArray = useTypeSelector((state) => state.searchSlice.selectedItems)
  const handleSetResults = (result: google.maps.places.PlaceResult[]) => dispatch(setResults(result))


  const handleSetSearchButtonIsClicked = () => {
    dispatch(clearResults())
    if (inputValue.length > 0) {
      if (!map) {
        return
      }
      selectedItems.forEach(selectedItem => {
        const request = {
          location: center,
          radius: Number(inputValue) * 1000,
          keyword: selectedItem
        }
        const placesServices = new google.maps.places.PlacesService(map)
        placesServices.nearbySearch(request, (results, status, pagination) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            results.forEach(result => {
              result.icon = Places.find(place => place.type === selectedItem)?.img
            })

            handleSetResults(results)
            if (pagination?.hasNextPage) {
              pagination.nextPage()
              handleSetResults(results)
            }
          }
          else {
            handleSetResults([])
          }
        })
      })


    }
    else {
      alert('Введите радиус в км...')
    }
  }

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


  function testIsSelected(type: string) {
    let result = true;
    if (!itemsArray.includes(type)) {
      result = false
    }
    return result
  } // перенести в более уютное место



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
                        <SearchPlace searchPlace={item} isSelected={testIsSelected(item.type)} />
                      </>
                    )
                  })}
                </Container>
                <Container disableGutters>
                  <Typography className={useDrawerStyle.classes.titleRadius}>В радиусе: </Typography>
                  <Container disableGutters className={useDrawerStyle.classes.containerInputs} >
                    <Input autoFocus={true} onChange={handlerSetInputValue} value={inputValue} className={useDrawerStyle.classes.inputSearch} />
                    <Typography className={useDrawerStyle.classes.spanDescription}>км</Typography>
                  </Container>
                  <Container onClick={handleSetSearchButtonIsClicked} className={useDrawerStyle.classes.buttonSearch} >
                    <img src={searchIcon} alt="../../../public/tempPhoto.jpg" title='icon search' />
                  </Container>
                </Container>

              </Container>
              :
              <Container className={useDrawerStyle.classes.cardsFavorites}>
                <Typography className={useDrawerStyle.classes.titleFavorite}>Избранное:</Typography>
                <Box className={useDrawerStyle.classes.containerCardsFavorites}>
                  {favoriteItems.length > 0 ?
                    favoriteItems.map((item) => {
                      return (
                        <>
                          <CardFavorite favoriteItem={item} />
                        </>)
                    })
                    :
                    <>
                      <Loader text={"Попробуйте что-нибудь добавить)"}></Loader>
                    </>
                  }


                </Box>

              </Container>
            }
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}