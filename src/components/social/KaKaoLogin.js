import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Spinner from "../shared/Spinner";

const KaKaoLogin = (props) => {
  const appDispatch = useAppDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    if (code) {
      const kakao = () => {
        dispatch(userActions.loginBykakao(code));
      };
      kakao();
    }
  }, [code]);

  return <Spinner />;
};

export default KaKaoLogin;
