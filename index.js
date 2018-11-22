const createCustomerStore = require('./customerStore');
const getDistanceFromCoordinates = require('./distanceFromCoordinates');
const { DUBLIN_OFFICE_COORDINATES, MAX_DISTANCE_TO_INVITE } = require('./constants');

const customerStore = createCustomerStore();

const customersOrderedById = customerStore.getCustomers((a, b) => a.user_id < b.user_id ? -1 : 1);

const filteredCustomers = customersOrderedById.filter(customer => {
  const customerCoordinates = {
    latitude: customer.latitude,
    longitude: customer.longitude,
  };
  const distanceInKms = getDistanceFromCoordinates(DUBLIN_OFFICE_COORDINATES, customerCoordinates);
  if (distanceInKms <= MAX_DISTANCE_TO_INVITE) {
    return true;
  }
  return false;
});

filteredCustomers.forEach(customer => {
  console.log(`${customer.name}, user_id: ${customer.user_id}`);
});

/*
  Expected output:

  Ian Kehoe, user_id: 4
  Nora Dempsey, user_id: 5
  Theresa Enright, user_id: 6
  Eoin Ahearn, user_id: 8
  Richard Finnegan, user_id: 11
  Christina McArdle, user_id: 12
  Olive Ahearn, user_id: 13
  Michael Ahearn, user_id: 15
  Patricia Cahill, user_id: 17
  Eoin Gallagher, user_id: 23
  Rose Enright, user_id: 24
  Stephen McArdle, user_id: 26
  Oliver Ahearn, user_id: 29
  Nick Enright, user_id: 30
  Alan Behan, user_id: 31
  Lisa Ahearn, user_id: 39
*/
