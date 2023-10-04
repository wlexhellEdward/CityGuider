import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './reducers/searchItemsSlice/searchItemsSlice'
import currentStatusSlice from './reducers/currentStatus/currentStatusSlice';
import centerSlice from './reducers/centerSlice/centerSlice';
import searchButtonSlice from './reducers/searchButtonSlice/searchButtonSlice';
import favoriteItemsSlice from './reducers/favoriteItemsSlice/favoriteItemsSlice';
import mapSlice from './reducers/mapSlice/mapSlice';


export const store = configureStore({
    reducer: {
        currentStatus: currentStatusSlice,
        currentPosition: centerSlice,
        searchSlice: searchSlice,
        isClickedSearchButton: searchButtonSlice,
        favoriteItems: favoriteItemsSlice,
        map: mapSlice
    }
});

export type AppStore = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
