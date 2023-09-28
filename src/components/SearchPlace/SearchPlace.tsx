import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SearchPlaceStyle from './SearchPlaceStyle'

interface SearchPlaceProps {
    SearchPlace: {
        id: number,
        img: string,
        title: string,
    }
}


const SearchPlace: React.FC<SearchPlaceProps> = ({ SearchPlace }) => {
    const useSearchPlaceStyle = SearchPlaceStyle()
    return (
        <>
            <Container disableGutters className={useSearchPlaceStyle.classes.containerPlace}  key={SearchPlace.id}>
                <img className={useSearchPlaceStyle.classes.imgPlace} src={SearchPlace.img} alt="" />
                <Typography className={useSearchPlaceStyle.classes.titlePlace}>{SearchPlace.title}</Typography>
            </Container>
        </>
    )
}

export default SearchPlace