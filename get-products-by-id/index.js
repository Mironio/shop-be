'use strict';
const products = require('../mocks/productList.json');
const findById = require('../utils/find-by-id');
const { get200Response, get404Response, get500Response } = require('../common/responses');

module.exports.getProductsById = async (event) => {
  try {
    const {
      pathParameters: { id },
    } = event;
    const product = findById(products, id);

    return product ? get200Response(product) : get404Response(`Product with ${id} is not found`);
  } catch (e) {
    return get500Response(e);
  }
};
