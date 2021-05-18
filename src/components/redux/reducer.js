import { USERIDTOKEN } from "./tipe";

const initData = {
  token: "",
  id: "",
};
export const reduceridtoken = (state = initData, action) => {
  switch (action.type) {
    case USERIDTOKEN:
      return { ...state, user: action.data };
    default:
      return state;
  }
};
