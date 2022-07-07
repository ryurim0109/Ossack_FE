import React from "react";
import styled from "styled-components";
import { Bar, NotUser } from "../components/shared/home";
import { MyHeader } from "../components/my/index";
import { LikeTab } from "../components/like/index";
import { useSelector } from "react-redux";

const Like = () => {
  // const login = useSelector((state) => state.user.is_login);
  // const is_session = localStorage.getItem("token");

  // if (!login || !is_session) {
  //   return (
  //     <React.Fragment>
  //       <NotUser />
  //     </React.Fragment>
  //   );
  // } else {
    return (
      <React.Fragment>
        <MyHeader>찜리스트</MyHeader>
        <Outter>
          <LikeTab />
        </Outter>
        <Bar />
      </React.Fragment>
    );
  }
// };
const Outter = styled.div`
  width: 100%;
  padding: 0 16px 68px 16px;
  position: relative;
  top: 80px;
`;

export default Like;
