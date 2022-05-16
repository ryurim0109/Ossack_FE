import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../../elements/index";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../../shared/SocialOAuth";

import kakaoIcon from "../../assets/kakaoIcon.svg";
import googleIcon from "../../assets/googleIcon.svg";

const TalkTalk = () => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
        height="78px"
        alignItems="center"
        margin="16px 0 0"
        position="relative"
      >
        <Talk>
          <Text color="#FF6868">3초면</Text> 빠른 로그인 완료!
        </Talk>
        <Grid width="114px" display="flex" justifyContent="space-between">
          <MyBtn onClick={() => window.open(`${KAKAO_AUTH_URL}`)}>
            <img src={kakaoIcon} alt="카카오로그인" />{" "}
          </MyBtn>
          <MyBtn onClick={() => window.open(`${GOOGLE_AUTH_URL}`)}>
            <img src={googleIcon} alt="구글로그인" />{" "}
          </MyBtn>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const Talk = styled.div`
  color: #000;
  width: 134px;
  height: 28px;
  background-color: #fff;
  top: -36px;
  border: 1px solid #c4c4c4;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: bounceX;
  z-index: 99;
  &::after {
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 60px;
    position: absolute;
    transform: rotate(180deg);
    top: 26px;
    width: 0;
    z-index: 1;
  }
  &::before {
    border-color: #c4c4c4 transparent;
    border-style: solid;
    border-width: 0 7px 9px 8px;
    content: "";
    display: block;
    transform: rotate(180deg);
    left: 60px;
    position: absolute;
    top: 26px;
    width: 0;
    z-index: 0;
  }

  /* &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 9px solid transparent;
    border-top-color: #3e00ff;
    border-bottom: 0;
    margin-left: -9px;
    margin-bottom: -9px;
  } */

  @keyframes bounceX {
    50% {
      top: -30px;
    }
    100% {
      top: -36px;
    }
  }
`;
const MyBtn = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 46px;
`;

export default TalkTalk;
