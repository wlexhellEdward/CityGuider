import { useState } from 'react';
import Box from "@mui/material/Box";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import MapStyle from './MapStyle';
import ThemeMap from './ThemeMap';

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    styles: ThemeMap()
}


const Map = () => {
    const useMapStyle = MapStyle();
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCpvlHwgo1v5fqOAJEVGLO9VJEQQklycYA"
    });

    const [map, setMap] = useState(null);

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: -34.397,
        lng: 150.644
    };

    return (
        <Box className={useMapStyle.classes.containerMap}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={defaultOptions}
                >
                    {map && <Marker position={center} />}
                </GoogleMap>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
}

export default Map;
