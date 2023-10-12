import { Box } from "@mui/system"
import DoesntExistPhoto from '/public/doesntExist.jpg'
import ButtonSearchStyle from "./styled"
import searchIcon from 'assets/img/Search.svg'

interface ButtonSearchProps {
    handleSetSearchButtonIsClicked: () => void,
}

export const ButtonSearch = ({ handleSetSearchButtonIsClicked }: ButtonSearchProps) => {
    const useButtonSearchStyle = ButtonSearchStyle()
    return (
        <Box onClick={handleSetSearchButtonIsClicked} className={useButtonSearchStyle.classes.buttonSearch} >
            <img src={searchIcon} alt={DoesntExistPhoto} title='icon search' />
        </Box>
    )
}