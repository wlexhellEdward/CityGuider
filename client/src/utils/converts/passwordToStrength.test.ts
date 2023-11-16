import { passwordToStrength } from "@/utils/converts/convert";

describe("Тестирования функции для расчёта прогресса сложности пароля", () => {
  test("Проверка на пустой пароль", () => {
    expect(passwordToStrength("")).toBe(0);
  });
  test("Проверка на совпадение одного правила", () => {
    expect(Math.round(passwordToStrength("password"))).toBeCloseTo(33);
  });
  test("Проверка на совпадение двух правил", () => {
    expect(Math.round(passwordToStrength("P@ssword"))).toBeCloseTo(67);
  });
  test("Проверка на совпадение всех правил", () => {
    expect(Math.round(passwordToStrength("P@ssw0rd"))).toBe(100);
  });
});
