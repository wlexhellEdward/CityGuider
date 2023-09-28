import { Button, Icon } from '@mui/material'
import ButtonTravelStyle from './ButtonTravelStyle'


interface ButtonTravelProps {
    handleFunction: () => void,
    url: string;
}

export default function ButtonTravel({ handleFunction, url }: ButtonTravelProps) {
    const useButtonTravelStyle = ButtonTravelStyle()
    return (
        <>
            <Button className={useButtonTravelStyle.classes.buttonTravel}>
                <Icon className={useButtonTravelStyle.classes.iconTravel}>
                    <img src={url} alt="" />
                </Icon>
                Маршрут
            </Button></>
    )
}

