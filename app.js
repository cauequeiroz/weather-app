const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      string: true,
      alias: 'address',
      description: 'An address to find lat and long'
    }
  })
  .help()
  .alias('h', 'help')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
const url = `http://www.mapquestapi.com/geocoding/v1/address?key=HWwuSA8PguefUNIfjjjAoUoizls5rzwD&location=${encodedAddress}`;

request({ url, json: true }, (error, response, body) => {
  console.log(`Address: ${body.results[0].providedLocation.location}`);
  console.log(`Lat: ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Long: ${body.results[0].locations[0].latLng.lng}`);
});