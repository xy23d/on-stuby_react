import { ADD } from './actionTypes';

const add = (url) => {
  return {
    type: ADD,
    payload: url,
  };
};

const actions = {
  add
}

export default actions
