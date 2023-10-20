import { Box, Button, IconButton } from "@mui/material";
import FindMe from 'assets/img/MapActions/ButtonFindMe/findMe.svg'
import Moon from 'assets/img/MapActions/ButtonSwitchTheme/moon.svg'
import Sun from 'assets/img/MapActions/ButtonSwitchTheme/sun.svg'
import { useAppDispatch, useTypeSelector } from "hooks/redux"
import { useState } from "react"
import { setCenter } from "store/reducers";
import { decreaseZoom, increaseZoom, setThemeMap } from 'store/reducers/mapSlice/mapSlice';
import { MAP_DARK_THEME, MAP_THEME } from 'utils/consts';
import { getBrowserLocation } from "utils/geo";

import DoesntExistPhoto from '/public/doesntExist.png'

import MapActionStyle from "./styled"


export const MapAction = () => {
    const [themeIcon, setThemeIcon] = useState(Sun)
    const mapRef = useTypeSelector(state => state.map.mapRef)
    const dispatch = useAppDispatch()
    const [isOpenActionMap, setIsOpenActionMap] = useState(false)
    const defaultTheme = useTypeSelector(state => state.map.options.theme)

    const handleClickSetIsOpenActionMap = () => {
        setIsOpenActionMap(prev => prev = !prev)
    }
    const handleSwitchMapTheme = () => {
        setThemeIcon(prev => prev != Sun ? Sun : Moon)
        const newTheme = defaultTheme === MAP_THEME ? MAP_DARK_THEME : MAP_THEME;
        const map = mapRef;
        if (map) {
            map.setOptions({ styles: newTheme });
            dispatch(setThemeMap(newTheme));
        }
    }
    const handleIncreaseZoom = () => {
        dispatch(increaseZoom())
    }
    const handleDecreaseZoom = () => {
        dispatch(decreaseZoom())
    }
    const handleClickButtonFindMe = () => {
        getBrowserLocation().then((location) => {
            dispatch(setCenter(location))
        })
    }

    const useMapActionStyle = MapActionStyle()
    return (
        <>
            <Box className={useMapActionStyle.classes.wrapperMapActions}>
                {isOpenActionMap ?
                    <>
                        <Box className={useMapActionStyle.classes.containerMapActions}>

                            <IconButton onClick={handleClickButtonFindMe} className={useMapActionStyle.classes.findMeButton} >
                                <img src={FindMe} alt={DoesntExistPhoto} title='button find me for map' />
                            </IconButton>
                            <Box className={useMapActionStyle.classes.containerMapActionsZoom}>
                                <Button className={useMapActionStyle.classes.buttonZoom} onClick={handleIncreaseZoom}>+</Button>
                                <hr />
                                <Button className={useMapActionStyle.classes.buttonZoom} onClick={handleDecreaseZoom}>-</Button>
                            </Box>
                            <IconButton onClick={handleSwitchMapTheme} className={useMapActionStyle.classes.switchThemeButton} >
                                <img src={themeIcon} alt={DoesntExistPhoto} title='switch theme map' />
                            </IconButton>
                        </Box>
                        <Button onClick={handleClickSetIsOpenActionMap} className={useMapActionStyle.classes.buttonToggleAction}>{'>'}</Button>
                    </>
                    :
                    <Button onClick={handleClickSetIsOpenActionMap} className={useMapActionStyle.classes.buttonToggleAction}>{'<'}</Button>
                }
            </Box>

        </>
    )
}