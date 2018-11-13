console.log('Starting app');

setTimeout(() => {
  console.log('After 2 seconds');
}, 2000);

setTimeout(() => {
  console.log('After 0 ms');
}, 0);

console.log('Finishing app');
