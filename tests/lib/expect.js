const expect = (actual, ...args) => {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toThrow: () => {
      try {
        actual(...args);
        throw new Error(`method did not throw as expected`);
      } catch(e) {
        return;
      }
    },
  };
}

module.exports = expect;
