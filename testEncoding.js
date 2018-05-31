//const password = 'xxx';


//console.log( "|"+new Buffer(password).toString('base64') + "|");

/*
const request = require('request');

const password = 'xxxx',
    instanceName = 'i-0676ead0e1ccc722e';

const opts = {
    method: 'POST',
    url: 'http://52.64.80.50:8889/api/instances/stop',
    json: {
        name: instanceName,
    },
    headers: {
        'Authorization': new Buffer(password).toString('base64'),
    },
};

request(opts, (err, res, body) => {
    if (err) return console.log('Error: ', err);

    console.log('Status: %d\n\n', res.statusCode);

    console.log(body);
});
*/


const request = require('request');

const password = 'xxx';

const opts = {
    method: 'GET',
    url: 'http://52.64.80.50:8889/api/instances',
    headers: {
        'Authorization': new Buffer(password).toString('base64'),
    },
};

request(opts, (err, res, body) => {
    if (err) return console.log('Error: ', err);

    console.log('Status: %d\n\n', res.statusCode);

    const bodyParsed = JSON.parse(body);

    console.log(bodyParsed);
});
