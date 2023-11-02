import { Provider } from 'react-redux';

import ArrowBox from '@/components/arrowBox';
import Aside from '@/components/aside';
import CardFavorite from '@/components/CardFavorite/toggleCardFavorite';
import { store } from '@/store/store';
import { LatLng } from "@googlemaps/jest-mocks"
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom'

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирование CardFavorite', () => {

    test('Проверка отображение CardFavorite на странице при закрытом drawer contnet', () => {
        render(
            <Provider store={store}>
                <ArrowBox />
            </Provider>
        );
        const cardFavorite = screen.queryByTestId(/card-normal-size/i);
        expect(cardFavorite).toBeNull();
    });
    test('Проверка отображение CardFavorite на странице при открытом drawer contnet, но пустом избранном', () => {
        render(
            <Provider store={store}>
                <Aside />
                <ArrowBox />
            </Provider>
        );
        const btnShomMore = screen.getAllByTestId(/drawer-arrow-show-more/i);
        fireEvent.click(btnShomMore[1]);
        const cardFavorite = screen.queryByTestId(/card-normal-size/i);
        expect(cardFavorite).toBe(null);
    });
    test('Проверка отображение CardFavorite c замоканными данными', () => {
        const mockPlace = { id: "1", type: ['fake'], img: '', coordinates: new LatLng(1, 2), title: '', description: '' }

        render(
            <Provider store={store}>
                <CardFavorite favoriteItem={mockPlace} />
            </Provider>
        );
        const cardFavorite = screen.getByTestId(/card-normal-size/i)
        expect(cardFavorite).toBeInTheDocument()
    });
    test('Проверка на раскрытие CardFavorite c замоканными данными', async () => {
        const mockPlace = { id: "1", type: ['fake'], img: '', coordinates: new LatLng(1, 2), title: '', description: '' }

        render(
            <Provider store={store}>
                <CardFavorite favoriteItem={mockPlace} />
            </Provider>
        );
        const buttonShowMore = screen.getByTestId(/card-favorite-button-show-more/i)
        fireEvent.click(buttonShowMore)

        await waitFor(() => {
            const cardFavorite = screen.queryByTestId(/card-normal-size/i)
            expect(cardFavorite).toBe(null)
            const cardFavoriteMaxSize = screen.getByTestId(/card-max-size/i)
            expect(cardFavoriteMaxSize).toBeInTheDocument()
        })
    });
    // test('Проверка на удаление из избранного', async () => {
    //     const mockPlace = { id: "1", type: ['fake'], img: '', coordinates: new LatLng(1, 2), title: '', description: '' }
    //     render(
    //         <Provider store={store}>
    //             <CardFavorite favoriteItem={mockPlace} />
    //         </Provider>
    //     );
    //     const state = store.getState()
    //     const dispatch = store.dispatch
    //     dispatch(setFavoriteItems(mockPlace))

    //     const buttonDeleteFromFavorite = screen.getByTestId(/delete-from-favorite/i)
    //     fireEvent.click(buttonDeleteFromFavorite)

    //     await waitFor(() => {
    //         expect(state.favoriteItems.favoriteItems).toEqual([])
    //     })
    // });
    test('Проверка на построение маршрута', async () => {
        const mockPlace = { id:" 1", type: ['fake'], img: '', coordinates: new LatLng(1, 2), title: '', description: '' }

        render(
            <Provider store={store}>
                <CardFavorite favoriteItem={mockPlace} />
            </Provider>
        );
        const state = store.getState()
        const buttonShowMore = screen.getByTestId(/card-favorite-button-show-more/i)
        fireEvent.click(buttonShowMore)

        const buttonMakeRoute = screen.getByTestId(/make-route/i)
        fireEvent.click(buttonMakeRoute)

        await waitFor(() => {
            expect(state.map.travelInfo).not.toEqual({})
        })

    });
})
