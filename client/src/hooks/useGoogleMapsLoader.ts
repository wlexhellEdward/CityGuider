import { useEffect } from 'react';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';

import { setIsLoaded } from '@/store/reducers';

import { useAppDispatch } from './redux';

export function useGoogleMaps() {
    const dispatch = useAppDispatch()

    const libraries: Libraries = ['places']
    
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
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