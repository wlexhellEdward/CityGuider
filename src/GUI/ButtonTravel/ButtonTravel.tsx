import { Button, Icon, Typography } from '@mui/material'
import ButtonTravelStyle from './ButtonTravelStyle'
import travel from '../../assets/img/travel.svg'



interface ButtonTravelProps {
    handleFunction: () => void,
}

export default function ButtonTravel({ handleFunction }: ButtonTravelProps) {
    const useButtonTravelStyle = ButtonTravelStyle()
    return (
        <>
            <Button onClick={() => handleFunction()} className={useButtonTravelStyle.classes.buttonTravel}>
                <Icon className={useButtonTravelStyle.classes.iconTravel}>
                    <img src={travel} alt="" />
                </Icon>
                <Typography>Маршрут</Typography>
            </Button></>
    )
}

