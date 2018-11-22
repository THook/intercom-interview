console.time('Execution time');

console.log('Running tests for customerStore:\n');
require('./customerStore__test');

console.log('\n\nRunning tests for distanceFromCoordinates:\n');
require('./distanceFromCoordinates__test');

console.log('\n');
console.timeEnd('Execution time');
