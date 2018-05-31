const _ = require('lodash'),
    Promise = require('bluebird'),
    cheerio = require('cheerio'),
    request = require('request'),
    winston = require('winston');

winston.level = 'debug';


const config = {
    // URL of the site
    source: 'https://www.serviceseeking.com.au/job-requests',

    opts: {
    },
};

url = config.source;

const opts = _.merge({}, {}, {url});

console.log(opts);

request(opts, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    if (res.statusCode !== 200) {
        return console.log(body);
    }

    // Load content into a JQuery parser
    const $ = cheerio.load(body);

    // Extract all urls
    const urls = $('div')
        .map((i, el) => $(el).text())
        .get()
        ;

    console.log(urls);
    //resolve(urls);
});
