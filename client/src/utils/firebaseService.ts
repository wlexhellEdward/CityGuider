import { get, getDatabase, push, ref, remove, set, update } from "firebase/database";
import { IFavoriteItem } from "interfaces/IFavoriteItem";
import { IUser } from "interfaces/IUser";
import axios from 'axios'

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
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/api/users/get`)
            .then(response => {
                if (response.status == 200) {
                    resolve(response.data.users)
                } else {
                    console.error('Произошла ошибка при удалении пользователя');
                }
            })
            .catch(error => {
                reject(error);
            });
    })
}

export async function deleteUserById(id: string) {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:3000/api/users/delete/${id}`)
            .then(response => {
                if (response.status == 200) {
                    resolve("success")
                } else {
                    console.error('Произошла ошибка при удалении пользователя');
                }
            })
            .catch(error => {
                reject(error);
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
