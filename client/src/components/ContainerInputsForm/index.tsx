import InfoIcon from '@mui/icons-material/Info';
import { Box, LinearProgress, TextField, Tooltip } from '@mui/material';

import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setFormValidity, setFormValues } from '@/store/reducers';
import { passwordToStrength } from '@/utils/converts/convert';
import { getPasswordErrors } from '@/utils/errors/errorFinder';

import containerInputsForm from './styled';


export const ContainerInputsForm = () => {
    const pallete = useTypeSelector(state => state.appSlice.Pallete);
    const dispatch = useAppDispatch();
    const formValidity = useTypeSelector(state => state.registerSlice.formValidity);
    const formValues = useTypeSelector(state => state.registerSlice.formValues);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        dispatch(setFormValues({ ...formValues, email }));
        dispatch(setFormValidity({ ...formValidity, email: /\S+@\S+\.\S+/.test(email) }));
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        const strength = passwordToStrength(password);
        const error = getPasswordErrors(password)
        dispatch(setFormValues({ ...formValues, password }));
        dispatch(setFormValidity({
            ...formValidity,
            strength,
            error,
            colorsOfProgres: strength < 35 ? 'crimson' : strength < 70 ? 'orange' : 'green',
        }));
    };
    const handleConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const confirm = event.target.value;
        dispatch(setFormValues({ ...formValues, confirm }));
        dispatch(setFormValidity({ ...formValidity, confirm: confirm === formValues.password }));
    };

    const useRegisterFormStyle = containerInputsForm({ Pallete: pallete });

    return (
        <Box className={useRegisterFormStyle.classes.containerInputsForm} >
            <TextField
                required
                fullWidth
                className={useRegisterFormStyle.classes.inputRegister}
                id="email"
                label="Email адресс"
                data-testid="input"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
                error={!formValidity.email}
                helperText={!formValidity.email ? 'Некорректный email' : ''}
            />
            <Box className={useRegisterFormStyle.classes.passwordInput}>
                <TextField
                    required
                    fullWidth
                    className={useRegisterFormStyle.classes.inputRegister}
                    name="password"
                    label="Пароль"
                    type="password"
                    data-testid="input"
                    id="password"
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                />
                <Tooltip title={formValidity.error} >
                    <InfoIcon />
                </Tooltip>
            </Box>
            <LinearProgress variant='determinate' value={formValidity.strength} sx={{ '&>*': { backgroundColor: formValidity.colorsOfProgres } }} />
            <TextField
                required
                fullWidth
                className={useRegisterFormStyle.classes.inputRegister}
                name="confirm"
                label="Подтвердите пароль"
                type="password"
                data-testid="input"
                id="confirm"
                autoComplete="confirm-password"
                onChange={handleConfirmChange}
                error={!formValidity.confirm}
                helperText={!formValidity.confirm ? 'Пароли не совпадают' : ''}
            />
        </Box>
    );
};