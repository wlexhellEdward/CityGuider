import { setArray } from "utils/arrayRefactor"

describe('Проверка метода ArraySet', () => {
    test('Проверка на значение null', () => {
        expect(setArray(null)).toBe(null)
    })
})
