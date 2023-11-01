import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useAppDispatch, useTypeSelector } from "hooks/redux";
import { deleteUserById } from "utils/firebaseService";
import { deleteUser } from "store/reducers/adminSlice/adminSlice";

import { CardUserProps } from "./interfaces";
import CardUserStyle from "./styled";
import { IUser } from "interfaces/IUser";

export const CardUser = ({ user, onClickEditUser }: CardUserProps) => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const useCardUserStyle = CardUserStyle({ Pallete: pallete });
    const handleClickDelete = (user: IUser) => {
        dispatch(deleteUser(user.id))
        deleteUserById(user.id)
    }

    return (
        <Card className={useCardUserStyle.classes.cardUser}>
            <CardMedia className={useCardUserStyle.classes.cardMedia}>
                <AssignmentIndIcon />
            </CardMedia>
            <CardContent className={useCardUserStyle.classes.cardContent}>
                <CardContent>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Имя</Typography>
                        <Typography variant="overline">{user.firstName}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Уникальный ID</Typography>
                        <Typography variant="overline">{user.id}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Почта</Typography>
                        <Typography variant="overline">{user.email}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Дата регистрации</Typography>
                        <Typography variant="overline">{user.registered}</Typography>
                    </Box>
                    <Box className={useCardUserStyle.classes.cardContentLine}>
                        <Typography variant="button" gutterBottom>Последний вход</Typography>
                        <Typography variant="overline">{user.lastLogin}</Typography>
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