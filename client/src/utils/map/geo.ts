const DEFFAULT_LOCATION = {
  lat: 55.21233213303506,
  lng: 30.229970924112642,
};

export const getBrowserLocation = (): Promise<{ lat: number; lng: number }> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(DEFFAULT_LOCATION);
        }
      );
    } else {
      reject(DEFFAULT_LOCATION);
    }
  });
};
