'use strict';

const validator = (req, res, next) => {
  let { name } = req.query;

  // check name property is valid
  if (name) {
    // send request through
    next();
  } else {
    // force an error
    next(new Error('Missing the name property in query string.'));
  }
};

module.exports = validator;
