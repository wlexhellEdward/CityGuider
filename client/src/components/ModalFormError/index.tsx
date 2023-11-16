import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { setError } from "@/store/reducers/errorSlice/errorSlice";

import ModalFormErrorStyle from "./styled";

export const ModalFormError = () => {
  const isOpen = useTypeSelector((state) => state.errorSlice.isOpen);
  const message = useTypeSelector((state) => state.errorSlice.message);
  const type = useTypeSelector((state) => state.errorSlice.type);
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(
      setError({
        isOpen: false,
        message: message,
        type: type,
      })
    );
  };
  const useModalFormErrorStyle = ModalFormErrorStyle({ Pallete: pallete });
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={useModalFormErrorStyle.classes.wrapperModal}>
        <ErrorOutlineIcon
          className={useModalFormErrorStyle.classes.errorIcon}
        />
        <Typography
          className={useModalFormErrorStyle.classes.titleError}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {type}
        </Typography>
        <Typography
          className={useModalFormErrorStyle.classes.descriptionError}
          id="modal-modal-description"
        >
          {message}
        </Typography>
      </Box>
    </Modal>
  );
};
