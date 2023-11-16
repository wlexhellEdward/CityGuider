import userReducer, {
  removeUser,
  setUser,
} from "@/store/reducers/userSlice/userSlice";

describe('Тестирование "userSlice"', () => {
  it('Смена данных пользователя "setUser" action с пустыми данными', () => {
    const mockState = {
      token: "",
      id: "2",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "",
    };
    const mockResult = {
      token: "",
      id: "2",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "",
    };
    const action = { type: setUser.type, payload: mockResult };
    const result = userReducer(mockState, action);
    expect(result).toEqual(mockResult);
  });
  it('Смена данных пользователя "setUser" action с заполнеными данными', () => {
    const mockState = {
      token: "",
      id: "2",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "",
    };
    const mockResult = {
      token: "test",
      id: 5,
      email: "test",
      password: "test",
      firstName: "test",
      lastName: "test",
      role: "",
    };
    const action = { type: setUser.type, payload: mockResult };
    const result = userReducer(mockState, action);
    expect(result).toEqual(mockResult);
  });
  it('Удаление данных пользователя при вызове "removeUser" action', () => {
    const mockState = {
      token: "",
      id: "2",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "",
    };
    const mockResult = {
      token: "",
      id: null,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "",
    };
    const action = { type: removeUser.type };
    const result = userReducer(mockState, action);
    expect(result).toEqual(mockResult);
  });
});
