import { forwardRef } from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { signOut, getAuth } from "firebase/auth";
import { TransitionProps } from '@mui/material/transitions';
import { ConfrimModalProps } from './interfaces';


const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


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
            TransitionComponent={Transition}
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