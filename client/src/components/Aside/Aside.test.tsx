import Aside from '@/components/Aside';
import { setFavoriteItems } from '@/store/reducers';
import { store } from '@/store/store';
import { renderWithAllProviders } from '@/utils/helpers/renderWithProvider';
import { LatLng } from '@googlemaps/jest-mocks';
import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

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
        renderWithAllProviders(
            <Aside />
        );
        const aside = screen.getByTestId(/aside/i);
        expect(aside).toBeInTheDocument();
    });
    test('Проверка отображения панели контента при клике на любую кнопку', () => {
        renderWithAllProviders(
            <Aside />
        );

        const btnSearch = screen.getAllByTestId(/button-search/i)[0];
        fireEvent.click(btnSearch)
        const drawerContent = screen.getByPlaceholderText(/Место, адрес.../i);
        expect(drawerContent).toBeInTheDocument();
    });
    test('Проверка отображения панели Избранного при клике на кнопку Избанные', () => {
        renderWithAllProviders(
            <Aside />
        );

        const btnSearch = screen.getByTestId(/button-favorite/i);
        fireEvent.click(btnSearch)
        const drawerContentFavoritePlate = screen.getByTestId(/plate-favorite/i);
        expect(drawerContentFavoritePlate).toBeInTheDocument();
    });
    test('Проверка скрытие панели контента при клике на кнопку', () => {
        renderWithAllProviders(
            <Aside />
        );

        const btnFavorite = screen.getByTestId(/button-favorite/i);
        fireEvent.click(btnFavorite);

        const btnClose = screen.getByTestId(/button-close/i);
        fireEvent.click(btnClose);

        const drawerContentFavoritePlate = screen.queryByTestId(/plate-favorite/i);
        expect(drawerContentFavoritePlate).toBeNull();
    });
    test('Проверка на смену контента drawer при клике на разные кнопки', () => {
        renderWithAllProviders(
            <Aside />
        );

        const btnSearch = screen.getAllByTestId(/button-search/i)[0];
        fireEvent.click(btnSearch)

        const btnFavorite = screen.getAllByTestId(/button-favorite/i)[0];
        fireEvent.click(btnFavorite);

        const drawerContentFavoritePlate = screen.getByTestId(/plate-favorite/);
        expect(drawerContentFavoritePlate).toBeInTheDocument();
    });
    test('Проверка на наличие кнопки развернуть при закрытии drawer content', () => {
        renderWithAllProviders(
            <Aside />
        );

        const btnClose = screen.getAllByTestId(/button-close/i)[0];
        fireEvent.click(btnClose);

        const btnShowMore = screen.getAllByTestId(/drawer-arrow-show-more/i)[0];
        expect(btnShowMore).toBeInTheDocument();
    });
    test('Проверка на скрытие кнопки развернуть при открытии drawer', () => {
        renderWithAllProviders(
            <Aside />
        );
        const btnSearch = screen.getByTestId(/button-favorite/i);
        fireEvent.click(btnSearch);

        const btnShowMore = screen.queryByTestId(/drawer-arrow-show-more/i);
        expect(btnShowMore).toBeNull();
    });
})
