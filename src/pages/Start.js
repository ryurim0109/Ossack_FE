import React from "react";
import { Grid, Button, Text } from "../elements/index";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../shared/SocialOAuth";
import { TalkTalk } from "../components/main/index";

import ossack from "../assets/logo03.svg";
import kakaoIcon from "../assets/kakaoIcon.svg";
import googleIcon from "../assets/googleIcon.svg";
import ossacke from "../assets/ossacke.svg";

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

          <Grid width="100%" height="172px" position="relative">
            <Grid
              width="70px"
              height="34px"
              position="absolute"
              top="-34px"
              right="0"
            >
              <img src={ossacke} alt="오싹 캐릭터" />
            </Grid>
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
                <TalkTalk />
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

export default Start;
