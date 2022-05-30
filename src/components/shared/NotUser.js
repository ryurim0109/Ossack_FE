import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../../elements/index";
import ossack from "../../assets/ossack02.jpg";

const NotUser = () => {
  return (
    <React.Fragment>
      <Outter>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          height="400px"
          padding="50px 16px"
        >
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="117px"
          >
            <Image src={ossack} size="117" />
          </Grid>
          <Grid
            height="50px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text size="14px" color="#808080">
              로그인한 회원만 볼 수 있어요,
            </Text>
            <Text size="14px" color="#808080">
              로그인 페이지로 이동해주시겠어요?
            </Text>
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
