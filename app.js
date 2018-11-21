const request = require('request');

const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=HWwuSA8PguefUNIfjjjAoUoizls5rzwD&location=1301%20lombard%20street%20philadelphia';

request({ url, json: true }, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});