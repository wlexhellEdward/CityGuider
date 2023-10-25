import { CircularProgress, Container } from '@mui/material'
import { useTypeSelector } from 'hooks/redux'

import LoaderStyle from './styled'

export const Loader = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    const useLoaderStyle = LoaderStyle({ Pallete: pallete })
    return (
        <>
            <Container className={useLoaderStyle.classes.loaderContainer}>
                <CircularProgress />
            </Container>
        </>
    )
}