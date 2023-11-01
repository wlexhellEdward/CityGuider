import { getMessageError } from "utils/errorFinder";

describe('Проверка метода erorFinder', () => {
    test('Проверка на наличие ответа при корректном запросе', () => {
        const errorTest = new Error('Firebase: Error (auth/invalid-login-credentials).')
        expect(getMessageError(errorTest)).toBe('Ошибка: Неверный email или пароль')
    });
    test('Проверка на наличие ответа при пустом запросе', () => {
        const errorTest = new Error('')
        expect(getMessageError(errorTest)).toBe('Неизвестная ошибка')
    });
    test('Проверка на наличие ответа при невалидном запросе', () => {
        const errorTest = new Error('not error')
        expect(getMessageError(errorTest)).toBe('Неизвестная ошибка')
    });
});
