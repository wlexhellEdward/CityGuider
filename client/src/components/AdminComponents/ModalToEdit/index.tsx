import { useState } from 'react';
import { toast } from 'react-toastify';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import { SUCCESES } from '@/constants/consts';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { editUser } from '@/store/reducers/adminSlice/adminSlice';

import { ModalProps } from './interfaces';
import { modalToEditStyle } from './styled';
import { editUserInfo } from '@/utils/firebaseServices/users/usersServices';

export const ModalToEdit = ({ user, onClose }: ModalProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const [editedUser, setEditedUser] = useState(user);

    const handleSave = () => {
        dispatch(editUser(editedUser))
        editUserInfo(editedUser)
        onClose();
        toast(SUCCESES.EDIT_USER, { type: 'success' })
    };

    const useModalToEditStyle = modalToEditStyle({ Pallete: pallete })

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle className={useModalToEditStyle.classes.dialogTitle}>Редактирование пользователя</DialogTitle>
            <Box></Box>
            <DialogContent className={useModalToEditStyle.classes.dialogContent}>
                <TextField
                    className={useModalToEditStyle.classes.inputs}
                    label="Почта"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                />
            </DialogContent>
            <DialogActions className={useModalToEditStyle.classes.dialogActions}>
                <Button color='error' variant="contained" onClick={onClose}>Отмена</Button>
                <Button color='success' variant="contained" onClick={handleSave}>Сохранить</Button>
            </DialogActions>
        </Dialog>
    );
};

