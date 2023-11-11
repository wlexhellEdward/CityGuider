import { darken } from '@mui/system/colorManipulator';

import { ThemeAppCardFavorite } from '@/interfaces/IThemeApp';

import { makeStyles } from 'tss-react/mui';


const CardFavoriteStyle = makeStyles<ThemeAppCardFavorite>()(
    (theme, { Pallete, isOpen, url }) => ({
        icon: {
            cursor: 'pointer',
            transition: 'all .3s linear',
        },
        cardFavorite: {
            width: '300px',
            boxShadow: ` 0px 5px 10px 2px ${darken(Pallete.background, 0.2)}`,
            padding: '20px 20px 0px 20px',
            border: `1px solid ${Pallete.border}`,
            borderRadius: 8,
            marginBottom: theme.spacing(3),
            backgroundColor: Pallete.background,
            [theme.breakpoints.down('sm')]: {
                padding: '5px 10px',
                width: '195px',
            },
        },
        imgCard: {
            position: 'relative',
            height: isOpen ? 200 : 80,
            display: 'flex',
            minWidth: isOpen ? '100%' : '40%',
            alignItems: 'end',
            borderRadius: 8,
            backgroundPosition: 'center',
            backgroundImage: `url('${url}')`,
            gap: 4,
            justifyContent: 'end',
            width: isOpen ? '100%' : theme.spacing(20),
            backgroundRepeat: 'no-repeat',
            transition: 'height .3s ease-in-out',
            backgroundSize: 'cover',
            [theme.breakpoints.down('sm')]: {
                margin: '5px 0px',
                width: '100%',
                height: isOpen ? 200 : 80,
            },
        },
        containerImgTitle: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        cardContent: {
            display: 'flex',
            columnGap: theme.spacing(2),
            justifyContent: 'space-between',
            flexDirection: isOpen ? 'column' : 'row',
            alignItems: 'center',
            '&:last-child': {
                padding: 0,
            },
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            },

        },

        containerTitle: {
            display: 'flex',
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: isOpen ? 10 : 0,
        },
        title: {
            fontSize: 'calc(16px + (24 - 16) * ((100vw - 375px) / (1920 - 375)/2))',
            color: Pallete.title,
            fontFamily: 'mont',
            fontWeight: 700,
            [theme.breakpoints.down('sm')]: {
                fontSize: 12
            }
        },
        descriptionContainer: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        description: {
            opacity: 0.8,
            fontSize: 10,
            fontFamily: 'mont',
            color: Pallete.description,
            [theme.breakpoints.down('sm')]: {
                fontSize: 8
            }
        },
        containerDownIcons: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            marginBottom: '20px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '4px'
            }
        },

        iconStatis: {
            marginBottom: 4,
            marginRight: 4,
            width: 16,
            height: 16
        },
        imgArrowDown: {
            cursor: 'pointer',
            transition: 'all .6s linear',
            rotate: '90deg',
            filter: 'invert(1)',
            '&:hover': {
                rotate: '270deg'
            },
            [theme.breakpoints.down('sm')]: {
                rotate: '270deg'
            }
        },
        imgArrow: {
            cursor: 'pointer',
            filter: 'invert(1)',
            transition: 'all .3s linear',
            '&:hover': {
                rotate: '90deg'
            }
        },

    }));


export default CardFavoriteStyle