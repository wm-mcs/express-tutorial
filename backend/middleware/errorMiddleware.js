const { responseDataParser } = require('../utils/generalUtils');

const errorHandler = (err, req, res) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json(
    responseDataParser(
      err.message,
      null,
      null,
      process.env.NODE_ENV === 'development' ? err.stack : null
    )
  );
};

module.exports = { errorHandler };
