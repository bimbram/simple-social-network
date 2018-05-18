const validator = require('validator');
const isEmpty = require('./is-empty');
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmedPassword = !isEmpty(data.confirmedPassword) ? data.confirmedPassword : '';
  console.log("this is data", data);
  // Validating User's Name
  if(!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }
  if(validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // Validating User's Email
  if(!validator.isEmail(data.email)) {
    console.log("this is data.email", validator.isEmail(data.email));
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

  // Validating User's Confirmed Password
  if(validator.isEmpty(data.confirmedPassword)) {
    errors.confirmedPassword = 'Confirm Password field is required';
  }
  if(!validator.equals(data.password, data.confirmedPassword)) {
    errors.confirmedPassword = 'Password must match';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}
