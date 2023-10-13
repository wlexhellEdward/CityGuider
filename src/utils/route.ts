
export const getDirections = (directionRequest: google.maps.DirectionsRequest): Promise<google.maps.DirectionsResult | null> => {
    return new Promise((resolve, reject) => {
        const directionService = new google.maps.DirectionsService()
        directionService.route(directionRequest, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                resolve(result)
            } else {
                reject(null) 
            }
        })
    });
};
