import { Container, Box, Typography, Input } from "@mui/material"
import searchIcon from 'assets/img/Search.svg'
import Autocomplete from "components/Autocomplete/index.tsx";
import CardFavorite from 'components/CardFavorite/index.tsx';
import SearchPlace from 'components/SearchPlace/index.tsx';
import { useAppDispatch, useTypeSelector } from 'hooks/redux.ts';
import { useState } from 'react'
import { clearResults, setCurrentStatus, setResults } from 'store/reducers/index.ts';
import DoesntExistPhoto from '/public/doesntExist.jpg'

import { Places } from './Places.ts';
import { DrawerStyle, Drawer, DrawerContent } from './styled.ts'
import { SideBarProps } from "./interfaceProps.ts";
import { Waiter } from "components/Waiter/index.tsx";
import useOnclickOutside from "react-cool-onclickoutside";




export default function SideBar({ currentStatus, isLoaded }: SideBarProps) {

  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState("1")
  const map = useTypeSelector(state => state.map.mapRef)
  const center = useTypeSelector(state => state.currentPosition.position)
  const favoriteItems = useTypeSelector((state) => state.favoriteItems.favoriteItems)
  const selectedItems = useTypeSelector(state => state.searchSlice.selectedItems)


  const handlerSetInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.replace(/[^0-9]/g, ''))
  }
  const switchCurrentStatus = (status: string) => dispatch(setCurrentStatus(status))

  const itemsArray = useTypeSelector((state) => state.searchSlice.selectedItems)
  const handleSetResults = (result: google.maps.places.PlaceResult[]) => dispatch(setResults(result))
  const ref = useOnclickOutside(() => {
    switchCurrentStatus('close')
  });


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




  function testIsSelected(type: string) {
    let result = true;
    if (!itemsArray.includes(type)) {
      result = false
    }
    return result
  } // перенести в более уютное место



  return (
    <>
      <Drawer ref={ref} className={useDrawerStyle.classes.drawer} variant="permanent" anchor='left' open={currentStatus != 'close'}>
        <DrawerContent className={useDrawerStyle.classes.drawerContent}>
          <Container className={useDrawerStyle.classes.containerSearch}>
            <Autocomplete isLoaded={isLoaded} />
          </Container>
          {/* <Box>
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
                    <img src={searchIcon} alt={DoesntExistPhoto} title='icon search' />
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
                      <Waiter text={" Попробуйте что-нибудь добавить"} />
                    </>
                  }
                </Box>
              </Container>
            }
          </Box> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}