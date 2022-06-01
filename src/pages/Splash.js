import React, { useEffect } from "react";
import { Grid } from "../elements/index";
import { history } from "../redux/configStore";
import styled from "styled-components";
import ossack from "../assets/logo02.png";

const Splash = () => {
  const timeout = () => {
    setTimeout(() => {
      history.push("/start");
    }, 2000);
  };
  useEffect(() => {
    timeout();
    return () => {
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
            top="37px"
            right="10%"
          >
            <P bold>오피스 구할 땐 오싹으로 싹가능</P>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const P = styled.p`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.buttonTitle};
`;
export default Splash;
