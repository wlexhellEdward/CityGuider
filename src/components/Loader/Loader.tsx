import { Container, Box, Typography } from '@mui/material'
import LoaderStyle from './LoaderStyle'

interface LoaderProps {
    text: string
}

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