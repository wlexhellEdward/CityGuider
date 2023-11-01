import { get, getDatabase, push, ref, remove, set, update } from "firebase/database";
import { IFavoriteItem } from "interfaces/IFavoriteItem";
import { IUser } from "interfaces/IUser";

const db = getDatabase();

export function addFavoriteCard(favorites: IFavoriteItem, userId: string) {
    return new Promise((resolve, rejects) => {
        const favoritesArray = ref(db, `favorites/${userId}`);
        const newFavoritesArray = push(favoritesArray);
        set(newFavoritesArray, {
            id: favorites.id,
            type: favorites.type,
            img: favorites.img,
            coordinates: favorites.coordinates.toString(),
            title: favorites.title,
            description: favorites.description,
        })
            .then(() => {
                resolve('confirm')
            })
            .catch((error) => {
                rejects(error)
            })
    })
}
export function deleteFavoriteCard(idFavorite: string | undefined, userId: string) {
    return new Promise((resolve, reject) => {
        const favoritesRef = ref(db, `favorites/${userId}`);
        get(favoritesRef).then((querySnapshot) => {
            querySnapshot.forEach((item) => {
                const favoriteId = item.key;
                const favoriteData = item.val();
                if (favoriteData.id === idFavorite) {
                    remove(ref(db, `favorites/${userId}/${favoriteId}`)).then(() => {
                        resolve('confirmed');
                    }).catch((error) => {
                        reject(error);
                    });
                }
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function getFavoriteCardsUser(userId: string) {
    try {
        const starCountRef = ref(db, `favorites/${userId}`);
        const snapshot = await get(starCountRef);
        const data: IFavoriteItem[] = [];
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                data.push(childSnapshot.val());
            });
        }
        return data;
    } catch (error) {
        console.log(error)
    }
}

export function getListAllUsers() {
    return new Promise(async (resolve, reject) => {
        const starCountRef = ref(db, `users/`);
        const snapshot = await get(starCountRef);
        const data: IUser[] = [];
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                data.push(childSnapshot.val());
            });
        }
        if (data.length > 0) {
            resolve(data);
        } else {
            reject('Error method')
        }
    })
}

export function deleteUserById(id: string) {
    const userRef = ref(db, `users/${id}`);
    return new Promise((resolve, reject) => {
        remove(userRef)
            .then(() => {
                resolve('succes')
            })
            .catch((error) => {
                reject(error)
            });
    })
}

export function editUserInfo(user: IUser) {
    const userRef = ref(db, `users/${user.id}`);
    return new Promise((resolve, reject) => {
        update(userRef, {
            id: user.id,
            email: user.email,
            lastName: user.lastName,
            lastLogin: user.lastLogin,
            firstName: user.firstName,
            registered: user.registered
        })
            .then(() => resolve('succes'))
            .catch((error) => reject(error))
    })
}
