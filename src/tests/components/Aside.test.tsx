import { LatLng } from '@googlemaps/jest-mocks';
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react';
import Aside from 'components/aside';
import { Provider } from 'react-redux';
import { setFavoriteItems } from 'store/reducers';
import { store } from 'store/store';

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирование Aside', () => {
    beforeEach(() => {
        const favoriteItem = {
            id: "test",
            type: ['test', 'test'],
            img: 'test',
            coordinates: new LatLng(1, 2),
            title: 'test',
            description: 'test',
        }
        store.dispatch(setFavoriteItems([favoriteItem]))
    })
    test('Проверка отображение Aside на странице', () => {
        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        );
        const aside = screen.getByTestId(/aside/i);
        expect(aside).toBeInTheDocument();
    });
    test('Проверка отображения панели контента при клике на любую кнопку', () => {
        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        );

        const btnSearch = screen.getByTestId(/button-search/i);
        fireEvent.click(btnSearch)
        const drawerContent = screen.getByPlaceholderText(/Место, адрес.../i);
        expect(drawerContent).toBeInTheDocument();
    });
    test('Проверка отображения панели Избранного при клике на кнопку Избанные', () => {
        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        );

        const btnSearch = screen.getByTestId(/button-favorite/i);
        fireEvent.click(btnSearch)
        const drawerContentFavoritePlate = screen.getByTestId(/plate-favorite/i);
        expect(drawerContentFavoritePlate).toBeInTheDocument();
    });
    test('Проверка скрытие панели контента при клике на кнопку', () => {
        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        );

        const btnFavorite = screen.getByTestId(/button-favorite/i);
        fireEvent.click(btnFavorite);

        const btnClose = screen.getByTestId(/button-close/i);
        fireEvent.click(btnClose);

        const drawerContentFavoritePlate = screen.queryByTestId(/plate-favorite/i);
        expect(drawerContentFavoritePlate).toBeNull();
    });
    test('Проверка на смену контента drawer при клике на разные кнопки', () => {
        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        );

        const btnSearch = screen.getByTestId(/button-search/i);
        fireEvent.click(btnSearch)

        const btnFavorite = screen.getByTestId(/button-favorite/i);
        fireEvent.click(btnFavorite);

        const drawerContentFavoritePlate = screen.getByTestId(/plate-favorite/);
        expect(drawerContentFavoritePlate).toBeInTheDocument();
    });
    test('Проверка на наличие кнопки развернуть при закрытии drawer content', () => {
        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        );
        const btnClose = screen.getByTestId(/button-close/i);
        fireEvent.click(btnClose);

        const btnShowMore = screen.getByTestId(/drawer-arrow-show-more/i);
        expect(btnShowMore).toBeInTheDocument();
    });
    test('Проверка на скрытие кнопки развернуть при открытии drawer', () => {
        render(
            <Provider store={store}>
                <Aside />
            </Provider>
        );
        const btnSearch = screen.getByTestId(/button-favorite/i);
        fireEvent.click(btnSearch);

        const btnShowMore = screen.queryByTestId(/drawer-arrow-show-more/i);
        expect(btnShowMore).toBeNull();
    });
})
