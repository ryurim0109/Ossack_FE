import React from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";

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
        ></Inner>
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fcdfdf;
`;
const Inner = styled.div`
  width: 100%;
  height: 510px;
  position: absolute;
  top: 57px;
  cursor: pointer;
`;
export default Event;
