import { useState } from "react"
import { useTypeSelector } from "hooks/redux"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import adminContentStyle from "./styled"

const users = [
    { login: 'Person №1', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №2', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №3', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №4', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №5', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №6', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №7', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №8', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №9', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №10', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
    { login: 'Person №11', email: 'email@mail.ru', registrationDate: '30.10.2023', lastLogin: '30.10.2023', uniqueID: 'HTwoOPgoaegkNVGUb5cJqVj4jI13' },
]

export const AdminContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useAdminContentStyle = adminContentStyle({ Pallete: pallete });

    const handleSetCurrentPage = (page: number, event:React.ChangeEvent<unknown>) => {
        console.log(event)
        setCurrentPage(page)
    }
    const getItemsForPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return users.slice(startIndex, endIndex);
    };

    return (
        <Box className={useAdminContentStyle.classes.content}>
            <Box className={useAdminContentStyle.classes.userContent}>
                <Typography variant="h4" className={useAdminContentStyle.classes.title}>
                    Пользователи
                </Typography>
                <Box className={useAdminContentStyle.classes.cardsUsers}>
                    {getItemsForPage().map(item => {
                        return (
                            <Card className={useAdminContentStyle.classes.cardUser}>
                                <CardMedia className={useAdminContentStyle.classes.cardMedia}>
                                    <AssignmentIndIcon />
                                </CardMedia>
                                <CardContent className={useAdminContentStyle.classes.cardContent}>
                                    <CardContent>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Логин</Typography>
                                            <Typography variant="overline">{item.login}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Уникальный ID</Typography>
                                            <Typography variant="overline">{item.uniqueID}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Почта</Typography>
                                            <Typography variant="overline">{item.email}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Дата регистрации</Typography>
                                            <Typography variant="overline">{item.registrationDate}</Typography>
                                        </Box>
                                        <Box className={useAdminContentStyle.classes.cardContentLine}>
                                            <Typography variant="button" gutterBottom>Последний вход</Typography>
                                            <Typography variant="overline">{item.lastLogin}</Typography>
                                        </Box>
                                    </CardContent>
                                </CardContent>
                                <CardActions className={useAdminContentStyle.classes.cardActions}>
                                    <Button color="error" variant="contained" size="small" startIcon={<DeleteIcon />}>Delete</Button>
                                    <Button variant="contained" size="small" startIcon={<BookmarkIcon />}>Favorite</Button>
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
