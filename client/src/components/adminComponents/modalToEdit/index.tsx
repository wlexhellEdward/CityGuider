import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { ModalProps } from './interfaces';
import { editUserInfo } from 'utils/firebaseService';
import { editUser } from 'store/reducers/adminSlice/adminSlice';
import { modalToEditStyle } from './styled';
import { useAppDispatch, useTypeSelector } from 'hooks/redux';

export const ModalToEdit = ({ user, onClose }: ModalProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const useModalToEditStyle = modalToEditStyle({ Pallete: pallete })
    const [editedUser, setEditedUser] = useState(user);

    const handleSave = () => {
        editUserInfo(editedUser)
        dispatch(editUser(editedUser))
        onClose();
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Редактирование пользователя</DialogTitle>
            <DialogContent className={useModalToEditStyle.classes.dialogContent}>
                <TextField
                    label="Имя"
                    value={editedUser.firstName}
                    onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
                />
                <TextField
                    label="Уникальный ID"
                    value={editedUser.id}
                    onChange={(e) => setEditedUser({ ...editedUser, id: e.target.value })}
                />
                <TextField
                    label="Почта"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                />
                <TextField
                    label="Дата регистрации"
                    value={editedUser.registered}
                    onChange={(e) => setEditedUser({ ...editedUser, registered: e.target.value })}
                />
                <TextField
                    label="Последний вход"
                    value={editedUser.lastLogin}
                    onChange={(e) => setEditedUser({ ...editedUser, lastLogin: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button color='error' variant="contained" onClick={onClose}>Отмена</Button>
                <Button color='success' variant="contained" onClick={handleSave}>Сохранить</Button>
            </DialogActions>
        </Dialog>
    );
};

