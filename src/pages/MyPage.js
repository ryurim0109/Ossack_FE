import React from "react";
import styled from "styled-components";
import { Bar, NotUser } from "../components/shared/home";
import {
  MyHeader,
  MyProfile,
  MyContent,
  MyLogout,
} from "../components/my/index";
import { useSelector } from "react-redux";

const MyPage = (props) => {
  const login = useSelector((state) => state.user.is_login);
  const is_session = localStorage.getItem("token");

  if (!login || !is_session) {
    return (
      <React.Fragment>
        <NotUser />
      </React.Fragment>
    );
  } else {
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
  }
};
const Outter = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 70px;
`;
export default MyPage;
