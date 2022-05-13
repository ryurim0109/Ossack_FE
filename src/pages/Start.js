import React from "react";
import { Grid, Button, Text, Image } from "../elements/index";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../shared/SocialOAuth";

import ossack from "../static/images/logo03.svg";
import kakaoIcon from "../static/images/kakaoIcon.svg";
import googleIcon from "../static/images/googleIcon.svg";

const Start = () => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        padding="16px 0"
        display="flex"
        flexDirection="column"
        bg="#fff"
        position="relative"
      >
        <Outter>
          <Grid width="100%" height="412px" margin="24px 0" position="relative">
            <Grid
              width="240px"
              top="152px"
              right="0"
              height="154px"
              position="absolute"
            >
              <img src={ossack} alt="오싹 이미지" />
            </Grid>
          </Grid>

          <Grid width="100%" height="172px">
            <Grid
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
              alignItems="center"
            >
              <Button
                width="100%"
                height="48px"
                backgroundColor="#fff"
                borderRadius="8px"
                display="flex"
                border="1px solid #3E00FF"
                alignItems="center"
                justifyContent="center"
                _onClick={() => {
                  history.push("/login");
                }}
              >
                <Text size="0.875rem" color="#3E00FF">
                  {" "}
                  로그인
                </Text>
              </Button>
              {/* 회원가입 */}
              <Grid
                width="100%"
                textAlign="center"
                margin="8px 0 0"
                _onClick={() => {
                  history.push("/signup");
                }}
              >
                <P>
                  오싹이 처음이신가요?
                  <Text borderBottom="1px solid #3E00FF" color="#3E00FF">
                    회원가입
                  </Text>{" "}
                  하러가기
                </P>
              </Grid>
              {/* 소셜로그인 */}
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
                <Grid
                  width="114px"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Button width="46px" height="46px" borderRadius="46px">
                    <A href={KAKAO_AUTH_URL}>
                      <img src={kakaoIcon} alt="카카오로그인" />
                    </A>
                  </Button>
                  <Button width="46px" height="46px" borderRadius="46px">
                    <A href={GOOGLE_AUTH_URL}>
                      <img src={googleIcon} alt="구글로그인" />
                    </A>
                  </Button>
                </Grid>
              </Grid>
              {/* 소셜로그인 */}
            </Grid>
          </Grid>
        </Outter>
      </Grid>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  padding: 0 16px;
  position: relative;
`;
const A = styled.a`
  color: #000;
`;
const P = styled.p`
  color: #999;
  cursor: pointer;
  font-size: 0.75rem;
`;
const Talk = styled.div`
  color: #fff;
  width: 134px;
  height: 28px;
  background-color: #3e00ff;
  top: -36px;
  border: 3px solid #3e00ff;
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

  &:before {
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
  }

  @keyframes bounceX {
    50% {
      top: -30px;
    }
    100% {
      top: -36px;
    }
  }
`;
export default Start;
