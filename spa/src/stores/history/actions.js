import { ADD } from './actionTypes';

const addHistory = (url) => {
  return {
    type: ADD,
    payload: url,
  };
};

export default addHistory
