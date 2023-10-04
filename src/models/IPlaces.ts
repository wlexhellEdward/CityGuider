interface PlaceResult {
    adr_address: string;
    business_status: string;
    formatted_address: string;
    geometry: google.maps.GeocoderGeometry;
    icon: string;
    name: string;
    place_id: string;
    rating: number;
    reference: string;
    types: string[];
    url: string;
    user_ratings_total: number;
    utc_offset: number;
    vicinity: string;
    website: string;
}