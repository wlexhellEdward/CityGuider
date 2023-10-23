import '@testing-library/jest-dom';

import { fireEvent,render, screen } from '@testing-library/react';
import Autocomplete from 'components/Autocomplete';
import { Provider } from 'react-redux';
import { store } from 'store/store';

jest.mock('use-places-autocomplete', () => {
    return {
        ...jest.requireActual('use-places-autocomplete'),
        usePlacesAutocomplete: () => {
            return {
                ready: true,
                value: '',
                suggestions: { status: '', data: [] },
                setValue: () => { },
                init: () => { },
                clearSuggestions: () => { },
            };
        },
    };
});

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
