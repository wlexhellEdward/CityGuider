import SearchStyle from './SearchStyle'
import Container from '@mui/material/Container'
import Input  from '@mui/material/Input'
import searchSVG from '../../assets/img/searchInput.svg'

export default function Search() {
    const useSearchStyle = SearchStyle()
    return (
        <Container className={useSearchStyle.classes.containerInput}>
            <img className={useSearchStyle.classes.searchImg} src={searchSVG} alt="" />
            <Input placeholder='Место, адрес...' className={useSearchStyle.classes.searchInput}></Input>
        </Container>
    )
}