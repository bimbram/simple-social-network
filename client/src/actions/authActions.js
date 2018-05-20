import { TEST_DISPATCH } from './types';

// Register user
export const registerUser = (userData) => {
  console.log("this is test dispatch");
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
}
