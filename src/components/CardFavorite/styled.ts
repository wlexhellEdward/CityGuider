import { makeStyles } from 'tss-react/mui';


const greyColorTitle = '#373737'

const CardFavoriteStyle = (isOpen: boolean, url: string) => {
    return makeStyles()((theme) => ({
        icon: {
            cursor: 'pointer',
            transition: 'all .3s linear',
        },
        cardFavorite: {
            maxWidth: 300,
            padding: '20px 20px 0px 20px',
            border: '1px solid #7D908C',
            borderRadius: 8,
            marginBottom: 10,
            marginTop: 10,
        },
        imgCard: {
            position: 'relative',
            height: isOpen ? 200 : 80,
            display: 'flex',
            minWidth: isOpen ? '100%' :'40%',
            alignItems: 'end',
            borderRadius: 8,
            backgroundImage: `url('${url}')`,
            gap: 4,
            justifyContent: 'end',
            width: isOpen ? '100%' : theme.spacing(20),
            backgroundRepeat: 'no-repeat',
            transition: 'height .3s ease-in-out',
            backgroundSize: 'cover'
        },
        containerImgTitle: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        cardContent: {
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent:'space-between',
            flexDirection: isOpen ? 'column' : 'row',
            alignItems: 'center',
            '&:last-child': {
                padding: 0,
            },
            width: '100%'
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
            color: greyColorTitle,
            fontSize: isOpen ? 24 : 14,
            fontWeight: 700
        },
        descriptionContainer: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        description: {
            opacity: 0.8,
            fontSize: 10
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