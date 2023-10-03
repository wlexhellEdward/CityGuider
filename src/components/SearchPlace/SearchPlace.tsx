import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SearchPlaceStyle from './SearchPlaceStyle'
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


const SearchPlace: React.FC<SearchPlaceProps> = ({ isSelected, searchPlace }) => {
    const dispatch = useAppDispatch()
    const selectedItems = useTypeSelector((state) => state.selectedItems.selectedItems)

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
                        <img className={useSearchPlaceStyle.classes.imgPlace} src={searchPlace.img} alt="" />
                        <Typography className={useSearchPlaceStyle.classes.titlePlace}>{searchPlace.title}</Typography>
                    </>
                    :
                    <>
                        <img className={useSearchPlaceStyle.classes.imgSelectedPlace} src={searchPlace.img} alt="" />
                        <Typography className={useSearchPlaceStyle.classes.titleSelectedPlace}>{searchPlace.title}</Typography>
                    </>
                }
            </Container>
        </>
    )
}

export default SearchPlace