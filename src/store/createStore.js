import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initialState = {
  // isAuthenticated: true,
  // user: {
  //   username: "Daniel Igwe",
  //   avatar:
  //     "https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   followed_count: 42,
  //   followers_count: 300,
  //   header_image:
  //     "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  // },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
