import React from "react";
import { toast } from "react-toastify";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import arrowMore from "@/assets/img/cardFavoriteActions/arrowMore.svg";
import FavoriteImg from "@/assets/img/cardFavoriteActions/inFavorite.svg";
import { ERRORS, SUCCESES } from "@/constants/consts";
import { Places } from "@/constants/places";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { useAuth } from "@/hooks/useAuth.ts";
import { addFavoriteItem } from "@/store/reducers/index.ts";
import { refactorString } from "@/utils/refactors/textRefactors.ts";

import { titles } from "../config.ts";
import CardFavoriteStyle from "../styled.ts";
import { CardFavoritePropsNormalSize } from "./interfaces.ts";
import DoesntExistPhoto from "/public/doesntExist.png";
import { deleteFavoriteCard } from "@/utils/firebaseServices/favorites/favoriteService.ts";

const CardFavoriteNormalSize: React.FC<CardFavoritePropsNormalSize> = ({
  favoriteItem,
  handleSetIsOpen,
}) => {
  const dispatch = useAppDispatch();
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const { id } = useAuth();

  const handleDeleteFavorite = () => {
    if (id != null) {
      deleteFavoriteCard(favoriteItem.id, id)
        .then(() => {
          toast(SUCCESES.DELETE_PLACE, { type: "success" });
        })
        .catch(() => {
          toast(ERRORS.CANT_DELETE_PLACE, { type: "error" });
        });
    }
    dispatch(addFavoriteItem(favoriteItem));
  };

  const useCardFavoriteStyle = CardFavoriteStyle({
    isOpen: false,
    url: favoriteItem.img,
    Pallete: pallete,
  });

  return (
    <>
      <Card
        data-testid="card-normal-size"
        className={useCardFavoriteStyle.classes.cardFavorite}
      >
        <Box className={useCardFavoriteStyle.classes.containerImgTitle}>
          <CardContent className={useCardFavoriteStyle.classes.cardContent}>
            <Box className={useCardFavoriteStyle.classes.imgCard}>
              {favoriteItem.type.map((item) => {
                const matchingPlace = Places.find(
                  (place) => place.type === item
                );
                if (matchingPlace) {
                  const [title, img] = [matchingPlace.title, matchingPlace.img];
                  return (
                    <img
                      alt={DoesntExistPhoto}
                      title={titles.media}
                      key={title}
                      className={useCardFavoriteStyle.classes.iconStatis}
                      src={img}
                    />
                  );
                }
              })}
            </Box>
            <Box className={useCardFavoriteStyle.classes.containerTitle}>
              <Typography
                whiteSpace={"normal"}
                className={useCardFavoriteStyle.classes.title}
              >
                {refactorString(favoriteItem.title)}
              </Typography>
            </Box>
          </CardContent>
        </Box>

        <Container
          className={useCardFavoriteStyle.classes.descriptionContainer}
          disableGutters
        >
          <Typography
            whiteSpace={"normal"}
            className={useCardFavoriteStyle.classes.description}
          >
            {favoriteItem.description.substring(0, 150) + "..."}
          </Typography>
        </Container>
        <CardActions
          disableSpacing
          className={useCardFavoriteStyle.classes.containerDownIcons}
        >
          <img
            data-testid="delete-from-favorite"
            title={titles.btnDelete}
            src={FavoriteImg}
            onClick={handleDeleteFavorite}
            className={useCardFavoriteStyle.classes.icon}
          />
          <img
            data-testid="card-favorite-button-show-more"
            title={titles.toggleCardSize}
            onClick={handleSetIsOpen}
            className={useCardFavoriteStyle.classes.imgArrow}
            src={arrowMore}
            alt={DoesntExistPhoto}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default CardFavoriteNormalSize;
