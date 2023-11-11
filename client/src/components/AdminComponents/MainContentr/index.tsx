import { useEffect, useState } from "react"

import { Box, CircularProgress } from '@mui/material';

import { CardUser } from "@/components/AdminComponents/CardUser";
import { ModalToEdit } from "@/components/AdminComponents/ModalToEdit";
import { PaginationBar } from "@/components/Pagination";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux"
import { IUser } from "@/interfaces/IUser";
import { setAllUsers } from "@/store/reducers/adminSlice/adminSlice";
import { getListAllUsers } from "@/utils/services/firebaseService";

import userContentStyle from "./styled"


export const MainContent = () => {
    const [editUser, setEditUser] = useState<IUser>();
    const dispatch = useAppDispatch()
    const users = useTypeSelector(state => state.adminSlice.users)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
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

    const useUserContentStyle = userContentStyle({ Pallete: pallete });
    return (
        <>
            {users.length ?
                <Box className={useUserContentStyle.classes.content}>
                    <Box className={useUserContentStyle.classes.userContent}>
                        <Box className={useUserContentStyle.classes.cardsUsers}>
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
                <CircularProgress className={useUserContentStyle.classes.loader} />
            }
        </>
    )
}