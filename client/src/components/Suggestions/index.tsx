import { ListItem, Typography } from "@mui/material";

import { useTypeSelector } from "@/hooks/redux";
import { refactorString } from "@/utils/refactors/textRefactors";

import { SuggestionsProps } from "./interface";
import SuggestionsStyle from "./styled";

export const Suggestions = ({
  handleSelect,
  main_text,
  secondary_text,
}: SuggestionsProps) => {
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);

  const useSuggestionsStyle = SuggestionsStyle({ Pallete: pallete });
  return (
    <ListItem
      onClick={handleSelect}
      className={useSuggestionsStyle.classes.suggestionContainer}
    >
      <Typography
        whiteSpace={"normal"}
        className={useSuggestionsStyle.classes.titleSuggestion}
      >
        {main_text}
      </Typography>
      <Typography
        whiteSpace={"normal"}
        className={useSuggestionsStyle.classes.titleDescription}
      >
        {refactorString(secondary_text)}
      </Typography>
    </ListItem>
  );
};
