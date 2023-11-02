export interface IUser {
    uid: string,
    email: string,
    passwordHash: string,
    metadata: {
        creationTime: string,
        lastSignInTime: string
    }
}