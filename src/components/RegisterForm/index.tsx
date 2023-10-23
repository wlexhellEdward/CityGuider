import * as React from 'react';
import {
    Typography, Avatar, Button, TextField, Link, Box
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RegisterFormStyle from './styled';

export const RegisterForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const useRegisterFormStyle = RegisterFormStyle()
    return (
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
                        <Link href="/login" variant="body2">
                            Уже есть аккаунт? Войти
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}