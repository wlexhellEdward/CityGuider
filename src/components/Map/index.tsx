import { Box } from "@mui/material";
import { InfoWindow } from '@react-google-maps/api';
import { GoogleMap, Marker } from "@react-google-maps/api";
import CardPlace from "components/CardPlace";
import { CurrentLocationMarker } from "components/CurrentLocationMarker";
import { Loader } from "components/Loader";
import { useAppDispatch,useTypeSelector } from 'hooks/redux';
import React, { useRef,useState } from 'react';
import { setCenter, setHumanPosition } from 'store/reducers';
import { setMap } from 'store/reducers/mapSlice/mapSlice';
import { DefaultOptions } from 'utils/consts';
import { getBrowserLocation } from 'utils/geo';

import MapStyle from './style';
import { MapProps } from "./interfaceProps";




const API_KEY = process.env.REACT_APP_API_KEY // ?

const Map = ({ isLoaded }: MapProps) => {
    const dispatch = useAppDispatch()
    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult>()


    const currentPosition = useTypeSelector(state => state.currentPosition.position)
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const handleSetMap = (object: google.maps.Map) => dispatch(setMap(object))


    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        handleSetMap(map)
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

    const resultSearch = useTypeSelector(state => state.searchSlice.resultsSearch)


    const useMapStyle = MapStyle();
    const containerStyle = {
        width: '100%',
        height: '100%',

    };



    return (
        <Box ref={mapContainerRef} className={useMapStyle.classes.containerMap}>
            {isLoaded ? (
                <GoogleMap
                    onLoad={onLoad}
                    mapContainerStyle={containerStyle}
                    center={currentPosition}
                    zoom={18}
                    options={DefaultOptions}
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
                        <InfoWindow position={selectedPlace?.geometry?.location} onCloseClick={() => setSelectedPlace(undefined)}>
                            <CardPlace place={selectedPlace} />
                        </InfoWindow>
                    )}
                    <CurrentLocationMarker position={currentPosition} />
                </GoogleMap>
            ) : (
                <Loader text={"Карта загружается"}/>
            )}
        </Box>
    );
}

export default Map;


