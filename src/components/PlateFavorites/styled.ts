import { ThemeApp } from 'models/IThemeApp';
import { makeStyles } from 'tss-react/mui';

const PlateFavoritesStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        containerCardsFavorites: {
            backgroundColor:Pallete.background,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        cardsFavorites: {
            display: 'flex',
            backgroundColor:Pallete.background,
            flexDirection: 'column',
            minHeight: '85vh',
            marginBottom:theme.spacing(2),
        },
        titleFavorite: {
            color: Pallete.title,
            fontWeight: 700,
            fontSize: 18,
            marginBottom: theme.spacing(2),
        },
    })
);

export default PlateFavoritesStyle