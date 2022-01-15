const fetchHandlerResponse = async (fn, event) => {
  const result = await fn(event);
  return {
    ...result,
    body: JSON.parse(result.body),
  };
};
module.exports = fetchHandlerResponse;
