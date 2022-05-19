import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Spinner from "../shared/Spinner";

const KaKaoLogin = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    dispatch(userActions.loginBykakao(code));
  }, [code, dispatch]);

  return <Spinner />;
};

export default KaKaoLogin;
