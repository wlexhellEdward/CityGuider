
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