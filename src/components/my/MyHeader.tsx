import React from "react";
import { Button, Grid, Text } from "../../elements/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
interface MyHeaderProps {
  children: React.ReactNode | JSX.Element;
  is_close?: boolean;
  is_my?:boolean;
  is_back?:boolean;
}
const MyHeader = (props:MyHeaderProps) => {
  const navigate = useNavigate();
  const { children, is_close, is_my, is_back } = props;
  if (is_back) {
    return (
      <React.Fragment>
        <Header>
          <Grid width="5%" display="flex" alignItems="center">
            <Button
              is_back
              _onClick={() => {
                navigate(-1);
              }}
            />
          </Grid>
          <Grid
            width="95%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text size="18px" bold cursor="pointer">
              {children}
            </Text>
          </Grid>
        </Header>
      </React.Fragment>
    );
  } else if (is_close) {
    return (
      <React.Fragment>
        <Header>
          <Grid width="5%" display="flex" alignItems="center">
            <Button
              is_close
              _onClick={() => {
                navigate("/main");
              }}
            />
          </Grid>
          <Grid
            width="95%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text size="18px" bold cursor="pointer">
              {children}
            </Text>
          </Grid>
        </Header>
      </React.Fragment>
    );
  } else if (is_my) {
    return (
      <React.Fragment>
        <Header>
          <Grid width="5%" display="flex" alignItems="center">
            <Button
              is_back
              _onClick={() => {
                navigate("/mypage");
              }}
            />
          </Grid>
          <Grid
            width="95%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text size="18px" bold cursor="pointer">
              {children}
            </Text>
          </Grid>
        </Header>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header>
        <Grid width="5%" display="flex" alignItems="center">
          <Button
            is_back
            _onClick={() => {
              navigate("/main");
            }}
          />
        </Grid>
        <Grid
          width="95%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="18px" bold cursor="pointer">
            {children}
          </Text>
        </Grid>
      </Header>
    </React.Fragment>
  );
};
MyHeader.defaultProps = {
  children: null,
};
const Header = styled.div`
  width: 100%;
  height: 56px;
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
export default MyHeader;
