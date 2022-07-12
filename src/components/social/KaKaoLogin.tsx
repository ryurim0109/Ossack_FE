import React from "react";
import { loginBykakao } from "../../redux/modules/user";
import Spinner from "../shared/Spinner";
import { useAppDispatch } from "../../redux/configStore";

const KaKaoLogin = () => {
  const appDispatch = useAppDispatch();

  // 인가코드
  let code:string|null = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    if (code) {
      const kakao = () => {
        appDispatch(loginBykakao(code));
      };
      kakao();
    }
  }, []);

  return <Spinner />;
};

export default KaKaoLogin;
