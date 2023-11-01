import { Provider } from 'react-redux';

import { RouteInfo } from '@/components/routeInfo';
import { setTravelTime } from '@/store/reducers';
import { store } from '@/store/store';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'


describe('Тестирование RouteInfo', () => {
    beforeAll(() => {
        const dispatch = store.dispatch
        dispatch(setTravelTime("test-value"))
    })
    test('Проверка отображение RouteInfo на странице', () => {
        render(
            <Provider store={store}>
                <RouteInfo />
            </Provider>
        );
        const routeInfo = screen.getByTestId(/route-info/i);
        expect(routeInfo).toBeInTheDocument();
    });
    test('Проверка отображения корректных значений в RouteInfo при изменении state', () => {
        render(
            <Provider store={store}>
                <RouteInfo />
            </Provider>
        );
        const routeInfoText = screen.getByTestId(/route-remaing-time/i);
        expect(routeInfoText).toHaveTextContent("test-value");
    });
})
