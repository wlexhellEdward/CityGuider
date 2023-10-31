import { Button, Icon, Typography } from '@mui/material'
import travel from 'assets/img/CardFavoriteActions/travel.svg'
import { useTypeSelector } from 'hooks/redux'

import DoesntExistPhoto from '/public/doesntExist.png'

import { ButtonTravelProps } from './interfaces'
import ButtonTravelStyle from './styled'

export default function ButtonTravel({ handleFunction }: ButtonTravelProps) {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    const useButtonTravelStyle = ButtonTravelStyle({Pallete:pallete})
    return (
        <>
            <Button data-testid='make-route' onClick={handleFunction} className={useButtonTravelStyle.classes.buttonTravel}>
                <Icon className={useButtonTravelStyle.classes.iconTravel}>
                    <img src={travel} alt={DoesntExistPhoto} title="travel button photo" />
                </Icon>
                <Typography className={useButtonTravelStyle.classes.buttonTravelTitle}>Маршрут</Typography>
            </Button></>
    )
}

