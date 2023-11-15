import { AdminPage } from "@/pages/AdminPage"
import { LoginPage } from "@/pages/LoginPage"
import { RegisterPage } from "@/pages/RegisterPage"

import DoesntExistPhoto from '/public/doesntExist.png'


export const IMAGE_SETTINGS = {
    titles: {
        media: 'Photos of places taken using google street',
        markers: 'Clickable marker for place selection',
        icons: 'Place icon, you can select this to select the search category',
    },
    alt: DoesntExistPhoto
}

export const MAP_THEME =
    [
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        }
    ]
export const MAP_DARK_THEME = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            { "visibility": "off" }
        ]
    }
]
export const DEFAULT_OPTIONS = {
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    rotateControl: true,
    clickableIcons: false,
    keyboardShortcuts: false,
    styles: MAP_THEME
}

export const LIGHT_THEME_APP = {
    border: '#EEEEEE',
    title: '#373737',
    description: '#7D908C',
    main: '#5E7BC7',
    darkMain: '#405F7B',
    black: 'black',
    background: '#FFF'
}
export const DARK_THEME_APP = {
    border: '#EEEEEE',
    title: '#EBEBEB',
    description: '#7D908C',
    main: '#5E7BC7',
    darkMain: '#405F7B',
    black: 'black',
    background: '#22333B'
}
export const CIRCLE_OPTIONS = {
    fillColor: LIGHT_THEME_APP.main,
    fillOpacity: 0.15,
    strokeColor: LIGHT_THEME_APP.main,
    strokeOpacity: 0.8,
}

export const ROUTES_NOT_AUTH = [
    { url: '/login', component: <LoginPage /> },
    { url: '/register', component: <RegisterPage /> },
    { url: '/admin', component: <AdminPage /> },
]

export const FIREBASE_CONFIG = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export const SUCCESES = {
    ADD_PLACE: "Место успешно добавленно!",
    DELETE_PLACE: "Место успешно удаленно!",
    SEARCH_FINISH: "Поиск завершён",
    RESET_PASSWORD: "Сообщение отправлено, проверьте ваш email",
    LOAD_FAVORITES: "Избранные успешно загруженны",
    DELETE_USER: "Пользователь удалён!",
    EDIT_USER: "Данные пользователя измененным"
}

export const ERRORS = {
    CANT_ADD_PLACE: "Не удалось добавить место, попробуйте ещё раз",
    CANT_DELETE_PLACE: "Не удалось удалить место, попробуйте ещё раз",
    CANT_DETERMINE_THE_LOCATION: "Не удалось определить ваше местоположение, попробуйте выключить VPN"
}

export const FIREBASE = {
    url: "http://localhost:5173/login"
}