import { USERIDTOKENROLE } from "./tipe";

const initData = {
  token: "",
  id: "",
  role:""
};
export const reduceridtokenrole = (state = initData, action) => {
  switch (action.type) {
    case USERIDTOKENROLE:
      return { ...state, user: action.data };
    default:
      return state;
  }
};
