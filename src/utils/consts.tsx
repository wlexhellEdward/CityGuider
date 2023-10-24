
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
export const themeApp = {
    Pallete: {
        lightGreyColor: '#EEEEEE',
        greyColorTitle: '#373737',
        greyColor: '#7D908C',
        blueColor: '#5E7BC7',
        darkBlue: '#405F7B',
        black: 'black',
        white: '#FFF'
    }
}

export const CIRCLE_OPTIONS = {
    fillColor: themeApp.Pallete.blueColor,
    fillOpacity: 0.15,
    strokeColor: themeApp.Pallete.blueColor,
    strokeOpacity: 0.8,
}