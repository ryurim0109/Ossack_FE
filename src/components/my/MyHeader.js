import React from "react";
import { Button, Grid, Text } from "../../elements/index";
import { history } from "../../redux/configStore";
import styled from "styled-components";

const MyHeader = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header>
        <Grid width="5%" display="flex" alignItems="center">
          <Button
            is_back
            _onClick={() => {
              history.push("/main");
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
