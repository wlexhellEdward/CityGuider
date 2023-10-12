import { CircularProgress, Container } from '@mui/material'

import LoaderStyle from './styled'



export const Loader = () => {
    const useLoaderStyle = LoaderStyle()
    return (
        <>

            <Container className={useLoaderStyle.classes.loaderContainer}>
                <CircularProgress />
            </Container>
        </>
    )
}