import { ADD } from './actionTypes';

const initialState = {
  histories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        histories: [...state.histories, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
