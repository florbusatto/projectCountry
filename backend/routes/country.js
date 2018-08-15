var express = require('express');
var router = express.Router();
const axios = require('axios')

var countries = {
"countries":[
    {"name":"Argentina", "code":"AR"},
    {"name":"Bolivia", "code":"BO"}, 
    {"name":"Brasil", "code":"BR"},
    {"name":"Chile", "code":"CH"},
    {"name":"Paraguay", "code":"PY"},
    {"name":"Uruguay", "code":"UY"},
]
}

const countriesData = 'https://restcountries.eu/rest/v2/all'

//Con la llamada ajax a /country, el objeto "countries" se devuelve en formato JSON.

router.get('/country', function(req, res, next) {
  res.send(JSON.stringify(countries));
});


module.exports = router;