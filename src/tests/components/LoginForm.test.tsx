import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LoginForm } from 'components/LoginForm';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('Тестирования формы авторизации', () => {
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
