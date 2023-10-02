import { configureStore } from '@reduxjs/toolkit'
import selectedItemsSlice from './reducers/selectedItemsSlice/selectedItemsSlice'
import currentStatusSlice from './reducers/currentStatus/currentStatusSlice';
import centerSlice from './reducers/centerSlice/centerSlice';


export const store = configureStore({
    reducer: {
        currentStatus: currentStatusSlice,
        currentPosition: centerSlice,
        selectedItems: selectedItemsSlice

    }
});

export type AppStore = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
