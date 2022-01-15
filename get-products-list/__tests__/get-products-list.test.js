'use strict';
const { getProductsList } = require('../index');
const correctProducts = require('../../mocks/productList.json');
const fetchHandlerResponse = require('../../test-utils/fetchHandlerResponse');
const getApiGatewayTestEvent = require('../../test-utils/getApiGatewayTestEvent');

test('correct list of products is retrieved', async () => {
  const event = getApiGatewayTestEvent();
  const { body, statusCode } = await fetchHandlerResponse(getProductsList, event);
  expect(body).toMatchObject(correctProducts);
  expect(statusCode).toBe(200);
});
