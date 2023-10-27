import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LoginForm } from 'components/LoginForm';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';

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
    // test('Проверка на вход с невалидными данными', async () => {
    //     render(
    //         <Provider store={store}>
    //             <BrowserRouter>
    //                 <LoginForm />
    //             </BrowserRouter>
    //         </Provider>
    //     );
    //     const emailInput = screen.getByPlaceholderText('Email адресс');
    //     const passwordInput = screen.getByPlaceholderText('Пароль');
    //     fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    //     fireEvent.change(passwordInput, { target: { value: 'invalid-password' } });
    //     const buttonSubmit = screen.getByTestId(/btn-submit/i);
    //     fireEvent.click(buttonSubmit);

    //     await waitFor(() => {
    //         expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    //     });
    // });
})
