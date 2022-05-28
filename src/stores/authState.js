import { atom } from "recoil";
import { INTOUCH_ATTENDANCE_ACCESS_TOKEN } from "../constants/constants";

export const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: Boolean(localStorage.getItem(INTOUCH_ATTENDANCE_ACCESS_TOKEN)),
    accessToken: localStorage.getItem(INTOUCH_ATTENDANCE_ACCESS_TOKEN) || null,
    user: null
  }
})