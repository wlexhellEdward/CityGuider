import * as React from 'react';
import {
    Typography, Avatar, Button, TextField, Link, Box
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginFormStyle from './styled';

export const LoginForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const useLoginFormStyle = LoginFormStyle()
    return (
        <Box className={useLoginFormStyle.classes.containerRegister}>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography className={useLoginFormStyle.classes.titleForm} component="h1" variant="h5">
                Авторизация
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
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
                <Button className={useLoginFormStyle.classes.buttonSubmit} type="submit" fullWidth variant="contained">Войти</Button>
                <Box className={useLoginFormStyle.classes.featActionForm}>
                    <Box >
                        <Link href="/register" variant="body2">
                            Ещё нету аккаунта? Зарегистрироваться
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}