import errorReducer, {
    setError
} from "store/reducers/errorSlice/errorSlice";

describe('Тестирование "errorSlice"', () => {
    it('Смена обьекта ошибки при вызове "setError" action с пустыми данными', () => {
        const mockState = { type: '', message: '', isOpen: false }
        const mockResult = { type: '', message: '', isOpen: false }
        const action = { type: setError.type, payload: mockResult }
        const result = errorReducer(mockState, action)
        expect(result).toEqual(mockResult)
    });
    it('Смена обьекта ошибки при вызове "setError" action с заполненными данными', () => {
        const mockState = { type: '', message: '', isOpen: false }
        const mockResult = { type: 'References Error', message: 'Something wrong', isOpen: true }
        const action = { type: setError.type, payload: mockResult }
        const result = errorReducer(mockState, action)
        expect(result).toEqual(mockResult)
    });
})