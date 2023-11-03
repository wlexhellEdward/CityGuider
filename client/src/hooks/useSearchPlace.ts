import { useEffect, useState } from "react"

import { Places } from "@/components/drawer/Places"

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
        setResults([])
        if (inputValue.length > 0) {
            if (!map) {
                return
            }
            selectedItems.forEach(async selectedItem => {
                const request = {
                    location: center,
                    radius: Number(inputValue) * 520,
                    keyword: selectedItem
                }
                const placesServices = new google.maps.places.PlacesService(map)
                await placesServices.nearbySearch(request, (results, status, pagination) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                        results.forEach(result => {
                            result.icon = Places.find(place => place.type === selectedItem)?.img
                        })
                        setResults(prevResults => [...prevResults, ...results]);
                        if (pagination?.hasNextPage) {
                            pagination.nextPage()
                        }
                    }
                })
            })
        }
    }, [inputValue, selectedItems])
    return results

}