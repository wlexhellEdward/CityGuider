import { BrowserRouter } from 'react-router-dom';

import { RegisterForm } from '@/components/registerForm';
import { renderWithAllProviders } from '@/utils/renderWithProvider';
import { initializeApp } from '@firebase/app';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирования формы регистрации', () => {
    beforeAll(() => {
        const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_FIREBASE_APP_ID
        };
        initializeApp(firebaseConfig);
    })
    test('Проверка на корректный ввод значений в поля формы', async () => {
        renderWithAllProviders(
            <BrowserRouter>
                <RegisterForm />
            </BrowserRouter>
        );
        const inputs = screen.getAllByTestId(/input/);
        await waitFor(() => {
            inputs.forEach((input) => {
                const inputElement = input.querySelector('input');
                if (inputElement) {
                    fireEvent.focus(inputElement);
                    fireEvent.change(inputElement, { target: { value: 'АBC' } });
                    fireEvent.blur(inputElement);
                }
            });
        });
        const inputsNew = screen.getAllByTestId(/input/);
        inputsNew.forEach((input) => {
            const inputElement = input.querySelector('input');
            if (inputElement) {
                expect(inputElement).toHaveValue('АBC');
            }
        });
    });
    test('Тестирование регистрации пользователя с валидными данными', async () => {

        renderWithAllProviders(
            <BrowserRouter>
                <RegisterForm />
            </BrowserRouter>
        );
        const inputEmail = screen.getByLabelText(/Email адресс/);
        const inputElements = [
            inputEmail.querySelector('input'),
        ];
        const inputData = ['test-first-name']

        await waitFor(() => {
            inputElements.forEach((inputElement, index) => {
                if (inputElement) {
                    fireEvent.focus(inputElement);
                    fireEvent.change(inputElement, { target: { value: inputData[index] } });
                    fireEvent.blur(inputElement);
                }
            });
        });
    });
})
