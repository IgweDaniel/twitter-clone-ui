import React from "react";
import { connect } from "react-redux";
import AppScreen from "./screens/App";
import AuthScreen from "./screens/Auth";

const Main = ({ isAuthenticated }) => {
  return <>{isAuthenticated ? <AppScreen /> : <AuthScreen />}</>;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Main);
