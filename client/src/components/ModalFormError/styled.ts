import { ThemeApp } from "@/interfaces/IThemeApp";

import { makeStyles } from "tss-react/mui";

const ModalFormErrorStyle = makeStyles<ThemeApp>()((theme, { Pallete }) => ({
  wrapperModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: Pallete.background,
    border: "2px solid #000",
    padding: theme.spacing(2, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleError: {
    fontFamily: "mont",
    fontSize: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  errorIcon: {
    fill: "red",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  descriptionError: {
    display: "flex",
    fontFamily: "mont",
    justifyContent: "center",
    fontSize: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
    color: Pallete.description,
  },
}));

export default ModalFormErrorStyle;
