import { Box, CssBaseline, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm'
import { useTypeSelector } from 'hooks/redux';

import RegisterPageStyle from './styled';


export const RegisterPage = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const useRegisterPageStyle = RegisterPageStyle({Pallete:pallete})

    return (
        <Container className={useRegisterPageStyle.classes.containerPageForm} maxWidth="xs">
            <Box className={useRegisterPageStyle.classes.containerText}>
                <Typography className={useRegisterPageStyle.classes.title}>Добро пожаловать в CITY GUIDER</Typography>
                <Typography className={useRegisterPageStyle.classes.description}>перед началом использования вам стоит зарегистрироваться</Typography>
            </Box>

            <CssBaseline />
            <RegisterForm />
        </Container>
    );
}