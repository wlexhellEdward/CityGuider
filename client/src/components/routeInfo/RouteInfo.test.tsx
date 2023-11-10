import { RouteInfo } from '@/components/RouteInfo';
import { setTravelTime } from '@/store/reducers';
import { store } from '@/store/store';
import { renderWithAllProviders } from '@/utils/helpers/renderWithProvider';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom'

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирование RouteInfo', () => {
    beforeAll(() => {
        const dispatch = store.dispatch
        dispatch(setTravelTime("test-value"))
    })
    test('Проверка отображение RouteInfo на странице', () => {
        renderWithAllProviders(
            <RouteInfo />
        );
        const routeInfo = screen.getByTestId(/route-info/i);
        expect(routeInfo).toBeInTheDocument();
    });
    test('Проверка отображения корректных значений в RouteInfo при изменении state', () => {
        renderWithAllProviders(
            <RouteInfo />
        );
        const routeInfoText = screen.getByTestId(/route-remaing-time/i);
        expect(routeInfoText).toHaveTextContent("test-value");
    });
})
