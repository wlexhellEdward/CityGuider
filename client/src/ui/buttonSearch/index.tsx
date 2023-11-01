import { Box } from "@mui/system"
import searchIcon from 'assets/img/DrawerActions/ButtonSearch/Search.svg'
import { useTypeSelector } from "hooks/redux"

import DoesntExistPhoto from '/public/doesntExist.png'

import { ButtonSearchProps } from "./intefraces"
import ButtonSearchStyle from "./styled"

export const ButtonSearch = ({ handleSetSearchButtonIsClicked }: ButtonSearchProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    
    const useButtonSearchStyle = ButtonSearchStyle({Pallete:pallete})
    return (
        <Box data-testid='button-search' onClick={handleSetSearchButtonIsClicked} className={useButtonSearchStyle.classes.buttonSearch} >
            <img src={searchIcon} alt={DoesntExistPhoto} title='icon search' />
        </Box>
    )
}