import React from "react";
import styled from "styled-components";
import { Bar } from "../components/shared/home";
import { MyHeader } from "../components/my/index";
import { LikeTab } from "../components/like/index";

const Like = (props) => {
  return (
    <React.Fragment>
      <MyHeader>찜리스트</MyHeader>
      <Outter>
        <LikeTab />
      </Outter>
      <Bar />
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  padding: 0 16px 68px 16px;
`;

export default Like;
