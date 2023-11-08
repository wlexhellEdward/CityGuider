import { LoadingButton } from '@mui/lab'
import { Icon, Typography } from '@mui/material'

import favoriteGrey from '@/assets/img/CardFavoriteActions/greyFavorite.svg'
import favorite from '@/assets/img/CardFavoriteActions/inFavorite.svg'
import { useTypeSelector } from '@/hooks/redux'

import { ButtonSaveProps } from './interfaces'
import ButtonSaveStyle from './styled'
import DoesntExistPhoto from '/public/doesntExist.png'

export const ButtonSave = ({ handleClick, isLoading, isFavorite }: ButtonSaveProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useButtonSaveStyle = ButtonSaveStyle({ Pallete: pallete })
    return (
        <>
            <LoadingButton loading={isLoading} onClick={handleClick} className={useButtonSaveStyle.classes.btnSaved}>
                {!isLoading ?
                    <>
                        <Icon className={useButtonSaveStyle.classes.icon}>
                            <img src={isFavorite ? favorite : favoriteGrey} alt={DoesntExistPhoto} title='save button photo' />
                        </Icon>
                        <Typography className={useButtonSaveStyle.classes.buttonSearchTitle}>{isFavorite ? "Удалить" : "Добавить"} </Typography></>
                    :
                    null
                }
            </LoadingButton>
        </>
    )
}
