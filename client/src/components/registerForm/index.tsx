import React from 'react';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Link, Typography } from '@mui/material';
import { ModalFormError } from '@/components/ModalFormError';
import { setError } from '@/store/reducers/errorSlice/errorSlice';
import { setUser } from '@/store/reducers/userSlice/userSlice';
import { getMessageError } from '@/utils/errors/errorFinder';
import { ContainerInputsForm } from '@/components/ContainerInputsForm';

import RegisterFormStyle from './styled';
import { Auth, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setIsLoading } from '@/store/reducers';


export const RegisterForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const redirectTo = useNavigate();
    const isLoading = useTypeSelector(state => state.registerSlice.isLoading);
    const isOpen = useTypeSelector(state => state.registerSlice.isOpen);
    const pallete = useTypeSelector(state => state.appSlice.Pallete);
    const formValues = useTypeSelector(state => state.registerSlice.formValues);
    const formValidity = useTypeSelector(state => state.registerSlice.formValidity);



    const isFormValid = () => formValidity.email && formValidity.password && formValidity.confirm;

    const handleSetIsLoading = () => {
        dispatch(setIsLoading(!isLoading));
    };

    const handleSetError = (isOpen: boolean, message: string, type: string) => {
        dispatch(setError({
            isOpen: isOpen,
            message: message,
            type: type
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth: Auth = getAuth();
        if (isFormValid()) {
            handleSetIsLoading();
            createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
                .then(({ user }) => {
                    const uid = user.uid;
                    const role = 0;
                    dispatch(
                        setUser({
                            email: user.email,
                            id: uid,
                            token: user.refreshToken,
                            password: formValues.password,
                            role: role
                        })
                    );
                    redirectTo('/');
                    handleSetIsLoading();
                })
                .catch((error) => {
                    const message = getMessageError(error);
                    handleSetError(true, message, 'Ошибка регистрации');
                    handleSetIsLoading();
                });
        }
    };

    const useRegisterFormStyle = RegisterFormStyle({ Pallete: pallete });

    return (
        <>
            <Box className={useRegisterFormStyle.classes.containerRegister}>
                <Avatar className={useRegisterFormStyle.classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={useRegisterFormStyle.classes.titleForm} component="h1" variant="h5">
                    Регистрация
                </Typography>
                <Box component="form" className={useRegisterFormStyle.classes.formRegister} noValidate onSubmit={handleSubmit}>
                    <ContainerInputsForm />
                    <LoadingButton
                        data-testid="button-submit"
                        loading={isLoading}
                        className={useRegisterFormStyle.classes.buttonSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={!isFormValid()}
                    >
                        Зарегистрироваться
                    </LoadingButton>
                    <Box className={useRegisterFormStyle.classes.featActionForm}>
                        <Box>
                            <Link className={useRegisterFormStyle.classes.supportActionTitle} href="/login" variant="body2">
                                Уже есть аккаунт? Войти
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {isOpen ? <ModalFormError /> : null}
        </>
    );
};

export default RegisterForm;
