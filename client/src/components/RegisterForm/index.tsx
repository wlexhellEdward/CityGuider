import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import { ModalFormError } from '@/components/ModalFormError';
import { setError } from '@/store/reducers/errorSlice/errorSlice';
import { setUser } from '@/store/reducers/userSlice/userSlice';
import { getMessageError } from '@/utils/errors/errorFinder';
import { ContainerInputsForm } from '@/components/ContainerInputsForm';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Auth, FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { resetAll, setIsLoading } from '@/store/reducers';
import { toast } from 'react-toastify';

import RegisterFormStyle from './styled';


export const RegisterForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const redirectTo = useNavigate();
    const isLoading = useTypeSelector(state => state.registerSlice.isLoading);
    const isOpen = useTypeSelector(state => state.registerSlice.isOpen);
    const pallete = useTypeSelector(state => state.appSlice.Pallete);
    const formValues = useTypeSelector(state => state.registerSlice.formValues);
    const formValidity = useTypeSelector(state => state.registerSlice.formValidity);
    const auth = getAuth()

    const isFormValid = () => formValidity.email && formValidity.password && formValidity.confirm && formValues.email;

    const handleSetIsLoading = () => {
        dispatch(setIsLoading(!isLoading));
    };
    useEffect(() => {
        return () => {
            dispatch(resetAll())
        }
    }, [])
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
    const handleClickRegisterFacebook = async () => {
        const provider = new FacebookAuthProvider()
        try {
            const result = await signInWithPopup(auth, provider)
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;

            dispatch(setUser({
                id: user.uid,
                email: user.email || '',
                token: token || ''
            }))
            redirectTo('/')
        } catch (error) {
            if (error instanceof Error) {
                toast(error.message, { type: 'error' })
            }
        }
    }
    const handleClickRegisterGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        dispatch(setUser({
            id: user.uid,
            email: user.email || '',
            token: token || ''
        }))
        redirectTo('/')
    }

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
                        <Box className={useRegisterFormStyle.classes.otherMethodSignIn}>
                            <Button variant="outlined" onClick={handleClickRegisterFacebook} className={useRegisterFormStyle.classes.btnWithIcons} startIcon={<FacebookIcon />}></Button>
                            <Button variant="outlined" onClick={handleClickRegisterGoogle} className={useRegisterFormStyle.classes.btnWithIcons} startIcon={<GoogleIcon />}></Button>
                        </Box>
                        <Link className={useRegisterFormStyle.classes.supportActionTitle} href="/login" variant="body2">
                            Уже есть аккаунт? Войти
                        </Link>
                    </Box>
                </Box>
            </Box>
            {isOpen ? <ModalFormError /> : null}
        </>
    );
};

export default RegisterForm;
