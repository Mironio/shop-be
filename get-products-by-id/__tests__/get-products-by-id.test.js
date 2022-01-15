'use strict';
const { getProductsById } = require('../index');
const getApiGatewayTestEvent = require('../../test-utils/getApiGatewayTestEvent');
const fetchHandlerResponse = require('../../test-utils/fetchHandlerResponse');
const products = require('../../mocks/productList.json');

const correctProduct = products[2];
const incorrectId = '12332112332112332112312312';

test('correct product by id is retrieved', async () => {
  const event = getApiGatewayTestEvent({ pathParameters: { id: correctProduct.id } });
  const { body, statusCode } = await fetchHandlerResponse(getProductsById, event);

  expect(body).toMatchObject(correctProduct);
  expect(statusCode).toBe(200);
});

test('responds with 404 if id is unknown', async () => {
  const event = getApiGatewayTestEvent({ pathParameters: { id: incorrectId } });
  const { body, statusCode } = await fetchHandlerResponse(getProductsById, event);

  expect(body).toMatchObject({ message: `Product with ${incorrectId} is not found` });
  expect(statusCode).toBe(404);
});
