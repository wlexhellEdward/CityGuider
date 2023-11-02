import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import {
    Avatar, Box,
    Link, TextField, Typography
} from '@mui/material';

import { ModalFormError } from '@/components/modalFormError';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setError } from '@/store/reducers/errorSlice/errorSlice';
import { setUser } from '@/store/reducers/userSlice/userSlice';
import { getMessageError } from '@/utils/errorFinder';
import RegisterFormStyle from './styled';
import { createUserWithEmailAndPassword, Auth, getAuth } from "firebase/auth";
import { FormValues } from './interfaces';


export const RegisterForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const redirectTo = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const isOpen = useTypeSelector(state => state.errorSlice.isOpen);
    const pallete = useTypeSelector(state => state.appSlice.Pallete);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmValid, setConfirmValid] = useState(true);
    const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '', confirm: '' });
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setEmailValid(/\S+@\S+\.\S+/.test(email));
        setFormValues({ ...formValues, email });
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        setPasswordValid(password.length >= 6);
        setFormValues({ ...formValues, password });
    };
    const handleConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const confirm = event.target.value;
        setConfirmValid(confirm === formValues.password);
        setFormValues({ ...formValues, confirm });
    };
    const isFormValid = () => emailValid && passwordValid && confirmValid;

    const handleSetIsLoading = () => {
        setIsLoading(prev => !prev);
    };

    const handleSetError = (isOpen: boolean, message: string, type: string) => {
        dispatch(
            setError({
                isOpen: isOpen,
                message: message,
                type: type
            })
        );
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth: Auth = getAuth();
        if (isFormValid()) {
            handleSetIsLoading();
            createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
                .then(({ user }) => {
                    const uid = user.uid;
                    let role = 0;
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
                    <Box className={useRegisterFormStyle.classes.containerInputsForm}>
                        <TextField
                            required
                            fullWidth
                            className={useRegisterFormStyle.classes.inputRegister}
                            id="email"
                            label="Email адресс"
                            data-testid="input"
                            name="email"
                            autoComplete="email"
                            onChange={handleEmailChange}
                            error={!emailValid}
                            helperText={!emailValid ? 'Некорректный email' : ''}
                        />
                        <TextField
                            required
                            fullWidth
                            className={useRegisterFormStyle.classes.inputRegister}
                            name="password"
                            label="Пароль"
                            type="password"
                            data-testid="input"
                            id="password"
                            autoComplete="new-password"
                            onChange={handlePasswordChange}
                            error={!passwordValid}
                            helperText={!passwordValid ? 'Пароль должен быть не менее 6 символов' : ''}
                        />
                        <TextField
                            required
                            fullWidth
                            className={useRegisterFormStyle.classes.inputRegister}
                            name="confirm"
                            label="Подтвердите пароль"
                            type="password"
                            data-testid="input"
                            id="confirm"
                            autoComplete="confirm-password"
                            onChange={handleConfirmChange}
                            error={!confirmValid}
                            helperText={!confirmValid ? 'Пароли не совпадают' : ''}
                        />
                    </Box>
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
