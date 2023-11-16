import { useState } from "react";

import CardFavoriteMaxSize from "../CardFavoriteMaxSize";
import CardFavoriteNormalSize from "../CardFavoriteNormalSize";
import { CardFavoriteProps } from "./interfaces";

const CardFavorite = ({ favoriteItem }: CardFavoriteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleSetIsOpen() {
    setIsOpen((prev) => !prev);
  }
  if (isOpen) {
    return (
      <CardFavoriteMaxSize
        favoriteItem={favoriteItem}
        handleSetIsOpen={handleSetIsOpen}
        isOpen={isOpen}
      />
    );
  } else {
    return (
      <CardFavoriteNormalSize
        favoriteItem={favoriteItem}
        handleSetIsOpen={handleSetIsOpen}
        isOpen={isOpen}
      />
    );
  }
};

export default CardFavorite;
