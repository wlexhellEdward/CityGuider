import { Typography, Container } from '@mui/material'

import WaiterStyle from './styled'
import { WaiterProps } from './interfaceProps'


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