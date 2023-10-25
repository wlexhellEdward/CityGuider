import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getAuth,signOut } from "firebase/auth";
import { useNavigate } from 'react-router';

import { ConfrimModalProps } from './interfaces';



export const СonfirmModal = ({ isOpen, handleClose }: ConfrimModalProps) => {
    const navigate = useNavigate();

    const handleClickLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                navigate('/register')
            })
    }

    return (
        <Dialog
            open={isOpen}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Выход с аккаунта</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Вы уверены, что хотите выйти с аккаунт?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="success" onClick={handleClickLogout}>Да</Button>
                <Button variant="outlined" color="error" onClick={handleClose} >Нет</Button>
            </DialogActions>
        </Dialog>
    );
}