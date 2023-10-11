import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { useEffect } from 'react';

import { useAppDispatch } from './redux';
import { setIsLoaded } from 'store/reducers';

export function useGoogleMaps() {
    const dispatch = useAppDispatch()

    const libraries: Libraries = ['places']
    
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
    console.log(apiKey)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries: libraries,
    });

    useEffect(() => {
        dispatch(setIsLoaded(isLoaded))
    }, [isLoaded]);

    return isLoaded;
}