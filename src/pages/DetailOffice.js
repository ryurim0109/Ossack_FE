import React from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { OneMap } from "../components/map/index";
import { Grid, Image, Text, Button } from "../elements/index";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { history } from "../redux/configStore";
import { SlickSlider } from "../components/shared/home";
import Bar from "../components/shared/Bar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../shared/css/dot.css";

const DetailOffice = () => {
  const estateid = useParams().estateId;
  //   const list = useSelector((state) => state.search.list);
  //   const officeData = list?.filter((a) => a.estateid === +estateid);

  return (
    <React.Fragment>
      <MyHeader>매물번호 {estateid}</MyHeader>
      <Grid bg="#F5F5F5" minHeight="1556px">
        <Grid height="400px" bg="#fff" margin="0 0 10px 0">
          <Grid
            width="100%"
            margin="16px 0"
            height="235px"
            bg="#999"
            borderRadius="8px"
            position="relative"
            overflow="hidden"
          >
            <Grid>
              <SlickSlider>
                <Image
                  padding="235px"
                  bottom="0"
                  src="https://velog.velcdn.com/images/ryurim0109/post/aa1c2d4c-3f28-4549-9c63-b1aeb96073a6/image.jpg"
                  shape="rectangle"
                  position="absolute"
                />
                <Image
                  padding="235px"
                  bottom="0"
                  src="https://velog.velcdn.com/images/ryurim0109/post/47929a13-bcc8-4e8a-a8a6-312c9db12651/image.jpg"
                  shape="rectangle"
                  position="absolute"
                />
                <Image
                  padding="235px"
                  bottom="0"
                  src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg"
                  shape="rectangle"
                  position="absolute"
                />
              </SlickSlider>
              <Button
                is_like
                position="absolute"
                right="8px"
                top="8px"
                color="#fff"
              />
            </Grid>
          </Grid>

          <Grid
            bottom="0"
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="70px"
          >
            <Text color="#000000" size="0.875rem" border="1px solid red">
              트리플 역세권 사무실
            </Text>
            <Text color="#000000" size="0.875rem">
              <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
            </Text>
            <Text color="#0055FF" size="0.875rem">
              권리금 없음
            </Text>
          </Grid>
          <Grid
            bottom="0"
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="60px"
          >
            <Grid display="flex" flexDirection="column" justifyContent="center">
              <Span style={{ margin: "0 5px 5px 0" }}>
                <Ssp color="#90969D" size="0.700rem">
                  미사역, 도보 8분
                </Ssp>
              </Span>
              <Span>
                <Ssp color="#90969D" size="0.700rem">
                  매물번호 9999999
                </Ssp>
              </Span>
            </Grid>
          </Grid>
        </Grid>

        {/* 상세정보 */}
        <Grid height="200px" bg="#fff" margin="0 0 10px 0">
          <Grid
            bottom="0"
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="200px"
          >
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              border="1px solid red"
              padding="16px 0"
            >
              <Bp>상세정보</Bp>
            </Grid>
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              border="1px solid red"
            >
              <Grid display="flex" margin="0 0 10px" border="1px solid red">
                <P>건물층 / 해당층</P>
                <Sp>15층 / 2층</Sp>
              </Grid>
              <Grid display="flex" margin="0 0 10px" border="1px solid red">
                <P>전용 / 공급면적</P>
                <Sp>4평 / 137평</Sp>
              </Grid>
              <Grid display="flex" margin="0 0 10px" border="1px solid red">
                <P>엘레베이터</P>
                <Sp>2대</Sp>
              </Grid>
              <Grid display="flex" margin="0 0 10px" border="1px solid red">
                <P>즉시입주가능</P>
                <Sp>협의가능</Sp>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 중개사 코멘트 */}
        <Grid
          height="600px"
          bg="#fff"
          margin="0 0 10px 0"
          border="1px solid red"
        >
          <Grid
            bottom="0"
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="460px"
          >
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              border="1px solid red"
              padding="16px 0"
            >
              <Bp>중개사 코멘트</Bp>
            </Grid>
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              border="1px solid red"
            >
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>강남역 10분, 역삼역 도보 12분, 신논현역 도보 15분</Text>
                <Ssp>지하철역 도보 15분 이내의 트리플</Ssp>
              </Grid>
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>
                  ◎해당 사무소는 공인중개사 자격증을 갖춘 인원으로만 구성되어
                  있습니다.
                </Text>
              </Grid>
              <Grid margin="0 0 20px" border="1px solid red">
                <Text>◎직접 방문 후 촬영한 100% 실매물 현장사진</Text>
              </Grid>
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>◼넓은 실내 구조</Text>
              </Grid>
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>◼한층 전체 단독사용</Text>
              </Grid>
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>◼분리공간 있음</Text>
              </Grid>
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>◼내부 화장실 남녀 분리 완비</Text>
              </Grid>
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>◼교동사거리, 매교역 인근으로 출퇴근 편리</Text>
              </Grid>
              <Grid margin="0 0 10px" border="1px solid red">
                <Text>
                  ◼분당선 도보 3분내 정류장을 통한 1호선 및 분당선 이용가능
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 위치 */}

        <Grid
          bottom="0"
          //padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="260px"
          // border="1px solid red"
          bg="#fff"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            // border="1px solid red"
            padding="16px 0"
            bg="#fff"
          >
            <Grid margin="0 0 10px" border="1px solid red">
              <Bp style={{ padding: "3px 16px" }}>위치</Bp>
              <Sp style={{ padding: "0 16px" }}> 서울시 강남구 대치동 </Sp>
            </Grid>
            <OneMap />
          </Grid>
        </Grid>
      </Grid>
      <Bar />
    </React.Fragment>
  );
};
const DetailWrap = styled.div`
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  padding: 0 16px;
`;

const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
`;

const Span = styled.span`
  font-size: 0.625rem;
`;

const P = styled.p`
  font-weight: bold;
  width: 40%;
  color: #000;
  font-size: 0.975rem;
`;

const Sp = styled.p`
  width: 60%;
  color: #000;
  font-size: 0.975rem;
`;

const Bp = styled.p`
  font-weight: bold;
  width: 60%;
  color: #000;
  font-size: 1.2rem;
`;

const Ssp = styled.p`
  width: 60%;
  color: #ccc;
  font-size: 0.7rem;
`;

export default DetailOffice;

// {/* <OneMap estateid={estateid} /> */}
//       <DetailWrap>
//         {/* 맵돌리기 */}
//         <Grid
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           _onClick={() => {
//             history.push(`/detail/${estateid}/`);
//           }}
//         >
//           <Grid
//             width="25%"
//             height="70px"
//             margin="0 5% 0 0"
//             overflow="hidden"
//             borderRadius="8px"
//           >
//             <Image
//               src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg"
//               shape="rectangle"
//             />
//           </Grid>
//           <Grid
//             width="80%"
//             height="70px"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//           >
//             <Text bold size="0.625rem">
//               초역세권 텍스트
//             </Text>
//             <Text bold size="0.875rem">
//               트리플역세권사무실(광희동,장충동)
//             </Text>
//             <Text size="0.625rem">초역세권 텍스트</Text>
//           </Grid>
//         </Grid>
//         {/* 맵돌리기 */}
//       </DetailWrap>
