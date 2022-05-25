import React, { useEffect } from "react";
import styled from "styled-components";
import { OneMap } from "../components/map/index";
import { Grid, Text, Button } from "../elements/index";
import { useParams } from "react-router-dom";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import Bar from "../components/shared/Bar";
import { actionCreators as officeActions } from "../redux/modules/office";
import { ReactComponent as Heart } from "../assets/favourite.svg";
import {
  OfficeImage,
  OfficeBtmInfo,
  OfficeBasicInfo,
  OfficeCmntInfo,
  OfficeAgentInfo,
} from "../components/detail/index";

const DetailOffice = () => {
  const dispatch = useDispatch();
  const estateid = useParams().estateId;
  const getOneOffice = useSelector((state) => state.office.one_office);
  //console.log("getOneOffice : ", getOneOffice);

  // const getImage = getOneOffice.images.map((images) => images);
  // console.log("getImage : ", getImage);

  //const list = useSelector((state) => state.search.list);
  // console.log("list : ", list);
  //   const officeData = list?.filter((a) => a.estateid === +estateid);

  // const buildingDetail = getOneOffice?.buildingDetail.split("\n").map((v) => v);
  // console.log("buildingDetail : ", buildingDetail);

  useEffect(() => {
    //console.log(estateid);
    dispatch(officeActions.getOneOfficeDB(estateid));
  }, [estateid]);

  return (
    <React.Fragment>
      <Header>
        <Grid width="28px" display="flex" alignItems="center">
          <Button
            is_back
            _onClick={() => {
              history.push("/main");
            }}
          />
        </Grid>
        <Grid
          width="90%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="18px" bold cursor="pointer">
            매물번호 {estateid}
          </Text>
        </Grid>
        <Grid
          width="28px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {getOneOffice?.mylike ? (
            <Button
              backgroundColor="none"
              _onClick={() => {
                dispatch(officeActions.oneDeleteLikeDB(getOneOffice.estateid));
              }}
            >
              <Heart stroke="none" />
            </Button>
          ) : (
            <Button
              backgroundColor="none"
              _onClick={() => {
                dispatch(officeActions.oneClickLikeDB(getOneOffice.estateid));
              }}
            >
              <Heart stroke="#111" fill="none" />
            </Button>
          )}
        </Grid>
      </Header>
      <Outter>
        <Grid bg="#F5F5F5" minHeight="1540px" paddingBottom="90px">
          <Grid height="400px" bg="#fff" margin="0 0 10px 0">
            <OfficeImage />
            <OfficeBtmInfo />
          </Grid>

          {/* 상세정보 */}
          <OfficeBasicInfo />

          {/* 중개사 코멘트 */}
          <OfficeCmntInfo />

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
          <OfficeAgentInfo />
        </Grid>
      </Outter>
      <Bar />
    </React.Fragment>
  );
};
const Header = styled.div`
  width: 100%;
  height: 56px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
const Outter = styled.div`
  width: 100%;
  position: relative;
  top: 80px;
  padding-bottom: 60px;
`;

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
