import { useState, useCallback, SetStateAction, useRef } from 'react';
import Box from "@mui/material/Box";
import { GoogleMap,  } from "@react-google-maps/api";
import MapStyle from './MapStyle';
import { DefaultOptions } from '../../utils/consts';


interface MapProps {
    center: {
        lat: number,
        lng: number
    }
    isLoaded:boolean
}

const API_KEY = process.env.REACT_APP_API_KEY // ?

const Map = ({ center,isLoaded }: MapProps) => {
    const useMapStyle = MapStyle();
    

    const mapRef = useRef<google.maps.Map | undefined>(undefined)
    

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        mapRef.current = map
    }, [])

    const onUnmount = useCallback(function callback() {
        mapRef.current = undefined
    }, [])



    const containerStyle = {
        width: '100%',
        height: '100%'
    };



    return (
        <Box className={useMapStyle.classes.containerMap}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                    options={DefaultOptions}
                >
                </GoogleMap>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
}

export default Map;
