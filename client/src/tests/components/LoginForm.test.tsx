import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { LoginForm } from '@/components/loginForm';
import { store } from '@/store/store';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';
import { initializeApp } from 'firebase/app';

jest.mock('firebase/auth', () => {
    return {
        getAuth: jest.fn(() => ({
            signInWithEmailAndPassword: jest.fn((email, password) => {
                if (email === 'test@example.com' && password === 'validPassword') {
                    return Promise.resolve({ user: { email, uid: '123' } });
                } else {
                    return Promise.reject(new Error('Invalid credentials'));
                }
            }),
            signOut: jest.fn(() => Promise.resolve()),
        })),
    };
});
jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});


describe('Тестирования формы авторизации', () => {
    beforeAll(() => {
        const firebaseConfig = {
            apiKey: "mock",
        };
        initializeApp(firebaseConfig);
    });
    test('Проверка на корректный ввод значений в поля формы', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginForm />
                </BrowserRouter>
            </Provider>
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
})
