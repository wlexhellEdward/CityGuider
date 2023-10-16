const ThemeMap =
    [
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#878787"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
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
                    "color": "#f9f5ed"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#aee0f4"
                }
            ]
        }
    ]
export const DefaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: true,
    clickableIcons: false,
    keyboardShortcuts: false,
    styles: ThemeMap
}
export const themeApp = {
    Pallete: {
        lightGreyColor: '#EEEEEE',
        greyColorTitle:'#373737',
        greyColor: '#7D908C',
        blueColor: '#5E7BC7',
        darkBlue: '#405F7B',
        black: 'black'
    }
}