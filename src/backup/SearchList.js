import React from "react";
import styled from "styled-components";
import { Bar } from "../components/shared/home";
import { MyHeader } from "../components/my/index";
import { OfficeSearchList } from "../components/like/index";

const SearchList = (props) => {
  return (
    <React.Fragment>
      <Outter>
        <MyHeader>9,999건의 오피스를 찾았습니다!!</MyHeader>
        <OfficeSearchList />
        <Bar />
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  padding-bottom: 68px;
`;

export default SearchList;
