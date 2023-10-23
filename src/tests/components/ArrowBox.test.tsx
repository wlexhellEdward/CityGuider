import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import ArrowBox from 'components/ArrowBox';
import { Provider } from 'react-redux';
import { store } from 'store/store';


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
