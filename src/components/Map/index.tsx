import { Box, } from "@mui/material";
import { InfoWindow } from '@react-google-maps/api';
import { Circle, GoogleMap, Marker } from "@react-google-maps/api";
import CardPlace from "components/cardPlace";
import { CurrentLocationMarker } from "components/currentLocationMarker";
import { Loader } from "components/loader";
import { MapAction } from 'components/mapAction';
import { RouteInfo } from "components/routeInfo";
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { useGoogleMaps } from "hooks/useGoogleMapsLoader";
import { useCallback, useRef, useState } from 'react';
import { setCenter, setHumanPosition } from 'store/reducers';
import { clearDirection, setMap, setRadius } from 'store/reducers/mapSlice/mapSlice';
import { CIRCLE_OPTIONS, DEFAULT_OPTIONS } from 'utils/consts';
import { getBrowserLocation } from 'utils/geo';

import MapStyle from './styled';

const Map = () => {
    const dispatch = useAppDispatch()
    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult>()
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const isLoaded = useGoogleMaps()
    const radius = useTypeSelector(state => state.map.radius)
    const travel = useTypeSelector(state => state.map.travelInfo.distance)
    const resultSearch = useTypeSelector(state => state.searchSlice.resultsSearch)
    const zoom = useTypeSelector(state => state.map.options.zoom)
    const currentPosition = useTypeSelector(state => state.currentPosition.position)
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const handleSetMap = (object: google.maps.Map) => dispatch(setMap(object))

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        handleSetMap(map)
        dispatch(setRadius(1000))
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


    const handleClickClose = () => {
        setSelectedPlace(undefined)
        dispatch(clearDirection())
    }
    const useMapStyle = MapStyle({ Pallete: pallete });
    const containerStyle = {
        width: '100%',
        height: '100%',

    };

    return (
        <>
            <Box ref={mapContainerRef} className={useMapStyle.classes.containerMap}>
                <MapAction />
                {isLoaded ? (
                    <>

                        <GoogleMap
                            onLoad={onLoad}
                            mapContainerStyle={containerStyle}
                            center={currentPosition}
                            zoom={zoom}
                            options={DEFAULT_OPTIONS}
                        >
                            <Circle
                                radius={radius}
                                center={currentPosition}
                                options={CIRCLE_OPTIONS}
                            />
                            {resultSearch && resultSearch.map((place, index) => (
                                <Marker
                                    onClick={() => { setSelectedPlace(place) }}
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
                            <CurrentLocationMarker />
                        </GoogleMap>
                    </>
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


