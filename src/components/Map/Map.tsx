import React,{ useState, useCallback, SetStateAction, useRef } from 'react';
import Box from "@mui/material/Box";
import { useTypeSelector, useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { setCenter } from '../../store/reducers';
import { getBrowserLocation } from '../../utils/geo';
import { GoogleMap, Marker } from "@react-google-maps/api";
import MapStyle from './MapStyle';
import { CurrentLocationMarker } from '../CurrentLocationMarker/CurrentLocationMarker';
import { DefaultOptions } from '../../utils/consts';


interface MapProps {
    isLoaded: boolean;
}

const API_KEY = process.env.REACT_APP_API_KEY // ?

const Map = ({ isLoaded }: MapProps) => {
    const dispatch = useAppDispatch()

    const currentPosition = useTypeSelector(state => state.currentPosition.position)
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const selectedItems = useTypeSelector((state) => state.selectedItems.selectedItems)
    const mapRef = useRef<google.maps.Map | undefined>(undefined)

    // const handlerSetCenter = (center: object) => dispatch(setCenter(center))


    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        getBrowserLocation()
            .then((location) => {
                dispatch(setCenter(location))
            })
            .catch((defaultLocation) => {
                dispatch(setCenter(defaultLocation))
            });
        // dispatch(setMap(map))
    }, [])



    // useEffect(() => {
    //     if (isLoaded && mapContainerRef.current) {
    //         const map = new google.maps.Map(mapContainerRef.current, {});

    //         const service = new google.maps.places.PlacesService(map);

    //         const request: google.maps.places.PlaceSearchRequest = {
    //             location: currentPosition,
    //             radius: 500,
    //             type: selectedItems.toString(),
    //         };

    //         service.nearbySearch(request, (results, status) => {
    //             if (status === google.maps.places.PlacesServiceStatus.OK) {
    //                 if (results != null) {
    //                     results.forEach((place) => {
    //                         console.log(place.name);
    //                     });
    //                 }
    //             }
    //         });
    //     }
    // }, [searchButtonIsClicked]);

    const useMapStyle = MapStyle();
    const containerStyle = {
        width: '100%',
        height: '100%'
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
                    <CurrentLocationMarker position={currentPosition} />
                </GoogleMap>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
}

export default Map;
