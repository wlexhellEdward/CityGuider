import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
    Typography, Avatar, Button, TextField, Link, Box
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import RegisterFormStyle from './styled';
import { useAppDispatch, useTypeSelector } from 'hooks/redux';
import { setUser } from 'store/reducers/userSlice/userSlice';
import { setError } from 'store/reducers/errorSlice/errorSlice';
import { ModalFormError } from 'components/ModalFormError';
import { getMessageError } from 'utils/errorFinder';

export const RegisterForm = () => {
    const dispatch = useAppDispatch()
    const redirectTo = useNavigate()
    const isOpen = useTypeSelector(state => state.errorSlice.isOpen)
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
                    token: user.getIdToken(),
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }))
                redirectTo('/');
            })
            .catch(
                (error) => {
                    const message = getMessageError(error)
                    handleSetError(true, message, 'Ошибка регистрации')
                }
            )
    };

    const useRegisterFormStyle = RegisterFormStyle()
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
                                id="password"
                                autoComplete="new-password"
                            />
                        </Box>
                    </Box>
                    <Button className={useRegisterFormStyle.classes.buttonSubmit} type="submit" fullWidth variant="contained">Зарегистрироваться</Button>
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