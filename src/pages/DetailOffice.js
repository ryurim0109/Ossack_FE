import React, { useEffect } from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { OneMap } from "../components/map/index";
import { Grid, Image, Text, Button } from "../elements/index";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import { SlickSlider } from "../components/shared/home";
import Bar from "../components/shared/Bar";
import { actionCreators as officeActions } from "../redux/modules/office";

const DetailOffice = () => {
  const dispatch = useDispatch();
  const estateid = useParams().estateId;
  const getOneOffice = useSelector((state) => state.office.one_office);
  console.log("getOneOffice : ", getOneOffice);

  // const getImage = getOneOffice.images.map((images) => images);
  // console.log("getImage : ", getImage);

  //const list = useSelector((state) => state.search.list);
  // console.log("list : ", list);
  //   const officeData = list?.filter((a) => a.estateid === +estateid);

  // const buildingDetail = getOneOffice?.buildingDetail.split("\n").map((v) => v);
  // console.log("buildingDetail : ", buildingDetail);

  useEffect(() => {
    console.log(estateid);
    dispatch(officeActions.getOneOfficeDB(estateid));
  }, [estateid]);

  return (
    <React.Fragment>
      <MyHeader>매물번호 {estateid}</MyHeader>
      <Grid bg="#F5F5F5" minHeight="1540px" paddingBottom="90px">
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
                {getOneOffice?.images &&
                  getOneOffice?.images?.map((image, idx) => {
                    return (
                      <Image
                        key={idx}
                        padding="235px"
                        bottom="0"
                        src={image}
                        shape="rectangle"
                        position="absolute"
                      />
                    );
                  })}
              </SlickSlider>
              {/* {getOneOffice?.mylike ? (
                <Button
                  fill_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#FF0000"
                  _onClick={() =>
                    dispatch(officeActions.deleteLikeDB(estateid))
                  }
                />
              ) : (
                <Button
                  is_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#fff"
                  _onClick={() => dispatch(officeActions.clickLikeDB(estateid))}
                />
              )} */}
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
            <Text color="#000000" size="0.875rem">
              {getOneOffice?.type ? getOneOffice?.type : "트리플 역세권 사무실"}
            </Text>
            <Text color="#000000" size="0.875rem">
              <Span>
                {getOneOffice?.monthly ? getOneOffice?.monthly : null}
              </Span>{" "}
              {getOneOffice?.rent_fee ? getOneOffice?.rent_fee : 200}만{""}
              <Span>보증금</Span>
              {getOneOffice?.deposit ? getOneOffice?.deposit : " 3,000만"}
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
                  {getOneOffice?.buildingInfo
                    ? getOneOffice?.buildingInfo
                    : "미사역, 도보 8분"}
                </Ssp>
              </Span>
              <Span>
                <Ssp color="#90969D" size="0.700rem">
                  매물번호 {estateid ? estateid : null}
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
              padding="16px 0"
            >
              <Bp>상세정보</Bp>
            </Grid>
            <Grid display="flex" flexDirection="column" justifyContent="center">
              <Grid display="flex" margin="0 0 10px">
                <P>건물층 / 해당층</P>
                <Sp>
                  {getOneOffice?.buildingFloor
                    ? getOneOffice?.buildingFloor
                    : "15층"}
                  층 /{" "}
                  {getOneOffice?.roomFloor ? getOneOffice?.roomFloor : "2층"}층
                </Sp>
              </Grid>
              <Grid display="flex" margin="0 0 10px">
                <P>공급면적</P>
                <Sp>{getOneOffice?.area ? getOneOffice?.area : null}</Sp>
              </Grid>
              <Grid display="flex" margin="0 0 10px">
                <P>엘레베이터</P>
                <Sp>2대</Sp>
              </Grid>
              <Grid display="flex" margin="0 0 10px">
                <P>즉시입주가능</P>
                <Sp>협의가능</Sp>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 중개사 코멘트 */}
        <Grid height="500px" bg="#fff" margin="0 0 10px 0" overflow="scroll">
          <Grid
            bottom="0"
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="898px"
          >
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              padding="16px 0"
              height="70px"
            >
              <Bp>중개사 코멘트</Bp>
            </Grid>
            <Grid display="flex" flexDirection="column" justifyContent="center">
              <Grid height="40px">
                <Text>강남역 10분, 역삼역 도보 12분, 신논현역 도보 15분</Text>
                <Ssp>지하철역 도보 15분 이내의 트리플</Ssp>
              </Grid>
              <Grid height="40px">
                <Text>
                  ◎해당 사무소는 공인중개사 자격증을 갖춘 인원으로만 구성되어
                  있습니다.
                </Text>
              </Grid>
              <Grid height="40px">
                <Text>◎직접 방문 후 촬영한 100% 실매물 현장사진</Text>
              </Grid>

              <Grid>
                <Text>
                  {/* {" "} */}
                  {getOneOffice?.buildingDetail
                    ?.split("\n")
                    .map((line, idx) => {
                      return (
                        <div key={idx}>
                          {line} <br />
                        </div>
                      );
                    })}
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
          height="340px"
          bg="#fff"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="16px 0"
            bg="#fff"
            minHeight="330px"
          >
            <Grid margin="0 0 10px" height="55px">
              <Bp style={{ padding: "3px 16px" }}>위치</Bp>
              <Sp style={{ padding: "0 16px" }}> {getOneOffice?.address} </Sp>
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
