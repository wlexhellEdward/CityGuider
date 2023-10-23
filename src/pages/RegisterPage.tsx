import { Box, CssBaseline, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm'

import RegisterPageStyle from './styled';


export const RegisterPage = () => {
    const useRegisterPageStyle = RegisterPageStyle()
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