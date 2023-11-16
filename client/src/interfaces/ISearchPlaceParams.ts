export interface ISearchPlaceParams {
  map: google.maps.Map | null;
  center: {
    lat: number;
    lng: number;
  };
  inputValue: string;
}
