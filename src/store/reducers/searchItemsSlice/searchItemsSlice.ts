import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface SearchItemState {
    selectedItems: string[],
    resultsSearch: google.maps.places.PlaceResult[] | null,
}
const initialState: SearchItemState = {
    selectedItems: [],
    resultsSearch: null
}

const selectedItemsSlice = createSlice({
    name: 'seletedItemsSlice',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<string>) {
            state.selectedItems.push(action.payload)
        },
        deleteItem(state, action: PayloadAction<string>) {
            state.selectedItems = state.selectedItems.filter((typeItem) => action.payload != typeItem)
        },
        setResults(state, action) {
            state.resultsSearch = [...action.payload, ...(state.resultsSearch || [])];
        },


    }
})

export const { addItem, deleteItem, setResults } = selectedItemsSlice.actions

export default selectedItemsSlice.reducer