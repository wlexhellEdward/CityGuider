import { Provider } from 'react-redux';

import ArrowBox from '@/components/arrowBox';
import { store } from '@/store/store';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'


describe('Тестирование ArrowBox', () => {
    test('Проверка отображение Arrow Box на странице', () => {
        render(
            <Provider store={store}>
                <ArrowBox />
            </Provider>
        );
        const arrowBox = screen.getByTestId(/drawer-arrow-show-more/i);
        expect(arrowBox).toBeInTheDocument();
    });
})
