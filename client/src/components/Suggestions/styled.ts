import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const SuggestionsStyle = makeStyles<ThemeApp>()((theme, { Pallete }) => ({
  suggestions: {
    backgroundColor: Pallete.background,
    height: theme.spacing(40),
    zIndex: 10,
  },
  suggestionContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Pallete.background,
    alignItems: "start",
  },
  titleSuggestion: {
    fontWeight: "bold",
    fontFamily: "mont",
    color: Pallete.title,
    fontSize: 12,
  },
  titleDescription: {
    color: Pallete.description,
    fontFamily: "mont",
    fontSize: 10,
  },
}));

export default SuggestionsStyle;
