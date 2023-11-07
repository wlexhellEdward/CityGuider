import { useEffect } from "react"

import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import CardFavorite from "@/components/cardFavorite/toggleCardFavorite"


import { Waiter } from "@/components/waiter"
import { useAppDispatch, useTypeSelector } from "@/hooks/redux"
import { useAuth } from "@/hooks/useAuth"
import { setFavoriteItemIsLoading, setFavoriteItems } from "@/store/reducers"
import { getFavoriteCardsUser } from '@/utils/firebaseService'

import PlateFavoritesStyle from "./styled"

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