import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
    isLoading: boolean;
    isOpen: boolean;
    formValues: FormValues;
    formValidity: {
        email: boolean;
        password: boolean;
        strength: number;
        colorsOfProgres: string;
        error: string;
        confirm: boolean;
    };
}

interface FormValues {
    email: string;
    password: string;
    confirm: string;
}

const initialState: RegisterState = {
    isLoading: false,
    isOpen: false,
    formValues: { email: "", password: "", confirm: "" },
    formValidity: {
        email: true,
        password: true,
        strength: 0,
        colorsOfProgres: "red",
        error: "",
        confirm: true,
    },
};

const registerSlice = createSlice({
    name: "registerSlice",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
        setFormValues(state, action: PayloadAction<FormValues>) {
            state.formValues = action.payload;
        },
        setFormValidity(state, action) {
            state.formValidity = action.payload;
        },
        resetAll(state) {
            state.isLoading = false
            state.formValidity = {
                email: true,
                password: true,
                strength: 0,
                colorsOfProgres: "red",
                error: "",
                confirm: true,
            }
            state.formValues = { email: "", password: "", confirm: "" }
            state.isOpen = false
        }
    },
});

export const {
    setIsLoading, setOpen, setFormValues, resetAll, setFormValidity, } = registerSlice.actions;

export default registerSlice.reducer;
