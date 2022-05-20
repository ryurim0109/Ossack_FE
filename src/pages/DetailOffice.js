import React, { useEffect } from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { OneMap } from "../components/map/index";
import { Grid } from "../elements/index";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Bar from "../components/shared/Bar";
import { actionCreators as officeActions } from "../redux/modules/office";
import {
  OfficeImage,
  OfficeBottomInfo,
  OfficeBasicInfo,
  CommentInfo,
} from "../components/detail/index";

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
          <OfficeImage />
          <OfficeBottomInfo />
        </Grid>

        {/* 상세정보 */}
        <OfficeBasicInfo />

        {/* 중개사 코멘트 */}
        <CommentInfo />

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

const Sp = styled.p`
  width: 60%;
  color: #000;
  //font-size: 0.975rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Bp = styled.p`
  font-weight: bold;
  width: 60%;
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

export default DetailOffice;
