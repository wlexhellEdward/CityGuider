
interface makeRouteProps {
    setTravelDistance: (kilometrs: string) => void,
    setTravelTime: (time: string) => void,
    start: {
        lat: number,
        lng: number
    },
    end: google.maps.LatLng,
    map: google.maps.Map
}

export const makeRoute = ({ start, end, map, setTravelDistance, setTravelTime }: makeRouteProps) => {
    
    const distanceToTime = (distance: string) => {
        return parseFloat(distance) / 5 + " ч."
    }
    
    if (start && end != null) {
        try {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            const startPoint = new google.maps.LatLng(start);
            const endPoint = new google.maps.LatLng(end);
            const request = {
                origin: startPoint,
                destination: endPoint,
                travelMode: google.maps.TravelMode.WALKING
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(response);
                    const route = response?.routes[0]
                    const distance = route?.legs[0].distance?.text
                    setTravelDistance(distance || "")
                    setTravelTime(distanceToTime(distance || ""))

                } else {
                    window.alert('Произошла ошибка при поиске маршрута: ' + status);
                }
            });
        }
        catch (erorr) {
            console.log(erorr)
        }
    }
    else {
        return false
    }
}

interface TravelProps {
    start: {
        lat: number,
        lng: number
    },
    distanceTraveled: string,
    end: google.maps.LatLng,
    map: google.maps.Map
    setTavelDistanceTraveled: (time: string) => void,
    setTravelTime: (kilometrs: string) => void,
    setTravelProgress: (progress: number) => void,
}


export const setTravelInfo = ({ start, distanceTraveled, end, map, setTavelDistanceTraveled, setTravelProgress, setTravelTime }: TravelProps) => {
    const calculateProgress = (distance: string, distanceTraveled: string) => {
        return (parseFloat(distance) / parseFloat(distanceTraveled)) * 100;
    }

    const distanceToTime = (distance: string) => {
        return parseFloat(distance) / 5 + " ч."
    }

    if (start && end != null) {
        try {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            const startPoint = new google.maps.LatLng(start);
            const endPoint = new google.maps.LatLng(end);
            const request = {
                origin: startPoint,
                destination: endPoint,
                travelMode: google.maps.TravelMode.WALKING
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(response);
                    const route = response?.routes[0]
                    const distance = route?.legs[0].distance?.text
                    if (distance != undefined) {
                        setTavelDistanceTraveled(distance || "")
                        setTravelTime(distanceToTime(distance))
                        setTravelProgress(calculateProgress(distance, distanceTraveled))
                    }
                } else {
                    window.alert('Произошла ошибка при поиске маршрута: ' + status);
                }
            });
        }
        catch (erorr) {
            console.log(erorr)
        }
    }
    else {
        return false
    }
}
