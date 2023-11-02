import { IFavoriteItem } from "@/interfaces/IFavoriteItem";
import { IUser } from "@/interfaces/IUser";

import axios from 'axios'
import { get, getDatabase, push, ref, remove, set } from "firebase/database";

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

export async function getFavoriteCardsUser(uid: string) {
    try {
        const starCountRef = ref(db, `favorites/${uid}`);
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

export async function deleteUserById(uid: string) {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:3000/api/users/delete/${uid}`)
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
    const uid = user.uid
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:3000/api/users/edit/${uid}`, user)
            .then(() => {
                resolve('succes')
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export function checkUserRole(uid: string) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/api/users/check-role/${uid}`)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error);
            });
    })

}

