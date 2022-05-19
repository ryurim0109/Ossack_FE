import React from "react";
import { history } from "../redux/configStore";
import styled from "styled-components";
import { Grid, Text } from "../elements/index";
import NotImg from "../assets/404.png";

const NotFound = () => {
  return (
    <React.Fragment>
      <Outter>
        <div>
          <Grid width="276px" height="98px" bg="#fff">
            <img src={NotImg} alt="404이미지" />
          </Grid>
        </div>
        <div>
          <P>Ooops, looks like a ghost</P>
          <SP>The page you are looking for can’t be found.</SP>
        </div>
        <div>
          <Text color="#666666" size="16px">
            이용에 불편을 드려 죄송합니다,
          </Text>
          <Text color="#666666" size="16px">
            주소를 다시 한번 확인해주세요.
          </Text>
        </div>
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 8px 0;
  }
`;
const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  font-weight: bold;
`;
const SP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;
export default NotFound;
