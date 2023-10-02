import AutocompleteStyle from './AutocompleteStyle'
import { Container, Input, List, ListItem } from '@mui/material'
import searchSVG from '../../assets/img/searchInput.svg'
import { refactorString } from '../../utils/textRefactors';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect } from 'react';

interface AutocompleteProops {
    isLoaded: boolean;
    setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number; }>>;
}


export default function Autocomplete({ isLoaded, setCenter }: AutocompleteProops) {
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
                console.log(description)
                clearSuggestions();
                getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    setCenter(getLatLng(results[0]))
                    console.log("📍 Coordinates: ", { lat, lng });
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <span>{refactorString(secondary_text)}</span>
                </li>
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