import { createSlice } from "@reduxjs/toolkit";
import { IFavoriteItem } from "../../../models/IFavoriteItem";

import tempPhoto from '../../../assets/img/tempPhoto.jpg'

interface FavoriteItemsState {
    favoriteItems: IFavoriteItem[];
    isLoading: boolean,
    error: string
}

const items = [
    {
        id: 0,
        type: ['food'],
        img: tempPhoto,
        title: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.',
    },
    {
        id: 1,
        type: ['food'],
        img: tempPhoto,
        title: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.',
    },
    {
        id: 2,
        type: ['food'],
        img: tempPhoto,
        title: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.',
    }
]

const initialState: FavoriteItemsState = {
    favoriteItems: items,
    isLoading: false,
    error: ''
}

const selectedItemsSlice = createSlice({
    name: 'seletedItemsSlice',
    initialState,
    reducers: {
        addFavoriteItem(state, action) {
            state.favoriteItems.push(action.payload)
        },
        deleteFavoriteItem(state, action) {
            console.log(`action.payload: ${action.payload}`)
            state.favoriteItems = state.favoriteItems.filter((typeItem) => typeItem != action.payload)
        }
    }
})

export const { addFavoriteItem, deleteFavoriteItem } = selectedItemsSlice.actions

export default selectedItemsSlice.reducer

