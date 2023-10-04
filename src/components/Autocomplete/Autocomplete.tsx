import AutocompleteStyle from './AutocompleteStyle'
import { Container, Input, List, ListItem, Typography } from '@mui/material'
import searchSVG from '../../assets/img/searchInput.svg'
import { useAppDispatch } from '../../hooks/redux.ts';
import { setCenter } from '../../store/reducers';
import { refactorString } from '../../utils/textRefactors';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect } from 'react';

interface AutocompleteProops {
    isLoaded: boolean;
}


export default function Autocomplete({ isLoaded }: AutocompleteProops) {
    const dispatch = useAppDispatch()
    const handlerSetCenter = (object: object) => {
        dispatch(setCenter(object))
    }
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        init,
        clearSuggestions,
    } = usePlacesAutocomplete({
        initOnMount: false,
        debounce: 300,
    });
    useEffect(() => {
        if (isLoaded) {
            init()
        }
    }, [isLoaded, init])
    const ref = useOnclickOutside(() => {
        // clearSuggestions();
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }: any) =>
            () => {
                setValue(description, false);
                clearSuggestions();
                getGeocode({ address: description }).then((results) => {
                    handlerSetCenter(getLatLng(results[0]))
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <ListItem key={place_id} onClick={handleSelect(suggestion)} className={useAutocompleteStyle.classes.suggestionContainer}>
                    <Typography className={useAutocompleteStyle.classes.titleSuggestion}>{main_text}</Typography>
                    <Typography className={useAutocompleteStyle.classes.titleDescription}>{refactorString(secondary_text)}</Typography>
                </ListItem>
            );
        });



    const useAutocompleteStyle = AutocompleteStyle()
    return (
        <Container disableGutters className={useAutocompleteStyle.classes.Autocomplete}>
            <Container ref={ref} className={useAutocompleteStyle.classes.containerInput}>
                <img className={useAutocompleteStyle.classes.searchImg} src={searchSVG} alt="" />
                <Input
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder='Место, адрес...'
                    className={useAutocompleteStyle.classes.searchInput}
                ></Input>
            </Container>

            {status === "OK" && (
                <List className={useAutocompleteStyle.classes.ListContainer}>
                    <ListItem disablePadding className={useAutocompleteStyle.classes.listItem}>{renderSuggestions()}</ListItem>
                </List>)
            }

        </Container>
    )
}