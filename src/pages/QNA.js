import React from "react";
import { Accordion, Bar } from "../components/shared/home";
import { MyHeader } from "../components/my/index";

const QNA = () => {
  const contents = (
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur
      reiciendis excepturi deserunt dolores, at quae? Odit veniam libero,
      incidunt in illo eius praesentium quia rerum eaque illum perspiciatis
      sint.
    </p>
  );
  return (
    <React.Fragment>
      <MyHeader> 자주 묻는 질문</MyHeader>
      <Accordion title="#1 아코디언" contents={contents} />
      <Accordion title="#2 아코디언" contents={contents} />
      <Accordion title="#3 아코디언" contents={contents} />
      <Bar />
    </React.Fragment>
  );
};
export default QNA;
