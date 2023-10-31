import { useEffect, useState } from "react"
import { useAppDispatch, useTypeSelector } from "hooks/redux"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import { deleteUserById, getListAllUsers } from "utils/firebaseService";
import { setAllUsers, deleteUser } from "store/reducers/adminSlice/adminSlice";

import adminContentStyle from "./styled"


export const AdminContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useAppDispatch()
    const itemsPerPage = 6;
    const users = useTypeSelector(state => state.adminSlice.users)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useAdminContentStyle = adminContentStyle({ Pallete: pallete });
    const handleSetCurrentPage = (page: number, event: React.ChangeEvent<unknown>) => {
        console.log(event)
        setCurrentPage(page)
    }
    useEffect(() => {
        getListAllUsers().then(response => {
            dispatch(setAllUsers(response))
        })
    }, [])
    const handleClickDelete = (id: string) => {
        dispatch(deleteUser(id))
        deleteUserById(id)
    }
    const getItemsForPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return users.slice(startIndex, endIndex);
    };
    return (
        <Box className={useAdminContentStyle.classes.content}>
            <Box className={useAdminContentStyle.classes.userContent}>
                <Box className={useAdminContentStyle.classes.cardsUsers}>
                    {getItemsForPage().map(user => {
                        return (
                            <Card className={useAdminContentStyle.classes.cardUser}>
                                <CardMedia className={useAdminContentStyle.classes.cardMedia}>
                                    <AssignmentIndIcon />
                                </CardMedia>
                                <CardContent className={useAdminContentStyle.classes.cardContent}>
                                    <CardContent>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Имя</Typography>
                                            <Typography variant="overline">{user.firstName}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Уникальный ID</Typography>
                                            <Typography variant="overline">{user.id}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Почта</Typography>
                                            <Typography variant="overline">{user.email}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Дата регистрации</Typography>
                                            <Typography variant="overline">{user.registered}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Последний вход</Typography>
                                            <Typography variant="overline">{user.lastLogin}</Typography>
                                        </Box>
                                    </CardContent>
                                </CardContent>
                                <CardActions className={useAdminContentStyle.classes.cardActions}>
                                    <Button onClick={() => handleClickDelete(user.id)} color="error" variant="contained" size="small" startIcon={<DeleteIcon />}>Удалить</Button>
                                    <Button variant="contained" size="small" startIcon={<EditIcon />}>Редактировать</Button>
                                </CardActions>
                            </Card>
                        )
                    })}
                </Box>
                <Box>
                    <Stack className={useAdminContentStyle.classes.pagination} spacing={2}>
                        <Pagination
                            count={Math.ceil(users.length / itemsPerPage)}
                            page={currentPage}
                            shape="rounded"
                            onChange={(event, page) => handleSetCurrentPage(page, event)}
                        />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}