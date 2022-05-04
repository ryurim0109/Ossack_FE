import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";

const KaKaoLogin = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect( () => {
     dispatch(userActions.loginBykakao(code));
  }, []);

  return null;
};

export default KaKaoLogin;