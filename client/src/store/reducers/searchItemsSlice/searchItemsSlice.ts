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
            state.selectedItems = state.selectedItems.filter(item => item != action.payload)
        },
        setResults(state, action) {
            state.resultsSearch = [...action.payload, ...(state.resultsSearch || [])];
        },
        clearResults(state) {
            state.resultsSearch = []
        }


    }
})

export const { addItem, deleteItem, setResults, clearResults } = selectedItemsSlice.actions

export default selectedItemsSlice.reducer