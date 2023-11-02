import { ThemeApp } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';

const MapActionStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        wrapperMapActions: {
            position: 'absolute',
            padding: theme.spacing(0.5, 1),
            borderRadius: theme.spacing(1),
            zIndex: 9,
            display: 'flex',
            top: theme.spacing(1),
            right: theme.spacing(2),
            columnGap: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                right: theme.spacing(0.1),
                columnGap: theme.spacing(0.5),
            }
        },
        containerMapActions: {
            position: 'relative',
            display: 'flex',
            columnGap: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                columnGap: theme.spacing(0.5),
            }
        },
        switchThemeButton: {
            border: `2px solid ${Pallete.border}`,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&>*': {
                height: theme.spacing(2),
                width: theme.spacing(2),

            },
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            '&:hover': {
                borderColor: Pallete.border,
                backgroundColor: Pallete.border,
            },
            zIndex: 9,
            backgroundColor: Pallete.background,
            color: 'white',
        },

        findMeButton: {
            position: 'relative',
            border: `2px solid ${Pallete.border}`,
            backgroundColor: Pallete.background,
            borderRadius: theme.spacing(1),
            '&>*': {
                height: theme.spacing(2),
                width: theme.spacing(2),
            },
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            '&:hover': {
                borderColor: Pallete.border,
                backgroundColor: Pallete.border,
            },
        },
        containerMapActionsZoom: {
            position: 'relative',
            display: 'flex',
            rowGap: '5px',
            zIndex: 9,
            border: `2px solid ${Pallete.border}`,
            backgroundColor: Pallete.background,
            borderRadius: theme.spacing(1),
        },
        buttonZoom: {
            font: 'mont',
            color: Pallete.description,
            transition: '.3s linear all',
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            '&:hover': {
                backgroundColor: Pallete.border,
            },
        },
        buttonToggleAction: {
            backgroundColor: Pallete.background,
            borderRadius: theme.spacing(1),
            color: Pallete.description,
            minWidth: theme.spacing(1),
            minHeight: theme.spacing(4.4),
            '&:focus': {
                outline: 'none'
            },
            '&:focus-visible': {
                outline: 'none'
            },
            "&:hover": {
                backgroundColor: Pallete.border
            },
        }
    })
)


export default MapActionStyle