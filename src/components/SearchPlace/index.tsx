import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import SearchPlaceStyle from './style'
import { useAppDispatch, useTypeSelector } from '../../hooks/redux';
import { addItem, deleteItem } from '../../store/reducers';

interface SearchPlaceProps {
    searchPlace: {
        id: number,
        type: string,
        img: string,
        title: string,
    }
    isSelected: boolean,
}




const SearchPlace: React.FC<SearchPlaceProps> = ({ searchPlace, isSelected }) => {

    const dispatch = useAppDispatch()
    const selectedItems = useTypeSelector((state) => state.searchSlice.selectedItems)


    const handleSetSelectedItemsArray = (type: string) => {
        if (!selectedItems.includes(type)) {
            dispatch(addItem(type))
        }
        else {
            dispatch(deleteItem(type))
        }
    }



    const useSearchPlaceStyle = SearchPlaceStyle()
    return (
        <>

            <Container onClick={() => handleSetSelectedItemsArray(searchPlace.type)} disableGutters className={useSearchPlaceStyle.classes.containerPlace} key={searchPlace.id}>
                {isSelected ?
                    <>
                        <img
                            className={useSearchPlaceStyle.classes.imgPlace}
                            src={searchPlace.img}
                            title='place photo'
                            alt="../../../public/tempPhoto.jpg"
                        />
                        <Typography className={useSearchPlaceStyle.classes.titlePlace}>{searchPlace.title}</Typography>
                    </>
                    :
                    <>
                        <img
                            className={useSearchPlaceStyle.classes.imgSelectedPlace}
                            src={searchPlace.img}
                            title='place photo'
                            alt="../../../public/tempPhoto.jpg"
                        />
                        <Typography className={useSearchPlaceStyle.classes.titleSelectedPlace}>{searchPlace.title}</Typography>
                    </>
                }
            </Container>
        </>
    )
}

export default SearchPlace