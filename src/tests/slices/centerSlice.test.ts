import centerRducer, {
    setCenter,
    setHumanPosition

} from "store/reducers/centerSlice/centerSlice";

describe('Тестирование "centerSlice" ', () => {
    it('Смена значения центра карты при вызове "setCenter" action с пустыми данными', () => {
        const mockState = { position: { lat: 12, lng: 32 }, humanPosition: { lat: 12, lng: 23 } }
        const mockResult = { position: "", humanPosition: { lat: 12, lng: 23 } }
        const action = { type: setCenter.type, payload: '' }
        const result = centerRducer(mockState, action)
        expect(result).toEqual(mockResult)
    });
    it('Смена значения центра карты при вызове "setCenter" action с заполненными данными', () => {
        const mockState = { position: { lat: 12, lng: 32 }, humanPosition: { lat: 12, lng: 23 } }
        const mockResult = { position: { lat: 12, lng: 32 }, humanPosition: { lat: 12, lng: 23 } }
        const action = { type: setCenter.type, payload: { lat: 12, lng: 32 } }
        const result = centerRducer(mockState, action)
        expect(result).toEqual(mockResult)
    });
    it('Смена значения центра человека при вызове "setCenter" action с пустыми данными', () => {
        const mockState = { position: { lat: 12, lng: 32 }, humanPosition: { lat: 12, lng: 23 } }
        const mockResult = { position: { lat: 12, lng: 32 }, humanPosition: "" }
        const action = { type: setHumanPosition.type, payload: "" }
        const result = centerRducer(mockState, action)
        expect(result).toEqual(mockResult)
    });
    it('Смена значения центра человека при вызове "setCenter" action с заполненными данными', () => {
        const mockState = { position: { lat: 12, lng: 32 }, humanPosition: { lat: 12, lng: 23 } }
        const mockResult = { position: { lat: 12, lng: 32 }, humanPosition: { lat: 12, lng: 23 } }
        const action = { type: setHumanPosition.type, payload: { lat: 12, lng: 23 } }
        const result = centerRducer(mockState, action)
        expect(result).toEqual(mockResult)
    });
})