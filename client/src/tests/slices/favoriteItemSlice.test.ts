import favoriteItemsReducer, {
    addFavoriteItem,
    setFavoriteItemIsLoading,
    setFavoriteItems} from "@/store/reducers/favoriteItemsSlice/favoriteItemsSlice";
import { LatLng } from "@googlemaps/jest-mocks";

describe('Тестирование FavoriteItemsSlice', () => {
    it('Смена значения "favoriteItems[]" при вызове "setFavoriteItems" action с пустыми данными ', () => {
        const mockState = {
            favoriteItems: [{
                id: "",
                type: [""],
                img: "",
                coordinates: new LatLng(1, 1),
                title: "", description: ""
            }],
            isLoading: false,
            error: ""
        }
        const mockResult = {
            favoriteItems: [{
                id: "",
                type: [""],
                img: "",
                coordinates: new LatLng(1, 1),
                title: "", description: ""
            }]
        }
        const action = { type: setFavoriteItems.type, payload: mockResult };
        const result = favoriteItemsReducer(mockState, action);
        expect(result.favoriteItems).toEqual(mockResult);
        expect(result.error).toEqual("");
        expect(result.isLoading).toEqual(false);
    });
    it('Смена значения "favoriteItems[]" при вызове "setFavoriteItems" action с заполненными данными ', () => {
        const mockState = {
            favoriteItems: [{
                id: "",
                type: [""],
                img: "",
                coordinates: new LatLng(1, 1),
                title: "", description: ""
            }],
            isLoading: false,
            error: ""
        }
        const mockResult = {
            favoriteItems: [{
                id: "test",
                type: ["test"],
                img: "test",
                coordinates: new LatLng(10, 10),
                title: "test",
                description: "test"
            }],
        }
        const action = { type: setFavoriteItems.type, payload: mockResult }
        const result = favoriteItemsReducer(mockState, action)
        expect(result.favoriteItems).toEqual(mockResult)
        expect(result.error).toBe("")
        expect(result.isLoading).toBe(false)
    });
    it('Смена значения "favoriteItems[]" при вызове "addFavoriteItem" action с новыми данными ', () => {
        const mockState = {
            favoriteItems: [{
                id: "",
                type: [""],
                img: "",
                coordinates: new LatLng(1, 1),
                title: "", description: ""
            }],
            isLoading: false,
            error: ""
        }
        const mockResult = {
            coordinates:new LatLng(1,2),
            description: "test",
            id: "test",
            img: "test",
            title: "test",
            type: ["test"]
        }
        const action = { type: addFavoriteItem.type, payload: mockResult }
        const result = favoriteItemsReducer(mockState, action)
        expect(result.favoriteItems.includes(mockResult)).toBe(true)
        expect(result.error).toBe("")
        expect(result.isLoading).toBe(false)
    });
    it('Смена значения "favoriteItems[]" при вызове "addFavoriteItem" action с повторными данными ', () => {
        const mockState = {
            favoriteItems: [{
                id: "test",
                type: ["test"],
                img: "test",
                coordinates: new LatLng(1, 2),
                title: "test", description: "test"
            }],
            isLoading: false,
            error: "test"
        }
        const mockResult = {
            coordinates:new LatLng(1,2),
            description: "test",
            id: "test",
            img: "test",
            title: "test",
            type: ["test"]
        }
        const action = { type: addFavoriteItem.type, payload: mockResult }
        const result = favoriteItemsReducer(mockState, action)
        expect(result.favoriteItems.length).toEqual(0)
        expect(result.error).toBe("test")
        expect(result.isLoading).toBe(false)
    });
    it('Смена значения "isLoading" при вызове "setIsLoading" action с заполненными данными ', () => {
        const mockState = {
            favoriteItems: [{
                id: "test",
                type: ["test"],
                img: "test",
                coordinates: new LatLng(1, 2),
                title: "test", description: "test"
            }],
            isLoading: false,
            error: "test"
        }
        const mockResult = true
        const action = { type: setFavoriteItemIsLoading.type, payload: mockResult }
        const result = favoriteItemsReducer(mockState, action)
        expect(result.favoriteItems).toEqual(mockState.favoriteItems)
        expect(result.error).toBe("test")
        expect(result.isLoading).toBe(true)
    });
})