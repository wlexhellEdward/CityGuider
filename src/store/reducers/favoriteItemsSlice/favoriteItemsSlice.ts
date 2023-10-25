import { createSlice } from "@reduxjs/toolkit";

import { IFavoriteItem } from "../../../models/IFavoriteItem";


interface FavoriteItemsState {
    favoriteItems: IFavoriteItem[];
    isLoaded: boolean,
    error: string
}

const initialState: FavoriteItemsState = {
    favoriteItems: [],
    isLoaded: false,
    error: ''
}

const FavoriteItemSlice = createSlice({
    name: 'seletedItemsSlice',
    initialState,
    reducers: {
        setFavoriteItems(state, action) {
            state.favoriteItems = action.payload
            state.isLoaded = true
        },
        addFavoriteItem(state, action) {
            const existingItemIndex = state.favoriteItems.findIndex(item => item.title === action.payload.title);
            if (existingItemIndex !== -1) {
                state.favoriteItems.splice(existingItemIndex, 1);
            } else {
                state.favoriteItems.push(action.payload);
            }
        },
    }
})

export const { setFavoriteItems, addFavoriteItem } = FavoriteItemSlice.actions

export default FavoriteItemSlice.reducer

