import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import {
    Avatar, Box,
    Button,
    Link, TextField, Typography
} from '@mui/material';

import { ModalFormError } from '@/components/ModalFormError';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { editUser } from '@/store/reducers/adminSlice/adminSlice';
import { setError } from '@/store/reducers/errorSlice/errorSlice';
import { setUser } from '@/store/reducers/userSlice/userSlice';
import { getMessageError } from '@/utils/errors/errorFinder';
import { checkUserRole } from '@/utils/services/firebaseService';

import LoginFormStyle from './styled';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ResetPasswordModal } from '../ResetPasswordModal';

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const redirectTo = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [resetPassword, setResetPassword] = useState(false)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const isOpen = useTypeSelector(state => state.errorSlice.isOpen)
    const handleCloseResetPassword = () => {
        setResetPassword(false)
    }
    const handleSetError = (isOpen: boolean, message: string, type: string) => {
        dispatch(setError({
            isOpen: isOpen,
            message: message,
            type: type
        }))
    }
    const handleSetIsLoading = () => {
        setIsLoading(prev => !prev)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSetIsLoading()
        const auth = getAuth()
        const formElement = event.target as HTMLFormElement;
        const [email, password] = [
            formElement.email.value,
            formElement.password.value,
        ]
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const dt = new Date();
                const uid = user.uid
                checkUserRole(uid).then(response => {
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.getIdToken(),
                        password: password,
                        role: response
                    }))
                    const metadata = { lastSignInTime: dt }
                    editUser(metadata)
                    redirectTo('/');
                    handleSetIsLoading();
                })
            })
            .catch(
                (error) => {
                    console.log(error)
                    const message = getMessageError(error)
                    handleSetError(true, message, 'Ошибка авторизации')
                    handleSetIsLoading()
                }
            )
    };

    const handleClickForgetPassword = () => {
        setResetPassword(true)
    }

    const useLoginFormStyle = LoginFormStyle({ Pallete: pallete })
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
                                data-testid='input'
                                className={useLoginFormStyle.classes.inputRegister}
                                id="email"
                                label="Email адресс"
                                name="email"
                                autoComplete="email"
                            />
                            <TextField
                                required
                                fullWidth
                                data-testid='input'
                                className={useLoginFormStyle.classes.inputRegister}
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Box>
                        <Button onClick={handleClickForgetPassword} className={useLoginFormStyle.classes.buttonForgetPassword} variant="text">
                            Забыли пароль?
                        </Button>
                    </Box>
                    <LoadingButton data-testid='btn-submit' loading={isLoading} className={useLoginFormStyle.classes.buttonSubmit} type="submit" fullWidth variant="contained">Войти</LoadingButton>
                    <Box className={useLoginFormStyle.classes.featActionForm}>
                        <Box>
                            <Link className={useLoginFormStyle.classes.supportActionTitle} href="/register" variant="body2">
                                Ещё нету аккаунта?
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
            {resetPassword ?
                <ResetPasswordModal open={resetPassword} handleClose={handleCloseResetPassword} />
                :
                null
            }
        </>
    );
}