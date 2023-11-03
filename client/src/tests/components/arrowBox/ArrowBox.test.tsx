import ArrowBox from '@/components/arrowBox';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom'
import { renderWithAllProviders } from '../../../utils/renderWithProvider';

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирование ArrowBox', () => {
    test('Проверка отображение Arrow Box на странице', () => {
        renderWithAllProviders(
            <ArrowBox />
        );
        const arrowBox = screen.getByTestId(/drawer-arrow-show-more/i);
        expect(arrowBox).toBeInTheDocument();
    });
})
