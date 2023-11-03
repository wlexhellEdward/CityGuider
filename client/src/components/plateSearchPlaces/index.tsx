import { useState } from 'react'

import { Box, Input, List, Typography } from "@mui/material"

import { Places } from '@/components/drawer/Places';
import SearchPlace from '@/components/searchPlace';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux.ts';
import { useSearchPlace } from '@/hooks/useSearchPlace';
import { clearResults, setRadius, setResults } from '@/store/reducers/index.ts';
import { ButtonSearch } from "@/ui/buttonSearch"

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
                    <ButtonSearch handleSetSearchButtonIsClicked={handleSetSearchButtonIsClicked} />
                </Box>
            </Box>

        </Box>
    )
}