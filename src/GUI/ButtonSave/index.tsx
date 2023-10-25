import { Button, Icon, Typography } from '@mui/material'
import favoriteGrey from 'assets/img/CardFavoriteActions/greyFavorite.svg'
import favorite from 'assets/img/CardFavoriteActions/inFavorite.svg'
import { useTypeSelector } from 'hooks/redux'

import DoesntExistPhoto from '/public/doesntExist.png'

import { ButtonSaveProps } from './interfaces'
import ButtonSaveStyle from './styled'

export default function ButtonSave({ handleFunction, isFavorite }: ButtonSaveProps) {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useButtonSaveStyle = ButtonSaveStyle({Pallete:pallete})
    return (
        <>
            <Button onClick={() => handleFunction()} className={useButtonSaveStyle.classes.btnSaved}>
                <Icon className={useButtonSaveStyle.classes.icon}>
                    <img src={isFavorite ? favorite : favoriteGrey} alt={DoesntExistPhoto} title='save button photo' />
                </Icon>
                <Typography className={useButtonSaveStyle.classes.buttonSearchTitle}>{isFavorite ? "Удалить" : "Добавить"}</Typography>
            </Button>
        </>
    )
}
