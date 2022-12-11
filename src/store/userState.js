import { atom } from "recoil";

export const userState = atom({
  ket: "userState",
  default: { isAdmin: false }
});
