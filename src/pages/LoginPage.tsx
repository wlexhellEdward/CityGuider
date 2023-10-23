import { Box, CssBaseline, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { LoginForm } from 'components/LoginForm';

import LoginPageStyle from './styled';

export const LoginPage = () => {
    const useLoginPageStyle = LoginPageStyle()
    return (
        <Container className={useLoginPageStyle.classes.containerPageForm} maxWidth="xs">
            <Box className={useLoginPageStyle.classes.containerText}>
                <Typography className={useLoginPageStyle.classes.title}>Добро пожаловать в CITY GUIDER</Typography>
                <Typography className={useLoginPageStyle.classes.description}>Мы забыли вас...Авторизуйтесь для корректной работы приложения</Typography>
            </Box>
            <CssBaseline />
            <LoginForm />
        </Container>
    )
}