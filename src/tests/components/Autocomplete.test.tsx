import '@testing-library/jest-dom';

import { fireEvent,render, screen } from '@testing-library/react';
import Autocomplete from 'components/autocomplete';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('Тестирование Autocomplete', () => {
    test('Проверка на отображение корректного текста при вводе в autocomplete', () => {
        render(
            <Provider store={store}>
                <Autocomplete />
            </Provider>
        );

        const input = screen.getByPlaceholderText(/Место, адрес.../i);

        fireEvent.change(input, { target: { value: 'АBC' } });

        const inputNew = screen.getByPlaceholderText(/Место, адрес.../i);
        expect(inputNew).toHaveValue('АBC');
    });
});
