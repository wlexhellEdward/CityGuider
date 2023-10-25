import {  Box, Typography } from '@mui/material'
import { useAppDispatch, useTypeSelector } from 'hooks/redux'
import { addItem, deleteItem } from 'store/reducers'

import DoesntExistPhoto from '/public/doesntExist.png'

import { SearchPlaceProps } from './interfaces'
import SearchPlaceStyle from './styled'

const SearchPlace: React.FC<SearchPlaceProps> = ({ searchPlace, isSelected }) => {

    const dispatch = useAppDispatch()
    const selectedItems = useTypeSelector((state) => state.searchSlice.selectedItems)
    const pallete = useTypeSelector(state => state.appSlice.Pallete)

    const handleSetSelectedItemsArray = (type: string) => {
        if (!selectedItems.includes(type)) {
            dispatch(addItem(type))
        }
        else {
            dispatch(deleteItem(type))
        }
    }



    const useSearchPlaceStyle = SearchPlaceStyle({Pallete:pallete})
    return (
        <>

            <Box data-testid='place-for-type-search' onClick={() => handleSetSelectedItemsArray(searchPlace.type)} className={useSearchPlaceStyle.classes.containerPlace} key={searchPlace.id}>
                {isSelected ?
                    <>
                        <img
                            data-testid='type-of-place'
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
                            data-testid='selected-type-of-place'
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