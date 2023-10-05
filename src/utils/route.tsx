

interface makeRouteProps {
    start: {
        lat: number,
        lng: number
    },
    end: google.maps.LatLng,
    map: google.maps.Map
}
export const makeRoute = ({ start, end, map }: makeRouteProps) => {
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
