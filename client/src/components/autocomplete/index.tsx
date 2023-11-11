import { useEffect, useRef } from 'react';
import { Box, Input, List, ListItem, Typography } from '@mui/material'
import searchSVG from '@/assets/img/DrawerActions/searchInput.svg'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux.ts';
import { useGoogleMaps } from '@/hooks/useGoogleMapsLoader.ts';
import { useOnClickOutside } from '@/hooks/useOnClickOutside.ts';
import { setCenter } from '@/store/reducers/index.ts';
import { refactorString } from '@/utils/refactors/textRefactors.ts';
import AutocompleteStyle from './styled.ts'
import DoesntExistPhoto from '/public/doesntExist.png'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { statuses } from './config.ts';

export default function Autocomplete() {
    const isLoaded = useGoogleMaps()
    const pallete = useTypeSelector(state => state.appSlice.Pallete)
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null);

    const handlerSetCenter = (object: object) => {
        dispatch(setCenter(object))
    }
    const { ready, value, suggestions: { status, data },
        setValue, init, clearSuggestions,
    } = usePlacesAutocomplete({ initOnMount: false, debounce: 300, });
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleSelect =
        ({ description }: google.maps.places.AutocompletePrediction) =>
            () => {
                setValue(description, false);
                clearSuggestions();
                getGeocode({ address: description }).then((results) => {
                    console.log(results)
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

    useEffect(() => {
        if (isLoaded) {
            init()
        }
    }, [isLoaded, init])

    const useAutocompleteStyle = AutocompleteStyle({ Pallete: pallete })

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
            {status === statuses.OK && (
                <List className={useAutocompleteStyle.classes.ListContainer}>
                    <ListItem disablePadding className={useAutocompleteStyle.classes.listItem}>{renderSuggestions()}</ListItem>
                </List>)
            }
        </Box>
    )
}
