import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import {
    Avatar, Box,
    Link, TextField, Typography
} from '@mui/material';
import { ModalFormError } from 'components/ModalFormError';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { setError } from 'store/reducers/errorSlice/errorSlice';
import { setUser } from 'store/reducers/userSlice/userSlice';
import { getMessageError } from 'utils/errorFinder';

import RegisterFormStyle from './styled';
import { getDatabase, ref, set } from 'firebase/database';

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
        console.log(message)
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
        const db = getDatabase()
        const formElement = event.target as HTMLFormElement;
        const [email, password, firstName, lastName] = [
            formElement.email.value,
            formElement.password.value,
            formElement.firstName.value,
            formElement.lastName.value
        ]
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }))
                const date = new Date()
                set(ref(db, 'users/' + user.uid), {
                    id:user.uid,
                    email: email,
                    registered: date.toLocaleDateString(),
                    lastLogin:date.toLocaleDateString(),
                    firstName:firstName,
                    lastName:lastName
                })
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
                        <Box className={useRegisterFormStyle.classes.containerInputsLine}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                className={useRegisterFormStyle.classes.inputRegister}
                                required
                                fullWidth
                                data-testid='input'
                                id="firstName"
                                label="Имя"
                                autoFocus
                            />
                            <TextField
                                required
                                fullWidth
                                className={useRegisterFormStyle.classes.inputRegister}
                                id="lastName"
                                label="Фамлия"
                                data-testid='input'
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Box>
                        <Box >
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
                        </Box>
                        <Box >
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