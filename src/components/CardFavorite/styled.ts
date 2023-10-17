import { makeStyles } from 'tss-react/mui';
import { themeApp } from 'utils/consts';


const CardFavoriteStyle = (isOpen: boolean, url: string) => {
    return makeStyles()((theme) => ({
        icon: {
            cursor: 'pointer',
            transition: 'all .3s linear',
        },
        cardFavorite: {
            width: '300px',
            boxShadow: " 0px 5px 10px 2px rgba(226, 226,226, 1);",
            padding: '20px 20px 0px 20px',
            border: `1px solid ${themeApp.Pallete.lightGreyColor}`,
            borderRadius: 8,
            marginBottom: theme.spacing(3),

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
                height: isOpen ? 200 : 120,
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
            color: themeApp.Pallete.greyColorTitle,
            fontFamily:'mont',
            fontWeight: 700
        },
        descriptionContainer: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        description: {
            opacity: 0.8,
            fontSize: 10,
            fontFamily:'mont',

        },
        containerDownIcons: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            marginBottom: '20px'
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
            '&:hover': {
                rotate: '270deg'
            },
            [theme.breakpoints.down('sm')]: {
                rotate: '270deg'
            }
        },
        imgArrow: {
            cursor: 'pointer',
            transition: 'all .3s linear',
            '&:hover': {
                rotate: '90deg'
            }
        },

    }));
};

export default CardFavoriteStyle