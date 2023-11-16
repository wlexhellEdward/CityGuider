import ArrowBox from '@/components/ArrowBox';
import Aside from '@/components/Aside';
import CardFavorite from '@/components/CardFavorite/ToggleCardFavorite';
import { renderWithAllProviders } from '@/utils/helpers/renderWithProvider';
import { LatLng } from "@googlemaps/jest-mocks"
import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});
jest.mock('@/hooks/useRoute', () => {
    return {
        useRoute: jest.fn()
    }
})

describe('Тестирование CardFavorite', () => {

    test('Проверка отображение CardFavorite на странице при закрытом drawer contnet', () => {
        renderWithAllProviders(
            <ArrowBox />
        );
        const cardFavorite = screen.queryByTestId(/card-normal-size/i);
        expect(cardFavorite).toBeNull();
    });
    test('Проверка отображение CardFavorite на странице при открытом drawer contnet, но пустом избранном', () => {
        renderWithAllProviders(
            <>
                <Aside />
                <ArrowBox />
            </>
        );
        const btnShomMore = screen.getAllByTestId(/drawer-arrow-show-more/i);
        fireEvent.click(btnShomMore[1]);
        const cardFavorite = screen.queryByTestId(/card-normal-size/i);
        expect(cardFavorite).toBe(null);
    });
    test('Проверка отображение CardFavorite c замоканными данными', () => {
        const mockPlace = { id: "1", type: ['fake'], img: '', coordinates: new LatLng(1, 2), title: '', description: '' }

        renderWithAllProviders(
            <CardFavorite favoriteItem={mockPlace} />
        );
        const cardFavorite = screen.getByTestId(/card-normal-size/i)
        expect(cardFavorite).toBeInTheDocument()
    });
    // test('Проверка на раскрытие CardFavorite c замоканными данными', async () => {
    //     const mockPlace = { id: "1", type: ['fake'], img: '', coordinates: new LatLng(1, 2), title: '', description: '' }

    //     renderWithAllProviders(
    //         <CardFavorite favoriteItem={mockPlace} />
    //     );
    //     const buttonShowMore = screen.getByTestId(/card-favorite-button-show-more/i)
    //     fireEvent.click(buttonShowMore)

    //     await waitFor(() => {
    //         const cardFavorite = screen.queryByTestId(/card-normal-size/i)
    //         expect(cardFavorite).toBe(null)
    //         const cardFavoriteMaxSize = screen.getByTestId(/card-max-size/i)
    //         expect(cardFavoriteMaxSize).toBeInTheDocument()
    //     })
    // });
    // test('Проверка на построение маршрута', async () => {
    //     const mockPlace = { id: " 1", type: ['fake'], img: '', coordinates: new LatLng(1, 2), title: '', description: '' }

    //     renderWithAllProviders(
    //         <CardFavorite favoriteItem={mockPlace} />
    //     );
    //     const state = store.getState()
    //     const buttonShowMore = screen.getByTestId(/card-favorite-button-show-more/i)
    //     fireEvent.click(buttonShowMore)

    //     const buttonMakeRoute = screen.getByTestId(/make-route/i)
    //     fireEvent.click(buttonMakeRoute)

    //     await waitFor(() => {
    //         expect(state.map.travelInfo).not.toEqual({})
    //     })

    // });
})
