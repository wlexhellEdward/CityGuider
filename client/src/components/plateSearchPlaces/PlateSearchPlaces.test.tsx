
import { PlateSearchPlaces } from '@/components/PlateSearchPlaces';
import { store } from '@/store/store';
import { renderWithAllProviders } from '@/utils/renderWithProvider';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom'

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирование PlateSearchPlaces', () => {
    test('Проверка отображение PlateSearchPlaces на странице', () => {
        renderWithAllProviders(
            <PlateSearchPlaces />
        );
        const cardFavorite = screen.getByTestId(/plate-search/i);
        expect(cardFavorite).toBeInTheDocument();
    });
    test('Проверка добавления типа места для поиска в state', () => {
        renderWithAllProviders(
            <PlateSearchPlaces />
        );
        const btnPlace = screen.getAllByTestId(/place-for-type-search/i)[0];
        fireEvent.click(btnPlace)
        const state = store.getState()
        expect(state.searchSlice.selectedItems).toContain('architecture');

    });
    test('Проверка удаления типа места для поиска в state', async () => {
        renderWithAllProviders(
            <PlateSearchPlaces />
        );
        const btnPlace = screen.getAllByTestId(/place-for-type-search/i)[0];
        fireEvent.click(btnPlace)

        await setTimeout(() => {
            fireEvent.click(btnPlace)
        }, 1000)
        await waitFor(() => {
            const state = store.getState()
            expect(state.searchSlice.selectedItems).not.toContain('architecture');
        })
    });
    test('Проверка добавления нескольких типов места для поиска в state', async () => {
        renderWithAllProviders(
            <PlateSearchPlaces />
        );
        const btnPlace = screen.getAllByTestId(/place-for-type-search/i);
        await waitFor(() => {
            for (let i = 0; i < 3; i++) {
                fireEvent.click(btnPlace[i])
            }
        })
        const state = store.getState()
        expect(state.searchSlice.selectedItems).toEqual(['architecture', 'atm', 'tourist-attraction']);
    });
    test('Проверка удаления нескольких типов места для поиска в state', async () => {
        renderWithAllProviders(
            <PlateSearchPlaces />
        );
        const btnPlace = screen.getAllByTestId(/place-for-type-search/i);
        await waitFor(() => {
            for (let i = 0; i < 3; i++) {
                fireEvent.click(btnPlace[i])
            }
        })
        const state = store.getState()
        expect(state.searchSlice.selectedItems).toEqual([]);
    });
})
