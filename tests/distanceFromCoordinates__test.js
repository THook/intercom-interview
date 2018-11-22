const expect = require('./lib/expect');
const test = require('./lib/test');

const getDistanceFromCoordinates = require('../distanceFromCoordinates');

const parisCoordinate = {
  latitude: 48.856614,
  longitude: 2.3522219,
};

const dublinCoordinate = {
  latitude: 53.3498053,
  longitude: -6.2603097,
};
const expectedDistance = 780.8825050357297;

test('should throw when coordinates are not provided', () => {
  const invalidDistance = getDistanceFromCoordinates({}, {});
  expect(invalidDistance instanceof Error).toBe(new Error() instanceof Error);
});

test('should return a number when valid coordinates are provided', () => {
  const coordinates = {
    latitude: Math.random(),
    longitude: Math.random(),
  };
  const coordinates2 = {
    latitude: Math.random(),
    longitude: Math.random(),
  };
  const distance = getDistanceFromCoordinates(coordinates, coordinates2);
  expect(typeof distance).toBe(typeof 1);
});

test('Distance from Paris to Dublin should be ~780km', () => {
  const distance = getDistanceFromCoordinates(parisCoordinate, dublinCoordinate);
  expect(distance).toBe(expectedDistance);
});

test('Distance from Dublin to Paris should be ~780km TOO', () => {
  const distance = getDistanceFromCoordinates(dublinCoordinate, parisCoordinate);
  expect(distance).toBe(expectedDistance);
});
