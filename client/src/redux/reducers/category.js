import { STORE_CURRENT_CATEGORY } from "../actionTypes";

const initialState = {
  currentCategory: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.category };
    default:
      return state;
  }
};

export default categoryReducer;
