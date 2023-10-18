import { useCallback, useRef, useState } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import { InfoWindow } from '@react-google-maps/api';
import { GoogleMap, Marker } from "@react-google-maps/api";
import CardPlace from "components/CardPlace";
import { CurrentLocationMarker } from "components/CurrentLocationMarker";
import { Loader } from "components/Loader";
import { RouteInfo } from "components/RouteInfo";
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { useGoogleMaps } from "hooks/useGoogleMapsLoader";
import { setCenter, setHumanPosition } from 'store/reducers';
import { clearDirection, decreaseZoom, increaseZoom, setMap, setThemeMap } from 'store/reducers/mapSlice/mapSlice';
import { DEFAULT_OPTIONS, MAP_DARK_THEME, MAP_THEME } from 'utils/consts';
import { getBrowserLocation } from 'utils/geo';

import DoesntExistPhoto from '/public/doesntExist.png'

import Sun from 'assets/img/MapActions/ButtonSwitchTheme/sun.svg'
import Moon from 'assets/img/MapActions/ButtonSwitchTheme/moon.svg'
import FindMe from 'assets/img/MapActions/ButtonFindMe/findMe.svg'

import MapStyle from './styled';

const Map = () => {
    const dispatch = useAppDispatch()
    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult>()
    const [themeIcon, setThemeIcon] = useState(Sun)
    const isLoaded = useGoogleMaps()
    const travel = useTypeSelector(state => state.map.travelInfo.distance)
    const resultSearch = useTypeSelector(state => state.searchSlice.resultsSearch)
    const mapRef = useTypeSelector(state => state.map.mapRef)
    const zoom = useTypeSelector(state => state.map.options.zoom)
    const currentPosition = useTypeSelector(state => state.currentPosition.position)
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const handleSetMap = (object: google.maps.Map) => dispatch(setMap(object))
    const defaultTheme = useTypeSelector(state => state.map.options.theme)

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        handleSetMap(map)
        DEFAULT_OPTIONS.style = defaultTheme
        getBrowserLocation()
            .then((location) => {
                dispatch(setCenter(location))
                dispatch(setHumanPosition(location))
            })
            .catch((defaultLocation) => {
                dispatch(setCenter(location))
                dispatch(setHumanPosition(defaultLocation))
            });
    }, [])
    const handleSwitchMapTheme = () => {
        setThemeIcon(prev => prev != Sun ? Sun : Moon)
        const newTheme = defaultTheme === MAP_THEME ? MAP_DARK_THEME : MAP_THEME;
        const map = mapRef;
        if (map) {
            map.setOptions({ styles: newTheme });
            dispatch(setThemeMap(newTheme));
        }
    }
    const handleClickClose = () => {
        setSelectedPlace(undefined)
        dispatch(clearDirection())
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
    const useMapStyle = MapStyle();
    const containerStyle = {
        width: '100%',
        height: '100%',

    };


    return (
        <>
            <Box ref={mapContainerRef} className={useMapStyle.classes.containerMap}>
                <IconButton onClick={handleSwitchMapTheme} className={useMapStyle.classes.switchThemeButton} >
                    <img src={themeIcon} alt={DoesntExistPhoto} title='switch theme map' />
                </IconButton>
                <Box className={useMapStyle.classes.containerMapActions}>
                    <IconButton onClick={handleClickButtonFindMe} className={useMapStyle.classes.findMeButton} >
                        <img src={FindMe} alt={DoesntExistPhoto} title='button find me for map' />
                    </IconButton>
                    <Box className={useMapStyle.classes.containerMapActionsZoom}>
                        <Button className={useMapStyle.classes.buttonZoom} onClick={handleIncreaseZoom}>+</Button>
                        <hr />
                        <Button className={useMapStyle.classes.buttonZoom} onClick={handleDecreaseZoom}>-</Button>
                    </Box>
                </Box>
                {isLoaded ? (
                    <GoogleMap
                        onLoad={onLoad}
                        mapContainerStyle={containerStyle}
                        center={currentPosition}
                        zoom={zoom}
                        options={DEFAULT_OPTIONS}
                    >
                        {resultSearch && resultSearch.map((place, index) => (
                            <Marker
                                onClick={() => setSelectedPlace(place)}
                                key={`${place.place_id}-${index}`}
                                position={{
                                    lat: place?.geometry?.location?.lat() || 0,
                                    lng: place?.geometry?.location?.lng() || 0,
                                }}
                                icon={place.icon}
                                title={place.name}
                            />
                        ))}
                        {selectedPlace && (
                            <InfoWindow position={selectedPlace?.geometry?.location} onCloseClick={handleClickClose}>
                                <CardPlace place={selectedPlace} />
                            </InfoWindow>
                        )}
                        <CurrentLocationMarker position={currentPosition} />
                    </GoogleMap>
                ) : (
                    <Loader />
                )}
            </Box >
            {travel && <RouteInfo />
            }
        </>
    );
}

export default Map;


