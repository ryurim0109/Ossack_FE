import React from "react";
import styled from "styled-components";
import { Bar } from "../components/home";
import { MyHeader } from "../components/my/index";
import {
  SaleList,
  HotPlaceList,
  Office,
  OfficeLike,
} from "../components/list/index";

const Like = (props) => {
  return (
    <React.Fragment>
      <Outter>
        <MyHeader>My List</MyHeader>
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
