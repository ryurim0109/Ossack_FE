import React from "react";
import styled from "styled-components";
import { Bar } from "../components/shared/home";
import {
  MyHeader,
  MyProfile,
  MyContent,
  MyLogout,
} from "../components/my/index";

const MyPage = (props) => {
  return (
    <React.Fragment>
      <MyHeader>마이 페이지</MyHeader>
      <Outter>
        <MyProfile />
        <MyContent />
        <MyLogout />
      </Outter>
      <Bar />
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default MyPage;
