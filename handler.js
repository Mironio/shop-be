'use strict';
// can't use import https://stackoverflow.com/questions/66676555/nodejs-14-x-native-aws-lambda-import-export-support

const { getProductsList } = require('./get-products-list');
const { getProductsById } = require('./get-products-by-id');

module.exports.getProductsList = getProductsList;
module.exports.getProductsById = getProductsById;
