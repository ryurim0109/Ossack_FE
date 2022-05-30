import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/index";
import { MyHeader } from "../components/my/index";
import { NotUser } from "../components/shared/home";
import eventImg from "../assets/banner02.png";
import eventBg from "../assets/eventbg.png";
import { useSelector } from "react-redux";

const Event = () => {
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
        <MyHeader is_close>이벤트</MyHeader>
        <Div>
          <Outter>
            <Bg>
              <img src={eventBg} alt="커피, 치킨" />
            </Bg>
            <Grid width="275px" height="241px" margin="24px 0 0">
              <img src={eventImg} alt="선물 이미지" />
            </Grid>
            <TextBox>
              <Text color="#FF6868"> 오싹 서비스 오픈 기념 이벤트</Text>
              <Text color="#FF6868" size="40px" bold>
                완벽하지 못해서
              </Text>
              <Text color="#FF6868" size="40px" bold>
                미안해오
              </Text>
              <p>
                오싹을 이용하시면서 찾은 버그를 저희에게 알려주세요!
                <br /> 버그를 찾은 5분에게 추첨을 통한 치킨 기프티콘이 팡팡
                <br /> 버그를 못찾았다고 아쉬워 하지마세요.{" "}
              </p>
              <p>
                설문조사에서 저희 서비스의 아쉬운점을 정성스럽게
                <br /> 작성해주신 분들에게는 추첨을 통해
                <br /> 스타벅스 기프티콘을 드립니다!!
              </p>
              <p>
                많은 참여와 관심 부탁드립니다 ❤️ (많관부)
                <br />더 좋은 서비스로 보답하겠습니다. <br />
                칭,,칭찬도 해주시면 감사하겠습니다!
              </p>
            </TextBox>
            <EventBox>
              <Grid
                display="flex"
                height="54px"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
              >
                <Title>
                  <p>이벤트 참여 방법</p>
                </Title>
                <Text size="12px">
                  이벤트 참여하기 버튼 클릭! 설문조사 폼을 작성해주세요.
                </Text>
              </Grid>
              <Grid
                display="flex"
                height="54px"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
              >
                <Title>
                  <p>이벤트 발표날짜</p>
                </Title>
                <Text size="12px">2022년 6월 1일 (수) 12:00AM</Text>
              </Grid>
              <Grid
                display="flex"
                height="54px"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
              >
                <Title>
                  <p>이벤트 참여 방법</p>
                </Title>
                <Text size="12px">
                  이벤트 참여하기 버튼 클릭! 설문조사 폼을 작성해주세요.
                </Text>
              </Grid>
              <Grid
                width="212px"
                height="40px"
                bg="#FF6868"
                borderRadius="10px"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdZy-5M5ckomAUZt-aTh6mtfmHMtqoHmU8I1L3frJ9GWjpjiw/viewform",
                    "_blank"
                  );
                }}
              >
                <Text bold color="#fff">
                  이벤트 참여하기 CLICK!
                </Text>
              </Grid>
            </EventBox>
          </Outter>
        </Div>
      </React.Fragment>
    );
  }
};
const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const Outter = styled.div`
  width: 100%;
  height: auto;
  background-color: #fcdfdf;
  position: relative;
  top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Bg = styled.div`
  position: absolute;
  top: 403px;
  width: 100%;
  height: 229px;
`;
const TextBox = styled.div`
  width: 100%;
  height: 430px;
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  text-align: center;

  & p {
    margin: 8px 0 26px 0;
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 24px;
    font-weight: 500;
  }
`;
const EventBox = styled.div`
  width: 100%;
  height: 314px;
  background-color: #fff;
  border-radius: 30px 30px 0px 0px;
  padding: 23px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  width: 120px;
  height: 30px;
  background-color: #fcdfdf;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 500;
    color: #ff6868;
  }
`;
export default Event;
