import { atom } from "recoil";
import { ATTENDANCE_AUTH_TOKEN } from "../constants/constants";

export const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: Boolean(localStorage.getItem(ATTENDANCE_AUTH_TOKEN)),
    authToken: null
  }
})