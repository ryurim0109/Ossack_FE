import React from "react";
import styled from "styled-components";
import { Accordion, Bar } from "../components/shared/home";
import { MyHeader } from "../components/my/index";

const QNA = () => {
  const contents = [
    {
      title: "💡 오싹은 어떤 서비스인가요?",
      content:
        "오싹은 사무실과 공유 오피스 매물을 지도에서 모아볼 수 있도록 도와주는 서비스입니다.😊",
    },
    {
      title: "💡 공유 오피스는 무엇 인가요?",
      content:
        "공유 오피스는 업무 공간은 구분지어 사용하되, 회의실, 미팅룸, 화장실, 휴게공간 등은 공용으로 두어 관리비, 통신비 등 부대비용을 절약하고자 고안된 공간 임대 시스템입니다.",
    },
    {
      title: "💡 회원가입을 하면 어떤 점이 좋나요?",
      content: "저희 오싹 서비스를 이용하실 수 있습니다.😇",
    },
    {
      title: "💡 회원탈퇴는 어떻게 하나요?",
      content:
        "마이페이지 탭에 가셔서 하단에 보시면 회원을 탈퇴할 수 있는 버튼이 있습니다.😁",
    },
  ];

  return (
    <React.Fragment>
      <MyHeader> 자주 묻는 질문</MyHeader>
      {contents.map((c, idx) => {
        return (
          <Outter key={idx}>
            <Accordion title={c.title} contents={c.content} />
          </Outter>
        );
      })}

      <Bar />
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;
export default QNA;
