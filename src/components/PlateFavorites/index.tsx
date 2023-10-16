import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import CardFavorite from "components/CardFavorite/ToggleCardFavorite"
import { Waiter } from "components/Waiter"
import { useTypeSelector } from "hooks/redux"

import PlateFavoritesStyle from "./styled"

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