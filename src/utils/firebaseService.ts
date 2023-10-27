import { get, getDatabase, push, ref, remove, set } from "firebase/database";
import { IFavoriteItem } from "models/IFavoriteItem";

const db = getDatabase();

export function AddFavoriteCard(favorites: IFavoriteItem, userId: string) {
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
export function DeleteFavoriteCard(idFavorite: string | undefined, userId: string) {
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

export async function ReadFavoriteCardsUser(userId: string) {
    try {
        const starCountRef = ref(db, `favorites/${userId}`);
        const snapshot = await get(starCountRef);
        const data: IFavoriteItem[] = [];
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                data.push(childSnapshot.val());
            });
        }
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}