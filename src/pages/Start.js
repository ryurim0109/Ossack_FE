import React from "react";
import { Grid, Button, Text, Image } from "../elements/index";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../shared/SocialOAuth";
import moomgu from '../static/images/logo01.svg';
import ossack from '../static/images/logo02.svg';

const Start = () => {
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
            <img  src={ossack} alt="오싹 이미지"/>
            <Grid width="217px" height="14px" position="absolute" top="0" right="15px">
              <Image shape="rectangle" padding="14px" src={moomgu}/>
            </Grid>
          </Grid>
          <Outter>
          <Grid width="100%" height="120px" bg="#ccc">
            <Grid display="flex" justifyContent="space-around" alignItems="center">
              <Button
                width="100px"
                height="100px"
                backgroundColor="yellow"
                borderRadius="20px"
                fontSize="1.25rem"
              >
                <A href={KAKAO_AUTH_URL}>kakao</A>
              </Button>
              <Button
                width="100px"
                height="100px"
                backgroundColor="red"
                borderRadius="20px"
                fontSize="1.25rem"
              >
                <A href={GOOGLE_AUTH_URL}>Google</A>
              </Button>
              <Button
                width="100px"
                height="100px"
                backgroundColor="blue"
                borderRadius="20px"
                fontSize="1.25rem"
                _onClick={() => {
                  history.push("/login");
                }}
              >
                email
              </Button>
            </Grid>
          </Grid>
          </Outter>
        </Grid>
      
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
