import { useState } from "react"
import { Box, Typography } from "@mui/material"

export const AdminContent = () => {
    const [currentItem, setCurrentItem] = useState('users')

    return (
        <>
        {currentItem == 'user' ?
            <Box>
                <Typography>
                    Пользователи
                </Typography>
            </Box>
            :
            <Box>
                <Typography>
                    Информация о сайте
                </Typography>
            </Box>
        }
        </>

    )
}