import React from "react";
import { loginBygoogle } from "../../redux/modules/user";
import Spinner from "../shared/Spinner";
import { useAppDispatch } from "../../redux/configStore";

const GoogleLogin = () => {
  const appDispatch = useAppDispatch();

  // 인가코드
  let code:string |null = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    if (code) {
      const google = () => {
        appDispatch(loginBygoogle(code));
      };
      google();
    }
  }, []);

  return <Spinner />;
};

export default GoogleLogin;
