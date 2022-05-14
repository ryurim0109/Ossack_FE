import React, { useEffect } from "react";
import { Grid, Image } from "../elements/index";
import { history } from "../redux/configStore";
import moomgu from "../assets/logo01.svg";
import ossack from "../assets/logo02.svg";

const Splash = () => {
  // 2초 뒤 채팅 메인으로 넘어가는 함수 작성
  const timeout = () => {
    setTimeout(() => {
      history.push("/start");
    }, 2000);
  };
  // 컴포넌트가 화면에 다 나타나면 timeout 함수 실행
  useEffect(() => {
    timeout();
    return () => {
      // clear 해줌
      clearTimeout(timeout);
    };
  });
  return (
    <React.Fragment>
      <Grid
        width="100%"
        padding="38px 0"
        display="flex"
        flexDirection="column"
        bg="#3E00FF"
      >
        <Grid width="100%" margin="118px 0" height="237px" position="relative">
          <img src={ossack} alt="오싹 이미지" />
          <Grid
            width="217px"
            height="14px"
            position="absolute"
            top="0"
            right="15px"
          >
            <Image shape="rectangle" padding="14px" src={moomgu} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Splash;
