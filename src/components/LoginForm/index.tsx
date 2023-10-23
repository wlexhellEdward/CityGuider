import React from 'react';
import {
    Typography, Avatar, Button, TextField, Link, Box
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import LoginFormStyle from './styled';
import { setUser } from 'store/reducers/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import { ModalFormError } from 'components/ModalFormError';
import { setError } from 'store/reducers/errorSlice/errorSlice';
import { getMessageError } from 'utils/errorFinder';

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const redirectTo = useNavigate()
    const isOpen = useTypeSelector(state => state.errorSlice.isOpen)
    const handleSetError = (isOpen: boolean, message: string, type: string) => {
        dispatch(setError({
            isOpen: isOpen,
            message: message,
            type: type
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const auth = getAuth()
        const formElement = event.target as HTMLFormElement;
        const [email, password,] = [
            formElement.email.value,
            formElement.password.value,
        ]
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.getIdToken(),
                    password: password,
                }))
                redirectTo('/');
            })
            .catch(
                (error) => {
                    const message = getMessageError(error)
                    handleSetError(true, message, 'Ошибка авторизации')
                }
            )
    };

    const useLoginFormStyle = LoginFormStyle()
    return (
        <>
            <Box className={useLoginFormStyle.classes.containerRegister}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={useLoginFormStyle.classes.titleForm} component="h1" variant="h5">
                    Авторизация
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <Box className={useLoginFormStyle.classes.containerInputsForm}>
                        <Box className={useLoginFormStyle.classes.containerInputsLine}>
                            <TextField
                                required
                                fullWidth
                                className={useLoginFormStyle.classes.inputRegister}
                                id="email"
                                label="Email адресс"
                                name="email"
                                autoComplete="email"
                            />
                            <TextField
                                required
                                fullWidth
                                className={useLoginFormStyle.classes.inputRegister}
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Box>
                    </Box>
                    <Button  className={useLoginFormStyle.classes.buttonSubmit} type="submit" fullWidth variant="contained">Войти</Button>
                    <Box className={useLoginFormStyle.classes.featActionForm}>
                        <Box>
                            <Link  className={useLoginFormStyle.classes.supportActionTitle} href="/register" variant="body2">
                                Ещё нету аккаунта? Зарегистрироваться
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