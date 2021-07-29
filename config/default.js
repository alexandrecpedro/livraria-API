const axios = require('axios');

const api = axios.create({
    // API Correios
    baseURL: 'http://viacep.com.br'
});

module.exports = api;