import { Box } from "@mui/material";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { addItem, deleteItem } from "@/store/reducers";
import { SearchPlaceProps } from "./interfaces";
import SearchPlaceStyle from "./styled";
import { SelectedPlace } from "../SelectedPlace";
import { Place } from "../Place";

const SearchPlace: React.FC<SearchPlaceProps> = ({
  searchPlace,
  isSelected,
}) => {
  const dispatch = useAppDispatch();
  const selectedItems = useTypeSelector(
    (state) => state.searchSlice.selectedItems
  );
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const handleSetSelectedItemsArray = (type: string) => {
    if (!selectedItems.includes(type)) {
      dispatch(addItem(type));
    } else {
      dispatch(deleteItem(type));
    }
  };
  const useSearchPlaceStyle = SearchPlaceStyle({ Pallete: pallete });
  return (
    <>
      <Box
        data-testid="place-for-type-search"
        onClick={() => handleSetSelectedItemsArray(searchPlace.type)}
        className={useSearchPlaceStyle.classes.containerPlace}
        key={searchPlace.id}
      >
        {isSelected ? (
          <SelectedPlace searchPlace={searchPlace} />
        ) : (
          <Place searchPlace={searchPlace} />
        )}
      </Box>
    </>
  );
};

export default SearchPlace;
