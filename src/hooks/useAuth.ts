import { useTypeSelector } from "./redux";

export function useAuth() {
    const { email, token, id, password, name, secondName } = useTypeSelector(state => state.userSlice)
    return {
        isAuth: !!email,
        token, id, password, name, secondName
    }
}