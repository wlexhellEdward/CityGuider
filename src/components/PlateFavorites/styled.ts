import { makeStyles } from 'tss-react/mui';

const greyColor = '#EEEEEE'

const PlateFavoritesStyle = makeStyles()((theme) => {
    return {
        containerCardsFavorites: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        cardsFavorites: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            minHeight: '85vh',
            maxHeight: '85vh',

        },
        titleFavorite: {
            color: 'black',
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 20,
        },
    };
});

export default PlateFavoritesStyle