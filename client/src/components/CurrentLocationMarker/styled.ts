import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const CurrentLocationMarkerStyle = makeStyles<ThemeApp>()(
  (theme, { Pallete }) => ({
    markerContainer: {
      backgroundColor: Pallete.main,
      width: 120,
      height: 40,
      borderRadius: theme.spacing(8),
      zIndex: 12,
    },
  })
);

export default CurrentLocationMarkerStyle;
