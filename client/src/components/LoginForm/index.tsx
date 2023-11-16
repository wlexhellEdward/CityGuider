import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button, Link, Typography } from "@mui/material";

import { ContainerInputsLine } from "@/components/ContainerInputsLine";
import { ModalFormError } from "@/components/ModalFormError";
import { ERRORS, PROVIDERS } from "@/constants/consts";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { IResponse } from "@/interfaces/IResponse";
import { editUser } from "@/store/reducers/adminSlice/adminSlice";
import { setError } from "@/store/reducers/errorSlice/errorSlice";
import { setUser } from "@/store/reducers/userSlice/userSlice";
import { registerWithDifferentProvider } from "@/utils/auth/authDifferentProvider";
import { getMessageError } from "@/utils/errors/errorFinder";

import { ResetPasswordModal } from "../ResetPasswordModal";
import LoginFormStyle from "./styled";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { checkUserRole } from "@/utils/firebaseServices/users/usersServices";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const redirectTo = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const isOpen = useTypeSelector((state) => state.errorSlice.isOpen);
  const handleCloseResetPassword = () => {
    setResetPassword(false);
  };
  const handleSetError = (isOpen: boolean, message: string, type: string) => {
    dispatch(
      setError({
        isOpen: isOpen,
        message: message,
        type: type,
      })
    );
  };
  const handleSetIsLoading = () => {
    setIsLoading((prev) => !prev);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSetIsLoading();
    const auth = getAuth();
    const formElement = event.target as HTMLFormElement;
    const [email, password] = [
      formElement.email.value,
      formElement.password.value,
    ];
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const dt = new Date();
        const uid = user.uid;
        checkUserRole(uid).then((response) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.getIdToken(),
              password: password,
              role: response,
            })
          );
          const metadata = { lastSignInTime: dt };
          editUser(metadata);
          redirectTo("/");
          handleSetIsLoading();
        });
      })
      .catch((error) => {
        const message = getMessageError(error);
        handleSetError(true, message, "Ошибка авторизации");
        handleSetIsLoading();
      });
  };

  const handleClickForgetPassword = () => {
    setResetPassword(true);
  };

  const handleClickRegisterWithProvider = (provider: string) =>
    registerWithDifferentProvider(auth, provider)
      .then((result: IResponse) => {
        dispatch(
          setUser({
            id: result.user.uid,
            email: result.user.email || "",
            token: result.token || "",
          })
        );
        redirectTo("/");
      })
      .catch(() => {
        toast(ERRORS.CANT_REGISTER_WITH_RPOVIDER, { type: "error" });
      });

  const useLoginFormStyle = LoginFormStyle({ Pallete: pallete });
  return (
    <>
      <Box className={useLoginFormStyle.classes.containerRegister}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          className={useLoginFormStyle.classes.titleForm}
          component="h1"
          variant="h5"
        >
          Авторизация
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Box className={useLoginFormStyle.classes.containerInputsForm}>
            <ContainerInputsLine />
            <Button
              onClick={handleClickForgetPassword}
              className={useLoginFormStyle.classes.buttonForgetPassword}
              variant="text"
            >
              Забыли пароль?
            </Button>
          </Box>
          <LoadingButton
            data-testid="btn-submit"
            loading={isLoading}
            className={useLoginFormStyle.classes.buttonSubmit}
            type="submit"
            fullWidth
            variant="contained"
          >
            Войти
          </LoadingButton>
          <Box className={useLoginFormStyle.classes.featActionForm}>
            <Box className={useLoginFormStyle.classes.otherMethodSignIn}>
              <Button
                variant="outlined"
                className={useLoginFormStyle.classes.btnWithIcons}
                onClick={() =>
                  handleClickRegisterWithProvider(PROVIDERS.facebook)
                }
                startIcon={<FacebookIcon />}
              ></Button>
              <Button
                variant="outlined"
                className={useLoginFormStyle.classes.btnWithIcons}
                onClick={() =>
                  handleClickRegisterWithProvider(PROVIDERS.google)
                }
                startIcon={<GoogleIcon />}
              ></Button>
            </Box>
            <Link
              className={useLoginFormStyle.classes.supportActionTitle}
              href="/register"
              variant="body2"
            >
              Ещё нету аккаунта?
            </Link>
          </Box>
        </Box>
      </Box>
      {isOpen ? <ModalFormError /> : null}
      {resetPassword ? (
        <ResetPasswordModal
          open={resetPassword}
          handleClose={handleCloseResetPassword}
        />
      ) : null}
    </>
  );
};
