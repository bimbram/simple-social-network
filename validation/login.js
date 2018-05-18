const validator = require('validator');
const isEmpty = require('./is-empty');
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Validating User's Email
  if(!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if(validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Validating User's Password
  if(!validator.isLength(data.password, {min:5, max:30})) {
    errors.password = 'Password must be between 5 - 30 in length';
  }
  if(validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}
