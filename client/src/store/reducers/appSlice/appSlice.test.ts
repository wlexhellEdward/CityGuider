import { DARK_THEME_APP, LIGHT_THEME_APP } from "@/constants/theme"
import appReducer, {
    setAppTheme
} from "@/store/reducers/appSlice/appSlice"

jest.mock('firebase/database', () => {
    const original = jest.requireActual('firebase/database');
    return {
        ...original,
        getDatabase: jest.fn(),
    };
});

describe('Тестирование "appSlice" ', () => {
    it('Смена темы при вызове "setAppTheme" action с пустыми данными', () => {
        const action = { type: setAppTheme.type, payload: '' }
        const result = appReducer({ Pallete: LIGHT_THEME_APP }, action)
        expect(result).toEqual({ "Pallete": "" })
    });
    it('Смена темы при вызове "setAppTheme" action с данными тёмной темы', () => {
        const action = { type: setAppTheme.type, payload: DARK_THEME_APP }
        const result = appReducer({ Pallete: LIGHT_THEME_APP }, action)
        expect(result).toEqual({ "Pallete": DARK_THEME_APP })
    });
})