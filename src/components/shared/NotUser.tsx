import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../../elements/index";
import ossack from "../../assets/login.png";

const NotUser = () => {
  return (
    <React.Fragment>
      <Outter>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          height="370px"
          padding="0 16px"
        >
          <Grid
            height="155px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="109px"
              height="98px"
            >
              <img src={ossack} alt="경고 이미지" />
            </Grid>
            <Grid
              height="40px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text size="14px" bold>
                로그인한 회원만 볼 수 있어요.
              </Text>
              <Text size="14px" bold>
                로그인 페이지로 이동해주시겠어요?
              </Text>
            </Grid>
          </Grid>
          <Button
            borderRadius="8px"
            color="#fff"
            _onClick={() => {
              window.location.replace("/start");
            }}
          >
            로그인 하러 가기
          </Button>
        </Grid>
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default NotUser;
