import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

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
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const RegisterForm = () => {
    const dispatch = useAppDispatch()
    const redirectTo = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const isOpen = useTypeSelector(state => state.errorSlice.isOpen)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const handleSetIsLoading = () => {
        setIsLoading(prev => !prev)
    }
    const handleSetError = (isOpen: boolean, message: string, type: string) => {
        dispatch(setError({
            isOpen: isOpen,
            message: message,
            type: type
        }))
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth = getAuth()
        handleSetIsLoading()
        const formElement = event.target as HTMLFormElement;
        const [email, password] = [
            formElement.email.value,
            formElement.password.value,
        ]
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    password: password,
                }))
                redirectTo('/');
                handleSetIsLoading()
            })
            .catch(
                (error) => {
                    const message = getMessageError(error)
                    handleSetError(true, message, 'Ошибка регистрации')
                    handleSetIsLoading()
                }
            )
    };

    const useRegisterFormStyle = RegisterFormStyle({ Pallete: pallete })
    return (
        <>
            <Box className={useRegisterFormStyle.classes.containerRegister}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={useRegisterFormStyle.classes.titleForm} component="h1" variant="h5">
                    Регистрация
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Box className={useRegisterFormStyle.classes.containerInputsForm}>
                        <TextField
                            required
                            fullWidth
                            className={useRegisterFormStyle.classes.inputRegister}
                            id="email"
                            label="Email адресс"
                            data-testid='input'
                            name="email"
                            autoComplete="email"
                        />
                        <Box className={useRegisterFormStyle.classes.containerInputsLine}>
                            <TextField
                                required
                                fullWidth
                                className={useRegisterFormStyle.classes.inputRegister}
                                name="password"
                                label="Пароль"
                                type="password"
                                data-testid='input'
                                id="password"
                                autoComplete="new-password"
                            />
                            <TextField
                                required
                                fullWidth
                                className={useRegisterFormStyle.classes.inputRegister}
                                name="confirm"
                                label="Повторите пароль"
                                type="password"
                                data-testid='input'
                                id="confirm"
                                autoComplete="confirm-password"
                            />
                        </Box>
                    </Box>
                    <LoadingButton data-testid='button-submit' loading={isLoading} className={useRegisterFormStyle.classes.buttonSubmit} type="submit" fullWidth variant="contained">Зарегистрироваться</LoadingButton>
                    <Box className={useRegisterFormStyle.classes.featActionForm}>
                        <Box >
                            <Link className={useRegisterFormStyle.classes.supportActionTitle} href="/login" variant="body2">
                                Уже есть аккаунт? Войти
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {isOpen ?
                <ModalFormError />
                :
                null
            }
        </>
    );
}