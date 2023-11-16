import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const containerInputsForm = makeStyles<ThemeApp>()((theme, { Pallete }) => ({
  inputRegister: {
    "&>*": {
      fontFamily: "mont",
      "&>*": {
        borderBottom: `3px solid ${Pallete.border}`,
      },
    },
  },
  containerInputsForm: {
    gap: theme.spacing(0.65),
    display: "flex",
    flexDirection: "column",
    "&>*": {
      marginBottom: theme.spacing(1),
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(0.3),
    },
  },
  containerInputsLine: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  buttonSubmit: {
    margin: theme.spacing(2, 0),
    fontFamily: "mont",
  },
  passwordInput: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  supportActionTitle: {
    fontFamily: "mont",
  },
}));

export default containerInputsForm;
