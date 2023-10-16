import {  Box, Typography } from '@mui/material'
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import { addItem, deleteItem } from 'store/reducers'

import DoesntExistPhoto from '/public/doesntExist.jpg'

import SearchPlaceStyle from './style'
import { SearchPlaceProps } from './interfaces'







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

            <Box onClick={() => handleSetSelectedItemsArray(searchPlace.type)} className={useSearchPlaceStyle.classes.containerPlace} key={searchPlace.id}>
                {isSelected ?
                    <>
                        <img
                            className={useSearchPlaceStyle.classes.imgPlace}
                            src={searchPlace.img}
                            title='place photo'
                            alt={DoesntExistPhoto}
                        />
                        <Typography className={useSearchPlaceStyle.classes.titlePlace}>{searchPlace.title}</Typography>
                    </>
                    :
                    <>
                        <img
                            className={useSearchPlaceStyle.classes.imgSelectedPlace}
                            src={searchPlace.img}
                            title='place photo'
                            alt={DoesntExistPhoto}
                        />
                        <Typography className={useSearchPlaceStyle.classes.titleSelectedPlace}>{searchPlace.title}</Typography>
                    </>
                }
            </Box>
        </>
    )
}

export default SearchPlace