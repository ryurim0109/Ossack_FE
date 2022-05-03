import React from "react";
import styled from "styled-components";
import { Bar } from "../components/shared/home";
import { MyHeader } from "../components/my/index";
import { OfficeLike } from "../components/like/index";

const Like = (props) => {
  return (
    <React.Fragment>
      <Outter>
        <MyHeader>찜리스트</MyHeader>
        <OfficeLike />
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
