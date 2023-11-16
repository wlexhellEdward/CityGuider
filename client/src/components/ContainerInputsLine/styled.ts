import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const containerInputsLineStyle = makeStyles<ThemeApp>()((theme) => ({
  containerInputsForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    "&>*": {
      marginBottom: theme.spacing(0.5),
    },
  },
  containerInputsLine: {
    display: "flex",
    gap: theme.spacing(2),
  },
  buttonSubmit: {
    margin: theme.spacing(2, 0),
    fontFamily: "mont",
  },
  featActionForm: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&>*": {
      "&>*": {
        fontFamily: "mont",
      },
    },
  },
  inputRegister: {
    "&>*": {
      fontFamily: "mont",
    },
  },
}));

export default containerInputsLineStyle;
