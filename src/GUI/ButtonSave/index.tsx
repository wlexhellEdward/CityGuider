import { Button, Icon, Typography } from '@mui/material'
import ButtonSaveStyle from './styled'
import favorite from '../../assets/img/inFavorite.svg'
import favoriteGrey from '../../assets/img/greyFavorite.svg'

interface ButtonSaveProps {
    handleFunction: () => void,
    isFavorite: boolean,
}

export default function ButtonSave({ handleFunction, isFavorite }: ButtonSaveProps) {
    const useButtonSaveStyle = ButtonSaveStyle()
    return (
        <>
            <Button onClick={() => handleFunction()} className={useButtonSaveStyle.classes.btnSaved}>
                <Icon className={useButtonSaveStyle.classes.icon}>
                    <img src={isFavorite ? favorite : favoriteGrey} alt="" />
                </Icon>
                <Typography>{isFavorite ? "Удалить" : "Добавить"}</Typography>
            </Button>
        </>
    )
}
