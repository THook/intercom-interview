const fs = require('fs');

const validateCustomerData = (customerData) => {
  const { latitude, user_id, name, longitude } = customerData;
  if (!latitude || !user_id || !name || !longitude) {
    return false;
  }
  return true;
}

const customerStore = (path = './files/customers.txt') => {
  try {
    const customersLines = fs.readFileSync(path, 'utf8').split('\n');
    const customers = customersLines.filter(e => e.length).map(JSON.parse);
    customers.forEach(customer => {
      if (!validateCustomerData(customer)) {
        throw new Error(`Invalid customer data provided by ${path}`);
      }
    })
    return {
      getCustomers: (compareFunction = null) => {
        return compareFunction ? customers.sort(compareFunction) : customers;
      },
    }
  } catch(e) {
    throw new Error(e);
  }
}

module.exports = customerStore;
