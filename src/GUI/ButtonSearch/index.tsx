import { Box } from "@mui/system"
import searchIcon from 'assets/img/Search.svg'

import DoesntExistPhoto from '/public/doesntExist.png'

import { ButtonSearchProps } from "./intefraces"
import ButtonSearchStyle from "./styled"

export const ButtonSearch = ({ handleSetSearchButtonIsClicked }: ButtonSearchProps) => {
    const useButtonSearchStyle = ButtonSearchStyle()
    return (
        <Box onClick={handleSetSearchButtonIsClicked} className={useButtonSearchStyle.classes.buttonSearch} >
            <img src={searchIcon} alt={DoesntExistPhoto} title='icon search' />
        </Box>
    )
}