import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';


const paginationBarStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        pagination: {
            backgroundColor: Pallete.background,
            font: 'mont',
            margin: theme.spacing(2, 0, 5, 0),
            '&>*': {
                color: Pallete.title,
            }
        }

    })
)

export default paginationBarStyle