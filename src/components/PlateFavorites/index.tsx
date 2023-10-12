import { Box } from "@mui/system"
import PlateFavoritesStyle from "./styled"
import { Typography } from "@mui/material"
import { Waiter } from "components/Waiter"
import CardFavorite from "components/CardFavorite"
import { useTypeSelector } from "hooks/redux"


export const PlateFavorites = () => {
    const usePlateFavoriteStyle = PlateFavoritesStyle()
    const favoriteItems = useTypeSelector((state) => state.favoriteItems.favoriteItems)

    return (
        <>
            <Box className={usePlateFavoriteStyle.classes.cardsFavorites}>
                <Typography className={usePlateFavoriteStyle.classes.titleFavorite}>Избранное:</Typography>
                <Box className={usePlateFavoriteStyle.classes.containerCardsFavorites}>
                    {favoriteItems.length > 0 ?
                        favoriteItems.map((item) => {
                            return (
                                <>
                                    <CardFavorite favoriteItem={item} />
                                </>)
                        })
                        :
                        <>
                            <Waiter text={" Попробуйте что-нибудь добавить"} />
                        </>
                    }
                </Box>
            </Box>
        </>
    )
}