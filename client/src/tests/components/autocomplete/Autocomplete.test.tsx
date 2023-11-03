import Autocomplete from '@/components/autocomplete';
import { renderWithAllProviders } from '@/utils/renderWithProvider';
import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирование Autocomplete', () => {
    test('Проверка на отображение корректного текста при вводе в autocomplete', () => {
        renderWithAllProviders(
            <Autocomplete />
        );
        const input = screen.getByPlaceholderText(/Место, адрес.../i);

        fireEvent.change(input, { target: { value: 'АBC' } });

        const inputNew = screen.getByPlaceholderText(/Место, адрес.../i);
        expect(inputNew).toHaveValue('АBC');
    });
});
