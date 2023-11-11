import { getBrowserLocation } from "@/utils/map/geo";


describe('Проверка работы метода getBrowserLocation', () => {
    test('Проверка на наличие результата', async () => {
        try {
            const result = await getBrowserLocation();
            expect(result).toBe(true);
        } catch (e) {
            console.log(e)
        }
    })
})