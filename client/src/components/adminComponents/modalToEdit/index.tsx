import { useState } from 'react';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { editUser } from '@/store/reducers/adminSlice/adminSlice';
import { editUserInfo } from '@/utils/firebaseService';

import { ModalProps } from './interfaces';
import { modalToEditStyle } from './styled';

export const ModalToEdit = ({ user, onClose }: ModalProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const [editedUser, setEditedUser] = useState(user);

    const handleSave = () => {
        dispatch(editUser(editedUser))
        editUserInfo(editedUser)
        onClose();
    };

    const useModalToEditStyle = modalToEditStyle({ Pallete: pallete })

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Редактирование пользователя</DialogTitle>
            <Box></Box>
            <DialogContent className={useModalToEditStyle.classes.dialogContent}>
                <TextField
                    label="Почта"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button color='error' variant="contained" onClick={onClose}>Отмена</Button>
                <Button color='success' variant="contained" onClick={handleSave}>Сохранить</Button>
            </DialogActions>
        </Dialog>
    );
};

