'use strict';
const headers = require('./headers');

const get200Response = (data) => ({
  statusCode: 200,
  headers,
  body: JSON.stringify(data),
});
const get404Response = (message) => ({
  statusCode: 404,
  headers,
  body: JSON.stringify({ message }),
});
const get500Response = (error) => ({
  statusCode: 500,
  headers,
  error,
});

module.exports = { get200Response, get404Response, get500Response };
