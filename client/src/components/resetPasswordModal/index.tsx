import { useState } from "react";

import { Modal, Box, Typography, Button, TextField } from "@mui/material"
import { ResetPasswordProps } from "./interfaces"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { SUCCESES } from '@/utils/consts';
import { useTypeSelector } from "@/hooks/redux";
import { toast } from "react-toastify";

import ResetPasswordModalStyle from "./styled";


export const ResetPasswordModal = ({ open, handleClose }: ResetPasswordProps) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const pallete = useTypeSelector((state) => state.appSlice.Pallete);
    const handleClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!isValidEmail(email)) {
            setError('Некорректный email');
        } else {
            setError('');
            sendPasswordResetEmail(auth, email, { url: process.env.REACT_APP_BASE_PAT || "" });
            toast(SUCCESES.RESET_PASSWORD, { type: 'info' });
            handleClose();
        }
    };
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const useResetPasswordModalStyle = ResetPasswordModalStyle({ Pallete: pallete });


    return (
        <Modal className={useResetPasswordModalStyle.classes.modal} open={open} onClose={handleClose}>
            <Box onSubmit={handleClickSubmit} className={useResetPasswordModalStyle.classes.formReset} component="form">
                <Typography className={useResetPasswordModalStyle.classes.title}>Введите вашу почту</Typography>
                <TextField
                    required
                    fullWidth
                    data-testid="input"
                    id="email"
                    label="Email адресс"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error !== ''}
                    helperText={error}
                />
                <Box className={useResetPasswordModalStyle.classes.formAction}>
                    <Button variant="contained" onClick={handleClose} size="small" color="error">
                        Отмена
                    </Button>
                    <Button variant="contained" data-testid='btn-submit' type='submit' size="small" color="success">
                        Восстановить
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};