import React from "react";
import { Grid, Button, Text } from "../elements/index";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../shared/SocialOAuth";

const Start = () => {
  return (
    <React.Fragment>
      <Outter>
        <Grid
          width="100%"
          margin="38px 0"
          display="flex"
          flexDirection="column"
        >
          <Text size="1.250rem" bold cursor="pointer">
            오싹
          </Text>
          <Grid width="100%" margin="26px 0" height="400px" bg="#ccc"></Grid>
          <Grid width="100%" height="120px" bg="#ccc">
            <Grid display="flex">
              <Button
                width="40px"
                height="40px"
                backgroundColor="yellow"
                borderRadius="20px"
                fontSize="8px"
              >
                <A href={KAKAO_AUTH_URL}>kakao</A>
              </Button>
              <Button
                width="40px"
                height="40px"
                backgroundColor="red"
                borderRadius="20px"
                fontSize="8px"
              >
                <A href={GOOGLE_AUTH_URL}>Google</A>
              </Button>
              <Button
                width="40px"
                height="40px"
                backgroundColor="blue"
                borderRadius="20px"
                fontSize="8px"
                _onClick={() => {
                  history.push("/login");
                }}
              >
                email
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  padding: 0 16px 68px;
`;
const A = styled.a`
  color: #000;
`;
export default Start;
