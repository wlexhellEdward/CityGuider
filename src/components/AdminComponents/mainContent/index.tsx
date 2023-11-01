import { useEffect, useState } from "react"
import { useAppDispatch, useTypeSelector } from "hooks/redux"
import { Box, CircularProgress } from '@mui/material';
import { getListAllUsers } from "utils/firebaseService";
import { setAllUsers } from "store/reducers/adminSlice/adminSlice";
import { CardUser } from "components/adminComponents/cardUser";
import { ModalToEdit } from "components/adminComponents/modalToEdit";

import { IUser } from "interfaces/IUser";
import adminContentStyle from "./styled"
import { PaginationBar } from "components/pagination";


export const AdminContent = () => {
    const [editUser, setEditUser] = useState<IUser>();
    const dispatch = useAppDispatch()
    const users = useTypeSelector(state => state.adminSlice.users)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useAdminContentStyle = adminContentStyle({ Pallete: pallete });
    const itemsPerPage = 6
    const [currentPage, setCurrentPage] = useState(1);

    const handleSetCurrentPage = (page: number) => {
        setCurrentPage(page)
    }
    useEffect(() => {
        getListAllUsers().then(response => {
            dispatch(setAllUsers(response))
        })
    }, [])
    const handleSetUserToEdit = (user: IUser) => {
        setEditUser(user)
    }
    const handleCloseModal = () => {
        setEditUser(undefined)
    }

    const getItemsForPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return users.slice(startIndex, endIndex);
    };
    return (
        <>
            {users.length ?
                <Box className={useAdminContentStyle.classes.content}>
                    <Box className={useAdminContentStyle.classes.userContent}>
                        <Box className={useAdminContentStyle.classes.cardsUsers}>
                            {getItemsForPage().map(user => {
                                return (
                                    <CardUser user={user} onClickEditUser={handleSetUserToEdit} />
                                )
                            })}
                        </Box>
                        <PaginationBar itemsPerPage={itemsPerPage} currentPage={currentPage} handleSetCurrentPage={handleSetCurrentPage} />
                        {editUser ?
                            <ModalToEdit user={editUser} onClose={handleCloseModal} />
                            :
                            null
                        }
                    </Box>
                </Box>
                :
                <CircularProgress className={useAdminContentStyle.classes.loader} />
            }
        </>
    )
}