import React from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import eventImg from "../assets/eventImg.png";
import eventBg from "../assets/eventbg.png";

const Event = () => {
  return (
    <React.Fragment>
      <MyHeader>이벤트</MyHeader>
      <Outter>
        <Inner
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdZy-5M5ckomAUZt-aTh6mtfmHMtqoHmU8I1L3frJ9GWjpjiw/viewform",
              "_blank"
            );
          }}
        >
          <img src={eventImg} alt="이벤트 사진" />
        </Inner>
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${eventBg});
`;
const Inner = styled.div`
  width: 100%;
  height: 510px;
  position: absolute;
  top: 57px;
  cursor: pointer;
`;
export default Event;
