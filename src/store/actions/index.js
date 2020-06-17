import { LOGIN, LOGOUT } from "../types";
import Axios from "axios";

// export const login = (email, password) => async dispatch => {
//     const body = JSON.stringify({ email, password });

//     try {
//       const res = await api.post('/auth', body);

//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data
//       });

//       dispatch(loadUser());
//     } catch (err) {
//       const errors = err.response.data.errors;

//       if (errors) {
//         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//       }

//       dispatch({
//         type: LOGIN_FAIL
//       });
//     }
//   };

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  try {
    const res = await Axios.post("http://e96abbb57645.ngrok.io/user/auth", {
      email,
      password,
    });
    console.log(res.data);
    dispatch({
      type: LOGIN,
      payload: {
        token: res.data.data.token,
        username: "Daniel Igwe",
        avatar:
          "https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        followed_count: 42,
        followers_count: 300,
        header_image:
          "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  dispatch({
    type: LOGOUT,
  });
};
