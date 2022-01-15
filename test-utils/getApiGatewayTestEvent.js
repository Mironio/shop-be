'use strict';
const { default: createEvent } = require('@serverless/event-mocks');
const getApiGatewayTestEvent = (body) => createEvent('aws:apiGateway', body);
module.exports = getApiGatewayTestEvent;
