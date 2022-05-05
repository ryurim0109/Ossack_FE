import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";

const GoogleLogin = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  // const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_ID;
  // console.log("code : ", GOOGLE_CLIENT_ID);

  React.useEffect(() => {
    dispatch(userActions.loginBygoogle(code));
  }, []);

  return null;
};

export default GoogleLogin;
