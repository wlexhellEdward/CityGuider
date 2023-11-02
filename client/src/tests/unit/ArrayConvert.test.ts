import { convertPlaceToFavorite } from "@/utils/convert";
import { LatLng } from "@googlemaps/jest-mocks"
interface PlaceResult {
    geometry: {
        location: google.maps.LatLng;
    };
    place_id: string;
    types: string[];
}


describe('Проверка метода ArrayConvert', () => {
    test('Проверка на наличие ответа', () => {
        const placeResult: PlaceResult = {
            geometry: {
                location: new LatLng(1, 3),
            },
            place_id: "1",
            types: ["mockType"],
        };
        expect(convertPlaceToFavorite(placeResult)).not.toBe(null)
    })
});
