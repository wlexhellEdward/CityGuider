import { Container,Typography } from '@mui/material'

import { WaiterProps } from './interfaces'
import WaiterStyle from './styled'

export const Waiter = ({ text }: WaiterProps) => {
    const useWaiterStyle = WaiterStyle()
    return (
        <>

            <Container className={useWaiterStyle.classes.loaderContainer}>
                <Typography className={useWaiterStyle.classes.loaderText}>{text}</Typography>
            </Container>
        </>
    )
}