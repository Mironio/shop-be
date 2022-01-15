'use strict';
const products = require('../mocks/productList.json');
const { get200Response, get500Response } = require('../common/responses');

module.exports.getProductsList = async () => {
  try {
    return get200Response(products);
  } catch (e) {
    return get500Response(e);
  }
};
