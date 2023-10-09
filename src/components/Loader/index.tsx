import { Container, Typography } from '@mui/material'

import LoaderStyle from './styled'
import { LoaderProps } from './interfaceProps'



export const Loader = ({ text }: LoaderProps) => {
    const useLoaderStyle = LoaderStyle()
    return (
        <>
            <Container className={useLoaderStyle.classes.loaderContainer}>
                <Typography className={useLoaderStyle.classes.loaderText}>{text}</Typography>
            </Container>
        </>
    )
}