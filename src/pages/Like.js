import React from "react";
import styled from "styled-components";
import { Bar } from "../components/home";
import { MyHeader } from "../components/my/index";

const Like = () => {
  return (
    <React.Fragment>
      <Outter>
        <MyHeader />
        <Bar />
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  padding-bottom: 68px;
`;

export default Like;
