import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const PageStyle = makeStyles<ThemeApp>()((theme, { Pallete }) => ({
  containerApp: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  containerCatcher: {
    width: "100vw",
    display: "flex",
    height: "100vh",
    color: Pallete.title,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "mont",
    fontSize: theme.spacing(5),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      fontSize: theme.spacing(2),
    },
  },
  description: {
    fontFamily: "mont",
    color: Pallete.description,
    fontSize: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(1),
    },
  },
  containerPageForm: {
    minWidth: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default PageStyle;
