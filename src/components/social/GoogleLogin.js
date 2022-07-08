import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Spinner from "../shared/Spinner";

const GoogleLogin = (props) => {
  const appDispatch = useAppDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    if (code) {
      const google = () => {
        dispatch(userActions.loginBygoogle(code));
      };
      google();
    }
  }, [code]);

  return <Spinner />;
};

export default GoogleLogin;
