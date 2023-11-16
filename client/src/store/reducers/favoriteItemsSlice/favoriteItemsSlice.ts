import { createSlice } from "@reduxjs/toolkit";

import { IFavoriteItem } from "../../../interfaces/IFavoriteItem";

interface FavoriteItemsState {
  favoriteItems: IFavoriteItem[];
  isLoading: boolean;
  error: string;
}

const initialState: FavoriteItemsState = {
  favoriteItems: [],
  isLoading: false,
  error: "",
};

const FavoriteItemSlice = createSlice({
  name: "seletedItemsSlice",
  initialState,
  reducers: {
    setFavoriteItems(state, action) {
      state.favoriteItems = action.payload;
    },
    addFavoriteItem(state, action) {
      const existingItemIndex = state.favoriteItems.findIndex(
        (item) => item.title === action.payload.title
      );
      if (existingItemIndex !== -1) {
        state.favoriteItems.splice(existingItemIndex, 1);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
    setFavoriteItemIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setFavoriteItems, setFavoriteItemIsLoading, addFavoriteItem } =
  FavoriteItemSlice.actions;

export default FavoriteItemSlice.reducer;
