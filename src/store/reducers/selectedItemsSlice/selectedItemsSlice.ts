import { createSlice } from "@reduxjs/toolkit";

const selectedItemsSlice = createSlice({
    name: 'seletedItemsSlice',
    initialState: {
        selectedItems: [""]
    },
    reducers: {
        addItem(state, action) {
            state.selectedItems.push(action.payload)
        },
        deleteItem(state, action) {
            state.selectedItems.filter((typeItem) => action.payload != typeItem)
        }
    }
})

export const { addItem, deleteItem } = selectedItemsSlice.actions

export default selectedItemsSlice.reducer