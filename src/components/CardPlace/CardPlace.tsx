import { Card, CardActions, CardHeader, CardMedia, CardContent, Typography, } from '@mui/material'
import CardPlaceStyle from './CardPlaceStye'
import tempPhoto from '../../assets/img/tempPhoto.jpg'
import ButtonSave from '../../GUI/ButtonSave/ButtonSave'
import ButtonTravel from '../../GUI/ButtonTravel/ButtonTravel'
import search from '../../assets/img/Search.svg'


interface CardPlaceProps {
    place: google.maps.places.PlaceResult

}
export default function CardPlace({ place }: CardPlaceProps) {
    console.log(place)
    const useCardPlaceStyle = CardPlaceStyle()
    if (place != undefined) {
        return (
            <Card className={useCardPlaceStyle.classes.cardPlace}>
                <CardMedia>
                    <img className={useCardPlaceStyle.classes.placePhoto} src={tempPhoto} alt="" />
                </CardMedia>
                <CardContent className={useCardPlaceStyle.classes.cardContent}>
                    <Typography className={useCardPlaceStyle.classes.title}>{place.name}</Typography>
                    <Typography className={useCardPlaceStyle.classes.placeAdress}>{place.vicinity}</Typography>
                </CardContent>
                <CardActions className={useCardPlaceStyle.classes.cardActions}>
                    <ButtonSave handleFunction={() => console.log("asd")} url={search} />
                    <ButtonTravel handleFunction={() => console.log("asd")} url={search} />
                </CardActions>
            </Card>
        )
    } else {
        return <></>
    }

}