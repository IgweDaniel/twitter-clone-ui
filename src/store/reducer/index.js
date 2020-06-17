import { LOGOUT, LOGIN } from "../types";

const initialState = {
  //   token: localStorage.getItem("token"),
  isAuthenticated: true,
  loading: true,
  token: "",
  user: {
    username: "danielIgwe",
    avatar: "",
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
}
