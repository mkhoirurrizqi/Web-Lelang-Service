import { USERIDTOKENROLE } from "./tipe";

export const tokenidroleuser = (token,id,role) => ({
  type: USERIDTOKENROLE,
  data: {token,id,role},
});
