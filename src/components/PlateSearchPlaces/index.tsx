import { Box, Input,List, Typography } from "@mui/material"
import { Places } from 'components/Drawer/Places.ts';
import SearchPlace from 'components/SearchPlace/index.tsx';
import { ButtonSearch } from "GUI/ButtonSearch"
import { useAppDispatch, useTypeSelector } from 'hooks/redux.ts';
import { useState } from 'react'
import { clearResults, setResults } from 'store/reducers/index.ts';

import PlateSearchPlacesStyle from "./styled"

export const PlateSearchPlaces = () => {
    const itemsArray = useTypeSelector((state) => state.searchSlice.selectedItems)
    const [inputValue, setInputValue] = useState("1")
    const map = useTypeSelector(state => state.map.mapRef)
    const center = useTypeSelector(state => state.currentPosition.position)
    const selectedItems = useTypeSelector(state => state.searchSlice.selectedItems)


    const handleSetResults = (result: google.maps.places.PlaceResult[]) => dispatch(setResults(result))
    const dispatch = useAppDispatch()
    const handlerSetInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value.replace(/[^0-9]/g, ''))
    }

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
    function testIsSelected(type: string) {
        let result = true;
        if (!itemsArray.includes(type)) {
            result = false
        }
        return result
    }
    const usePlateSearchPlacesStyle = PlateSearchPlacesStyle()
    return (
        <Box className={usePlateSearchPlacesStyle.classes.platePlaces}>
            <Typography className={usePlateSearchPlacesStyle.classes.titleFavorite}>Искать: </Typography>
            <List className={usePlateSearchPlacesStyle.classes.containerPlaces}>
                {Places.map((item) => {
                    return (
                        <>
                            <SearchPlace searchPlace={item} isSelected={testIsSelected(item.type)} />
                        </>
                    )
                })}
            </List>
            <Box>
                <Typography className={usePlateSearchPlacesStyle.classes.titleRadius}>В радиусе: </Typography>
                <Box className={usePlateSearchPlacesStyle.classes.containerInputs} >
                    <Input autoFocus={true} onChange={handlerSetInputValue} value={inputValue} className={usePlateSearchPlacesStyle.classes.inputSearch} />
                    <Typography className={usePlateSearchPlacesStyle.classes.spanDescription}>км</Typography>
                </Box>
                <Box className={usePlateSearchPlacesStyle.classes.buttonSearchContainer}>
                    <ButtonSearch handleSetSearchButtonIsClicked={handleSetSearchButtonIsClicked} />
                </Box>
            </Box>

        </Box>
    )
}