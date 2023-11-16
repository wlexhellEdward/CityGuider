import { useTypeSelector } from "@/hooks/redux";
import { selectedPlaceProps } from "./interfaces";
import SelectedPlaceStyle from "./styled";
import DoesntExistPhoto from "/public/doesntExist.png";
import { Typography } from "@mui/material";

export const SelectedPlace = ({ searchPlace }: selectedPlaceProps) => {
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const useSelectedPlaceStyle = SelectedPlaceStyle({ Pallete: pallete });
  return (
    <>
      <img
        data-testid="type-of-place"
        className={useSelectedPlaceStyle.classes.imgPlace}
        src={searchPlace.img}
        title="place photo"
        alt={DoesntExistPhoto}
      />
      <Typography className={useSelectedPlaceStyle.classes.titlePlace}>
        {searchPlace.title}
      </Typography>
    </>
  );
};
