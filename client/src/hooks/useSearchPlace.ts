import { useEffect, useState } from "react"

import { Places } from "@/components/Drawer/Places"

import { useTypeSelector } from "./redux"


interface Params {
    map: google.maps.Map | null,
    center: {
        lat: number;
        lng: number
    },
    inputValue: string
}

export const useSearchPlace = ({ map, center, inputValue }: Params) => {
    const [results, setResults] = useState<google.maps.places.PlaceResult[]>([])
    const selectedItems = useTypeSelector(state => state.searchSlice.selectedItems)
    useEffect(() => {
        setResults([]);
        if (inputValue.length > 0) {
            if (!map) {
                return;
            }
            const promises: Promise<google.maps.places.PlaceResult[]>[] = [];
            selectedItems.forEach(selectedItem => {
                const request = {
                    location: center,
                    radius: Number(inputValue) * 520,
                    keyword: selectedItem,
                };
                const placesServices = new google.maps.places.PlacesService(map);
                promises.push(
                    new Promise((resolve) => {
                        placesServices.nearbySearch(request, (results, status) => {
                            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                                results.forEach((result) => {
                                    result.icon = Places.find(
                                        (place) => place.type === selectedItem
                                    )?.img;
                                });
                                resolve(results);
                            } else {
                                resolve([]);
                            }
                        });
                    })
                );
            });
            Promise.all(promises).then((results) => {
                const flattenedResults = results.reduce((acc, curr) => [...acc, ...curr], []);
                setResults(flattenedResults);
            });
        }
    }, [inputValue, selectedItems]);
    return results
}