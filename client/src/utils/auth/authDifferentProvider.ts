import { ERRORS, PROVIDERS } from "@/consts/consts";
import { IResponse } from "@/interfaces/IResponse";

import { Auth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const registerWithDifferentProvider = (auth: Auth, providerReg: string): Promise<IResponse> => {
    return new Promise((resolve, reject) => {
        let provider = new FacebookAuthProvider();
        if (providerReg == PROVIDERS.facebook) {
            provider = new FacebookAuthProvider()
        } else if (providerReg == PROVIDERS.google) {
            provider = new GoogleAuthProvider()
        }
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken || '';
                const user = result.user;
                resolve({ token, user })
            }).catch(() => {
                reject(ERRORS.CANT_REGISTER_WITH_RPOVIDER)
            })
    })
}