import '@testing-library/jest-dom'

import { render, screen,waitFor } from '@testing-library/react';
import SideBar from 'components/Drawer';
import { Provider } from 'react-redux';
import { store } from 'store/store';


describe('Тестирование Drawer', () => {
    test('Проверка drawer на смену статуса выбранного раздела', async () => {
        render(
            <Provider store={store}>
                <SideBar currentStatus='close' />
            </Provider>
        );
        await waitFor(() => {
            const plateFavorites = screen.queryByTestId(/plate-search/i)
            const plateSearch = screen.queryByTestId(/place-for-type-search/i)
            expect(plateFavorites).toBe(null)
            expect(plateSearch).toBe(null)
        })
    });
})
