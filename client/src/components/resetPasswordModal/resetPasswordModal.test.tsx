import { BrowserRouter } from 'react-router-dom';

import { renderWithAllProviders } from '@/utils/helpers/renderWithProvider';
import { initializeApp } from '@firebase/app';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ResetPasswordModal } from '@/components/ResetPasswordModal';

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});
jest.mock('firebase/auth', () => {
    return {
        getAuth: jest.fn()
    }
})

describe('Тестирования формы восстановления пароля', () => {
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
    test('Проверка отображения модального окна', async () => {
        renderWithAllProviders(
            <BrowserRouter>
                <ResetPasswordModal open={true} handleClose={() => { }} />
            </BrowserRouter>
        );
        const input = screen.getByTestId(/input/);
        expect(input).toBeInTheDocument()
    });
    test('Проверка скрытия модального окна', async () => {
        renderWithAllProviders(
            <BrowserRouter>
                <ResetPasswordModal open={false} handleClose={() => { }} />
            </BrowserRouter>
        );
        const input = screen.queryByTestId(/input/);
        expect(input).not.toBeInTheDocument()
    });
    test('Проверка корректного отображения вводимы данных формы', async () => {
        renderWithAllProviders(
            <BrowserRouter>
                <ResetPasswordModal open={true} handleClose={() => { }} />
            </BrowserRouter>
        );
        const input = screen.queryByTestId(/input/);
        await waitFor(() => {
            if (input) {
                const inputElement = input.querySelector('input');
                if (inputElement) {
                    fireEvent.focus(inputElement);
                    fireEvent.change(inputElement, { target: { value: 'АBC' } });
                    fireEvent.blur(inputElement);
                }
            }
        });
        if (input) {
            const inputElement = input.querySelector('input');
            expect(inputElement).toHaveValue('АBC');
        }
    });
    test('Проверка валидации формы с некорректным значением', async () => {
        renderWithAllProviders(
            <BrowserRouter>
                <ResetPasswordModal open={true} handleClose={() => { }} />
            </BrowserRouter>
        );
        const input = screen.queryByTestId('input'); 
        await waitFor(() => {
            if (input) {
                const inputElement = input.querySelector('input');
                if (inputElement) {
                    fireEvent.focus(inputElement);
                    fireEvent.change(inputElement, { target: { value: 'АBC' } });
                    fireEvent.blur(inputElement);
                }
            }
        });
        const btnSubmit = screen.queryByTestId('btn-submit');
        await waitFor(() => {
            if (btnSubmit) {
                fireEvent.click(btnSubmit);
            }
        });
        await waitFor(() => {
            const errorText = screen.getByText("Некорректный email");
            expect(errorText).toBeInTheDocument();
        });
    });
});
