const expect = require('./lib/expect');
const test = require('./lib/test');

const createCustomerStore = require('../customerStore');

const store = createCustomerStore();

test('should throw when given path is invalid', () => {
  expect(createCustomerStore, './invalid-path-to-file.txt').toThrow();
});

test('should throw when file is invalid', () => {
  expect(createCustomerStore, 'files/invalid_file.txt').toThrow();
});

test('should throw when invalid customer data is passed', () => {
  expect(createCustomerStore, 'files/invalid_customer_data.txt').toThrow();
});

test('should return a getCustomers method within an object', () => {
  const func = () => {};
  expect(typeof store).toBe(typeof {});
  expect(typeof store.getCustomers).toBe(typeof func);
});

test('getCustomers() should return a list of customers', () => {
  const customers = store.getCustomers();
  expect(typeof customers).toBe(typeof []);
  expect(customers.length).toBe(32);
});
