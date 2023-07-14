import { ADD_NAME } from "../actions/nameTypes";

const initialState = {
  name: {
    firstName: ""
  }
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      // set firtName to Joihn
      return {
        ...state,
        name: {
          firstName: "John"
        }
      };
    default:
      return state;
  }
};

export default nameReducer;



