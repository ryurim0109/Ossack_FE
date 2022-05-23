import React from "react";
import { MyHeader } from "../components/my/index";
import mem from "../assets/member1.png";
import { Grid } from "../elements/index";

const Member = () => {
  return (
    <React.Fragment>
      <MyHeader>오싹 팀원소개</MyHeader>
      <Grid width="120px" height="120px">
        <img src={mem} alt="민우" />
      </Grid>
    </React.Fragment>
  );
};

export default Member;
