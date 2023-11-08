export const getMessageError = (error: Error) => {
    let errorMessage = '';
    switch (error.message) {
        case 'Firebase: Error (auth/invalid-login-credentials).':
            errorMessage = 'Ошибка: Неверный email или пароль';
            break;
        case 'Firebase: Error (auth/invalid-email).':
            errorMessage = 'Email должен быть формата example@mail.ru'
            break;
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
            errorMessage = 'Длина пароля должна быть больше 6 символов'
            break;
        case 'Firebase: Error (auth/email-already-in-use).':
            errorMessage = 'Данный email уже занят, попробуйте другой'
            break;
        default:
            errorMessage = `Неизвестная ошибка`;
            break;
    }
    return errorMessage
}

