import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const ArrowBoxStyle = makeStyles<ThemeApp>()((theme, { Pallete }) => ({
  boxArrow: {
    width: theme.spacing(3),
    position: "absolute",
    zIndex: "12",
    left: theme.spacing(11.5),
    height: "100%",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      left: theme.spacing(5),
    },
  },
  boxArrowOpen: {
    width: 20,
    position: "absolute",
    zIndex: "10",
    left: theme.spacing(55),
    height: "100%",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  containerArrow: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(4, 0),
    boxShadow: "8px 0px 6px 2px rgba(200, 200, 200, 0.6)",
    width: 20,
    height: 40,
    backgroundColor: Pallete.background,
    borderRadius: "0 8px 8px 0",
  },
  openDrawerArrow: {
    rotate: "180deg",
    filter: "invert(1)",
  },
}));

export default ArrowBoxStyle;
