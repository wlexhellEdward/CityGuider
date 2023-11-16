import { useState } from "react"

import { Box, Button, IconButton } from "@mui/material";

import FindMe from '@/assets/img/mapActions/buttonFindMe/findMe.svg'
import Moon from '@/assets/img/mapActions/buttonSwitchTheme/moon.svg'
import Sun from '@/assets/img/mapActions/buttonSwitchTheme/sun.svg'
import { DARK_THEME_APP, LIGHT_THEME_APP, MAP_DARK_THEME, MAP_THEME } from '@/constants/theme';
import { useAppDispatch, useTypeSelector } from "@/hooks/redux"
import { setCenter } from "@/store/reducers";
import { setAppTheme } from "@/store/reducers/appSlice/appSlice";
import { decreaseZoom, increaseZoom, setMapTheme } from '@/store/reducers/mapSlice/mapSlice';
import { getBrowserLocation } from "@/utils/map/geo";

import { titles } from "./config";
import MapActionStyle from "./styled"
import DoesntExistPhoto from '/public/doesntExist.png'


export const MapAction = () => {
    const [themeIcon, setThemeIcon] = useState(Sun)
    const [isOpenActionMap, setIsOpenActionMap] = useState(false)
    const mapRef = useTypeSelector(state => state.map.mapRef)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const defaultThemeMap = useTypeSelector(state => state.map.options.theme)
    const handleClickSetIsOpenActionMap = () => {
        setIsOpenActionMap(prev => prev = !prev)
    }
    const handleSwitchMapTheme = () => {
        setThemeIcon(prev => prev != Sun ? Sun : Moon)
        const newMapTheme = defaultThemeMap === MAP_THEME ? MAP_DARK_THEME : MAP_THEME;
        const newAppTheme = pallete === LIGHT_THEME_APP ? DARK_THEME_APP : LIGHT_THEME_APP
        const map = mapRef;
        if (map) {
            map.setOptions({ styles: newMapTheme });
            dispatch(setMapTheme(newMapTheme));
        }
        dispatch(setAppTheme(newAppTheme))
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
    const useMapActionStyle = MapActionStyle({Pallete:pallete})
    return (
        <>
            <Box className={useMapActionStyle.classes.wrapperMapActions}>
                {isOpenActionMap ?
                    <>
                        <Box className={useMapActionStyle.classes.containerMapActions}>

                            <IconButton onClick={handleClickButtonFindMe} className={useMapActionStyle.classes.findMeButton} >
                                <img src={FindMe} alt={DoesntExistPhoto} title={titles.btnFindMe} />
                            </IconButton>
                            <Box className={useMapActionStyle.classes.containerMapActionsZoom}>
                                <Button className={useMapActionStyle.classes.buttonZoom} onClick={handleIncreaseZoom}>+</Button>
                                <hr />
                                <Button className={useMapActionStyle.classes.buttonZoom} onClick={handleDecreaseZoom}>-</Button>
                            </Box>
                            <IconButton onClick={handleSwitchMapTheme} className={useMapActionStyle.classes.switchThemeButton} >
                                <img src={themeIcon} alt={DoesntExistPhoto} title={titles.btnSwitch} />
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