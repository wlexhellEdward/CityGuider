import { Box, TextField } from "@mui/material"

import { useTypeSelector } from "@/hooks/redux"

import containerInputsLineStyle from "./styled"


export const ContainerInputsLine = () => {

    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useContainerInputsLine = containerInputsLineStyle({ Pallete: pallete })
    return (
        <Box className={useContainerInputsLine.classes.containerInputsLine}>
            <TextField
                required
                fullWidth
                data-testid='input'
                className={useContainerInputsLine.classes.inputRegister}
                id="email"
                label="Email адресс"
                name="email"
                autoComplete="email"
            />
            <TextField
                required
                fullWidth
                data-testid='input'
                className={useContainerInputsLine.classes.inputRegister}
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="new-password"
            />
        </Box>
    )
}