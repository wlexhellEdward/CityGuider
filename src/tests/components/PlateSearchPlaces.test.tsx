import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PlateSearchPlaces } from 'components/PlateSearchPlaces';
import { Provider } from 'react-redux';
import { store } from 'store/store';


describe('Тестирование PlateSearchPlaces', () => {
    test('Проверка отображение PlateSearchPlaces на странице', () => {
        render(
            <Provider store={store}>
                <PlateSearchPlaces />
            </Provider>
        );
        const cardFavorite = screen.getByTestId(/plate-search/i);
        expect(cardFavorite).toBeInTheDocument();
    });
    test('Проверка добавления типа места для поиска в state', () => {
        render(
            <Provider store={store}>
                <PlateSearchPlaces />
            </Provider>
        );
        const btnPlace = screen.getAllByTestId(/place-for-type-search/i)[0];
        fireEvent.click(btnPlace)
        const state = store.getState()
        expect(state.searchSlice.selectedItems).toContain('architecture');

    });
    test('Проверка удаления типа места для поиска в state', async () => {
        render(
            <Provider store={store}>
                <PlateSearchPlaces />
            </Provider>
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
        render(
            <Provider store={store}>
                <PlateSearchPlaces />
            </Provider>
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
        render(
            <Provider store={store}>
                <PlateSearchPlaces />
            </Provider>
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

    // test('Проверка наличия результата при поиске одного типа', async () => {
    //     render(
    //         <Provider store={store}>
    //             <PlateSearchPlaces />
    //         </Provider>
    //     );
    //     const btnPlace = screen.getAllByTestId(/place-for-type-search/i);
    //     await waitFor(() => {
    //         fireEvent.click(btnPlace[0])
    //     })
    //     const btnSearch = screen.getAllByTestId(/button-search/i)
    //     await waitFor(() => {
    //         fireEvent.click(btnSearch[0])
    //     })
    //     const state = store.getState()
    //     expect(state.searchSlice.resultsSearch).not.toEqual([]);
    // });
})
