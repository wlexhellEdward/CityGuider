import { useState } from 'react'
import { toast } from 'react-toastify';

import { Box, Input, List, Typography } from "@mui/material"

import SearchPlace from '@/components/SearchPlace';
import { SUCCESES } from '@/constants/consts';
import { Places } from '@/constants/places';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux.ts';
import { useSearchPlace } from '@/hooks/useSearchPlace';
import { clearResults, setRadius, setResults } from '@/store/reducers/index.ts';
import { ButtonSearch } from "city-guider-ui-library/src/components/ButtonSearch"

import PlateSearchPlacesStyle from "./styled"


export const PlateSearchPlaces = () => {
    const itemsArray = useTypeSelector((state) => state.searchSlice.selectedItems)
    const [inputValue, setInputValue] = useState("1")
    const map = useTypeSelector(state => state.map.mapRef)
    const center = useTypeSelector(state => state.currentPosition.position)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const handleSetRadius = (radius: number) => dispatch(setRadius(radius))
    const handlerSetInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setInputValue(newValue);
        handleSetRadius(parseFloat(newValue) * 1000);
    }
    const result = useSearchPlace({ map, center, inputValue })

    const handleSetSearchButtonIsClicked = () => {
        dispatch(clearResults())
        dispatch(setResults(result))
        toast(SUCCESES.SEARCH_FINISH, { type: 'info' })
    }
    function testIsSelected(type: string) {
        let result = true;
        if (!itemsArray.includes(type)) {
            result = false
        }
        return result
    }
    const usePlateSearchPlacesStyle = PlateSearchPlacesStyle({ Pallete: pallete })
    return (
        <Box data-testid='plate-search' className={usePlateSearchPlacesStyle.classes.platePlaces}>
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
            <Box className={usePlateSearchPlacesStyle.classes.SearchActionsBox}>
                <Typography className={usePlateSearchPlacesStyle.classes.titleRadius}>В радиусе: </Typography>
                <Box className={usePlateSearchPlacesStyle.classes.containerInputs} >
                    <Input onChange={handlerSetInputValue} value={inputValue} className={usePlateSearchPlacesStyle.classes.inputSearch} />
                    <Typography className={usePlateSearchPlacesStyle.classes.spanDescription}>км</Typography>
                </Box>
                <Box className={usePlateSearchPlacesStyle.classes.buttonSearchContainer}>
                    <ButtonSearch handleClick={handleSetSearchButtonIsClicked} />
                </Box>
            </Box>
        </Box>
    )
}