import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const BarStyle = makeStyles<ThemeApp>()((theme, { Pallete }) => ({
  title: {
    color: "white",
  },
  barBox: {
    display: "flex",
    color: Pallete.background,
    alignContent: "center",
    textAlign: "center",
    height: theme.spacing(5),
    "&>*": {
      marginTop: theme.spacing(-1.5),
    },
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonBackToMainPage: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
}));

export default BarStyle;
