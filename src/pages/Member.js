import React from "react";
import { MyHeader } from "../components/my/index";
//멤버 이미지
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import member6 from "../assets/member6.png";
import member7 from "../assets/member7.png";
import member8 from "../assets/member8.png";
import member9 from "../assets/member9.png";
import { Grid } from "../elements/index";

const Member = () => {
  return (
    <React.Fragment>
      <MyHeader>오싹 팀원소개</MyHeader>
      <Grid width="120px" height="120px">
        <img src={member1} alt="민우" />
      </Grid>
    </React.Fragment>
  );
};

export default Member;
