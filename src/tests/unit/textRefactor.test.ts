import { refactorString } from 'utils/textRefactors';

describe('Проверка метода textRefactor',()=>{
    test('Проверка на корректное значение [.length>20]', () => {
        expect(refactorString('a'.repeat(25))).toBe('a'.repeat(20)+'...')
    }),
    test('Проверка на корректное значение [.length<20]', () => {
        expect(refactorString('a'.repeat(5))).toBe('a'.repeat(5))
    }),
    test('Проверка на пустую строку', () => {
        expect(refactorString('')).toBe('')
    })
})