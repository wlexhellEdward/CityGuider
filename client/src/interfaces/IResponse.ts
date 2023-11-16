export interface IResponse {
    token: string,
    user: {
        uid: string | null,
        email: string | null,
    }
}