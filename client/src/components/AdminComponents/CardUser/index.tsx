import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { IUser } from "@/interfaces/IUser";
import { deleteUser } from "@/store/reducers/adminSlice/adminSlice";
import { deleteUserById } from "@/utils/services/firebaseService";
import { refactorString } from "@/utils/refactors/textRefactors";

import { CardUserProps } from "./interfaces";
import CardUserStyle from "./styled";
import { toast } from 'react-toastify';
import { SUCCESES } from '@/consts/consts';

export const CardUser = ({ user, onClickEditUser }: CardUserProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const handleClickDelete = (user: IUser) => {
        dispatch(deleteUser(user.uid))
        deleteUserById(user.uid)
        toast(SUCCESES.DELETE_USER, { type: 'success' })

    }

    const useCardUserStyle = CardUserStyle({ Pallete: pallete });

    return (
        <Card className={useCardUserStyle.classes.cardUser}>
            <CardMedia className={useCardUserStyle.classes.cardMedia}>
                <AssignmentIndIcon />
            </CardMedia>
            <CardContent className={useCardUserStyle.classes.cardContent}>
                <CardContent>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Уникальный ID</Typography>
                        <Typography variant="overline">{user.uid}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Почта</Typography>
                        <Typography variant="overline">{user.email}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Хэш пароля</Typography>
                        <Typography variant="overline">{refactorString(user.passwordHash)}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Дата регистрации</Typography>
                        <Typography variant="overline">{user.metadata.creationTime}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Последний вход</Typography>
                        <Typography variant="overline">{user.metadata.lastSignInTime}</Typography>
                    </Box>
                </CardContent>
            </CardContent>
            <CardActions className={useCardUserStyle.classes.cardActions}>
                <Button onClick={() => handleClickDelete(user)} color="error" variant="contained" size="small" startIcon={<DeleteIcon />}>Удалить</Button>
                <Button onClick={() => onClickEditUser(user)} variant="contained" size="small" startIcon={<EditIcon />}>Редактировать</Button>
            </CardActions>
        </Card>
    )
}