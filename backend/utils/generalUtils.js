const responseDataParser = (
  message = null,
  data = null,
  errors = null,
  stack = null
) => {
  const dataObject = {};

  if (message !== null) {
    dataObject.message = message;
  }

  if (data !== null) {
    dataObject.data = data;
  }

  if (errors !== null) {
    dataObject.errors = errors;
  }

  if (stack !== null) {
    dataObject.stack = stack;
  }

  return dataObject;
};

module.exports = {
  responseDataParser,
};
