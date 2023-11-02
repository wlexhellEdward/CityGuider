import { Button, Icon, Typography } from '@mui/material'

import travel from '@/assets/img/CardFavoriteActions/travel.svg'
import { useTypeSelector } from '@/hooks/redux'

import { ButtonTravelProps } from './interfaces'
import ButtonTravelStyle from './styled'
import DoesntExistPhoto from '/public/doesntExist.png'

export const ButtonTravel = ({ handleClick }: ButtonTravelProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    const useButtonTravelStyle = ButtonTravelStyle({ Pallete: pallete })
    return (
        <Button data-testid='make-route' onClick={handleClick} className={useButtonTravelStyle.classes.buttonTravel}>
            <Icon className={useButtonTravelStyle.classes.iconTravel}>
                <img src={travel} alt={DoesntExistPhoto} title="travel button photo" />
            </Icon>
            <Typography className={useButtonTravelStyle.classes.buttonTravelTitle}>Маршрут</Typography>
        </Button>
    )
}

