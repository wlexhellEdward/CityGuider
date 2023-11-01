import currentStatusReducer, {
    setCurrentStatus
} from "store/reducers/currentStatusSlice/currentStatusSlice"


describe('Тестирование "currentStatusSlice"', () => {
    it('Смена значения статуса при вызове "setCurrentStatus" action с пустыми данными', () => {
        const mockState = { status: "close" }
        const mockResult = { status: "" }
        const action = { type: setCurrentStatus.type, payload: '' }
        const result = currentStatusReducer(mockState, action)
        expect(result).toEqual(mockResult)
    });
    it('Смена значения статуса при вызове "setCurrentStatus" action с заполненными данными', () => {
        const mockState = { status: "close" }
        const mockResult = { status: "close" }
        const action = { type: setCurrentStatus.type, payload: 'close' }
        const result = currentStatusReducer(mockState, action)
        expect(result.status).toEqual(mockResult.status)
    });
})