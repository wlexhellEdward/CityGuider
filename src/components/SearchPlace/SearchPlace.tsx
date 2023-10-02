import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SearchPlaceStyle from './SearchPlaceStyle'
import { useAppDispatch, useTypeSelector } from '../../hooks/redux';
import { addItem, deleteItem } from '../../store/reducers';

interface SearchPlaceProps {
    SearchPlace: {
        id: number,
        type: string,
        img: string,
        title: string,
    }
    isSelected: boolean,
}


const SearchPlace: React.FC<SearchPlaceProps> = ({ isSelected, SearchPlace }) => {
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

            <Container onClick={() => handleSetSelectedItemsArray(SearchPlace.type)} disableGutters className={useSearchPlaceStyle.classes.containerPlace} key={SearchPlace.id}>
                {isSelected ?
                    <>
                        <img className={useSearchPlaceStyle.classes.imgPlace} src={SearchPlace.img} alt="" />
                        <Typography className={useSearchPlaceStyle.classes.titlePlace}>{SearchPlace.title}</Typography>
                    </>
                    :
                    <>
                        <img className={useSearchPlaceStyle.classes.imgSelectedPlace} src={SearchPlace.img} alt="" />
                        <Typography className={useSearchPlaceStyle.classes.titleSelectedPlace}>{SearchPlace.title}</Typography>
                    </>
                }
            </Container>
        </>
    )
}

export default SearchPlace