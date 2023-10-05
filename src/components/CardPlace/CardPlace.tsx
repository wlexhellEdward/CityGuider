import { Card, CardActions, CardHeader, CardMedia, CardContent, Typography, } from '@mui/material'
import CardPlaceStyle from './CardPlaceStye'
import ButtonSave from '../../GUI/ButtonSave/ButtonSave'
import ButtonTravel from '../../GUI/ButtonTravel/ButtonTravel'
import tempPhoto from '../../../public/tempPhoto.jpg'
import { useAppDispatch, useTypeSelector } from '../../hooks/redux'
import { addFavoriteItem } from '../../store/reducers'
import { IFavoriteItem } from '../../models/IFavoriteItem'
import { convertPlaceToFavorite } from '../../utils/convert'


interface CardPlaceProps {
    place: google.maps.places.PlaceResult

}
const checkValidPhoto = (place: google.maps.places.PlaceResult) => {
    return place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : tempPhoto
}


export default function CardPlace({ place }: CardPlaceProps) {
    const dispatch = useAppDispatch()
    const favoriteItems = useTypeSelector(state => state.favoriteItems.favoriteItems)
    const handleAddToFavorite = (favoirteItem: IFavoriteItem) => dispatch(addFavoriteItem(favoirteItem))

    const isFavorite = favoriteItems.some(item => item.title == place.name)
    const useCardPlaceStyle = CardPlaceStyle()

    
    if (place != undefined) {
        return (
            <Card className={useCardPlaceStyle.classes.cardPlace}>
                <CardMedia>
                    <img className={useCardPlaceStyle.classes.placePhoto} src={checkValidPhoto(place)} alt="" />
                </CardMedia>
                <CardContent className={useCardPlaceStyle.classes.cardContent}>
                    <Typography className={useCardPlaceStyle.classes.title}>{place.name}</Typography>
                    <Typography className={useCardPlaceStyle.classes.placeAdress}>{place.vicinity}</Typography>
                </CardContent>
                <CardActions className={useCardPlaceStyle.classes.cardActions}>
                    <ButtonSave handleFunction={() => handleAddToFavorite(convertPlaceToFavorite(place))} isFavorite={isFavorite} />
                    <ButtonTravel handleFunction={() => console.log("u traveling")} />
                </CardActions>
            </Card>
        )
    } else {
        return <></>
    }

}