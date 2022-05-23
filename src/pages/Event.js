import React from "react";
import { Grid } from "../elements/index";
import styled from "styled-components";
import eventImg from "../assets/eventImg.png";

const Event = () => {
  return (
    <React.Fragment>
      <Grid width="100%" height="510px">
        <img src={eventImg} alt="이벤트 사진" />
      </Grid>
    </React.Fragment>
  );
};

export default Event;
