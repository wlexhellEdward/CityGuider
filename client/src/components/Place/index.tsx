import { useTypeSelector } from "@/hooks/redux";
import { placeProps } from "./interfaces";
import PlaceStyle from "./styled";
import DoesntExistPhoto from "/public/doesntExist.png";
import { Typography } from "@mui/material";

export const Place = ({ searchPlace }: placeProps) => {
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const usePlaceStyle = PlaceStyle({ Pallete: pallete });
  return (
    <>
      <img
        data-testid="selected-type-of-place"
        className={usePlaceStyle.classes.imgSelectedPlace}
        src={searchPlace.img}
        title="place photo"
        alt={DoesntExistPhoto}
      />
      <Typography className={usePlaceStyle.classes.titleSelectedPlace}>
        {searchPlace.title}
      </Typography>
    </>
  );
};
