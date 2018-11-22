// Haversine formula extracted from https://www.movable-type.co.uk/scripts/latlong.html
const getDistanceFromCoordinatesInKm = (coordinates, coordinates2) => {

  if (!validateCoordinatesProperties(coordinates)
    || !validateCoordinatesProperties(coordinates2)) {
    return new Error('Invalid coordinates supplied to `getDistanceFromCoordinatesInKm`');
  }

  // Radius of the earth, expressed in kilometers.
  // According to research, it expands of 0.1mm each year,
  // change this constant in a few thousands years.
  const R = 6371;

  const { latitude: lat1, longitude: lon1 } = coordinates;
  const { latitude: lat2, longitude: lon2 } = coordinates2;

  const latInDegrees = convertDegreesToRadian(lat2 - lat1);
  const longInDegrees = convertDegreesToRadian(lon2 - lon1);
  const a =
    Math.sin(latInDegrees / 2) * Math.sin(latInDegrees / 2) +
    Math.cos(convertDegreesToRadian(lat1)) *
    Math.cos(convertDegreesToRadian(lat2)) *
    Math.sin(longInDegrees / 2) * Math.sin(longInDegrees / 2)
    ;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance expressed in kms
}

const validateCoordinatesProperties = (coordinates) =>
  coordinates.hasOwnProperty('latitude') && coordinates.hasOwnProperty('longitude');

const convertDegreesToRadian = (deg) => deg * (Math.PI / 180);

module.exports = getDistanceFromCoordinatesInKm;
