import '@testing-library/jest-dom'
import { render, waitFor, screen } from '@testing-library/react';
import SideBar from 'components/Drawer';
import { Provider } from 'react-redux';
import { setCurrentStatus } from 'store/reducers';
import { store } from 'store/store';


describe('Тестирование Drawer', () => {
    test('Проверка drawer на смену статуса выбранного раздела', async () => {
        render(
            <Provider store={store}>
                <SideBar currentStatus='search' />
            </Provider>
        );
        const dispatch = store.dispatch
        dispatch(setCurrentStatus('close'))
        await waitFor(() => {
            const plateFavorites = screen.queryByTestId(/plate-search/i)
            const plateSearch = screen.queryByTestId(/place-for-type-search/i)
            expect(plateFavorites).toBe(null)
            expect(plateSearch).toBe(null)
        })
    });
})
