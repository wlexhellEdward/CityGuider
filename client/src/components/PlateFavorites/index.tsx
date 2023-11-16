import { useEffect } from "react"
import { toast } from "react-toastify"

import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"

import CardFavorite from "@/components/CardFavorite/ToggleCardFavorite"
import { Waiter } from "@/components/Waiter"
import { SUCCESES } from "@/constants/consts"
import { useAppDispatch, useTypeSelector } from "@/hooks/redux"
import { useAuth } from "@/hooks/useAuth"
import { setFavoriteItemIsLoading, setFavoriteItems } from "@/store/reducers"

import PlateFavoritesStyle from "./styled"
import { getFavoriteCardsUser } from "@/utils/firebaseServices/favorites/favoriteService"

export const PlateFavorites = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const favoriteItems = useTypeSelector(state => state.favoriteItems.favoriteItems)
    const dispatch = useAppDispatch()
    const favoriteIsLoading = useTypeSelector(state => state.favoriteItems.isLoading)
    const { id } = useAuth()
    useEffect(() => {
        if (id != null) {
            dispatch(setFavoriteItemIsLoading(true))
            getFavoriteCardsUser(id).then((response) => {
                dispatch(setFavoriteItemIsLoading(false))
                dispatch(setFavoriteItems(response))
                toast(SUCCESES.LOAD_FAVORITES, { type: 'success' })
            })
        }
    }, [])
    const usePlateFavoriteStyle = PlateFavoritesStyle({ Pallete: pallete })
    return (
        <Box data-testid='plate-favorite' className={usePlateFavoriteStyle.classes.cardsFavorites}>
            <Typography className={usePlateFavoriteStyle.classes.titleFavorite}>Избранное:</Typography>
            <Box className={usePlateFavoriteStyle.classes.containerCardsFavorites}>
                {favoriteIsLoading ?
                    <CircularProgress />
                    :
                    <>
                        {favoriteItems?.length > 0 ?
                            favoriteItems.map((item) => {
                                return (
                                    <>
                                        <CardFavorite key={item.id} favoriteItem={item} />
                                    </>)
                            })
                            :
                            <>
                                <Waiter text={" Попробуйте что-нибудь добавить"} />
                            </>
                        }
                    </>
                }

            </Box>
        </Box>
    )
}