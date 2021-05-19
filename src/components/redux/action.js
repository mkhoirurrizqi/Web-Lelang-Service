import { USERIDTOKEN } from "./tipe";

export const tokeniduser = (token,id) => ({
  type: USERIDTOKEN,
  data: {token,id},
});
