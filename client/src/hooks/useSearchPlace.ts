import { useEffect, useState } from "react";

import { Places } from "@/consts/places";

import { useTypeSelector } from "./redux";
import { ISearchPlaceParams } from "@/interfaces/ISearchPlaceParams";

export const useSearchPlace = ({ map, center, inputValue }: ISearchPlaceParams) => {
    const [results, setResults] = useState<google.maps.places.PlaceResult[]>([]);
    const selectedItems = useTypeSelector((state) => state.searchSlice.selectedItems);

    useEffect(() => {
        setResults([]);
        if (inputValue.length > 0) {
            if (!map) {
                return;
            }
            const promises: Promise<google.maps.places.PlaceResult[]>[] = [];
            selectedItems.forEach((selectedItem) => {
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
                                    result.icon = Places.find((place) => place.type === selectedItem)?.img;
                                });
                                resolve(results);
                            } else {
                                resolve([]);
                            }
                        });
                    })
                );
            });

            Promise.allSettled(promises).then((results) => {
                const fulfilledResults = results
                    .filter((result) => result.status === "fulfilled")
                    .map((result) => (result as PromiseFulfilledResult<google.maps.places.PlaceResult[]>).value)
                    .flat();
                setResults(fulfilledResults);
            });
        }
    }, [inputValue, selectedItems]);
    return results;
};
