import { Box, Input, List, ListItem, Typography } from '@mui/material'
import searchSVG from 'assets/img/searchInput.svg'
import { useAppDispatch } from 'hooks/redux.ts';
import DoesntExistPhoto from 'public/doesntExist.jpg'
import { useEffect, useRef } from 'react';
import { setCenter } from 'store/reducers/index.ts';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { refactorString } from 'utils/textRefactors.ts';

import { AutocompleteProops } from './interfaces.ts';
import AutocompleteStyle from './styled.ts'
import { useOnClickOutside } from 'hooks/useOnClickOutside.ts';

export default function Autocomplete({ isLoaded }: AutocompleteProops) {
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null);
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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }: google.maps.places.AutocompletePrediction) =>
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
                    <Typography whiteSpace={'normal'} className={useAutocompleteStyle.classes.titleSuggestion}>{main_text}</Typography>
                    <Typography whiteSpace={'normal'} className={useAutocompleteStyle.classes.titleDescription}>{refactorString(secondary_text)}</Typography>
                </ListItem>
            );
        });

    const handleClickOutside = () => {
        clearSuggestions();
    };

    useOnClickOutside(ref, handleClickOutside);


    const useAutocompleteStyle = AutocompleteStyle()
    const OK = "OK"
    return (
        <Box ref={ref} className={useAutocompleteStyle.classes.Autocomplete}>
            <Box className={useAutocompleteStyle.classes.containerInput}>
                <img className={useAutocompleteStyle.classes.searchImg} src={searchSVG} alt={DoesntExistPhoto} />
                <Input
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder='Место, адрес...'
                    className={useAutocompleteStyle.classes.searchInput}
                />
            </Box>

            {status === OK && (
                <List className={useAutocompleteStyle.classes.ListContainer}>
                    <ListItem disablePadding className={useAutocompleteStyle.classes.listItem}>{renderSuggestions()}</ListItem>
                </List>)
            }

        </Box>
    )
}