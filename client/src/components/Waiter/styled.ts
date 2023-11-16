import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const WaiterStyle = makeStyles<ThemeApp>()(() => ({
  loaderContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  loaderText: {
    fontFamily: "mont",
    position: "relative",
    fontSize: 12,
    color: "grey",
    fontWeight: "300",
  },
}));

export default WaiterStyle;
