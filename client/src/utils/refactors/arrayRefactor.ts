export function setArray(
  arr: google.maps.places.PlaceResult[] | null
): google.maps.places.PlaceResult[] | null {
  if (arr !== null) {
    const uniqueObjects = new Set<google.maps.places.PlaceResult>();
    arr.forEach((obj) => {
      const exists = [...uniqueObjects].some((item) => isEqual(item, obj));
      if (!exists) {
        uniqueObjects.add(obj);
      }
    });
    return [...uniqueObjects];
  }
  return null;
}

function isEqual(
  objA: google.maps.places.PlaceResult,
  objB: google.maps.places.PlaceResult
) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}
