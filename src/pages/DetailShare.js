import React, { useEffect } from "react";
import { ReactComponent as Heart } from "../assets/favourite.svg";
import styled from "styled-components";
import { OneMap } from "../components/map/index";
import { Grid, Button, Text } from "../elements/index";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Bar, LoadSpinner } from "../components/shared/home";
import { actionCreators as officeActions } from "../redux/modules/office";
import {
  ShareOfficeBasicInfo,
  ShareOfficeBtmInfo,
  ShareOfficeImage,
  ShareOfficeCmntInfo,
  ShareOfficeAgentInfo,
} from "../components/detail/index";

const DetailShare = () => {
  const dispatch = useDispatch();
  const shareofficeid = useParams().shareofficeid;
  const getOneShareOffice = useSelector(
    (state) => state.office.one_share_office
  );
  //console.log("getOneShareOffice : ", getOneShareOffice);
  const router = useSelector((state) => state.router.location.search);
  const dong = router?.split("=")[1];
  const is_loaded = useSelector((state) => state.office.is_loaded);

  useEffect(() => {
    //console.log(shareofficeid);
    dispatch(officeActions.getOneShareOfficeDB(shareofficeid));
  }, [shareofficeid]);

  return (
    <React.Fragment>
      <Header>
        <Grid width="28px" display="flex" alignItems="center">
          <Button
            is_back
            _onClick={() => {
              window.location.replace(`/map/shareoffice?query=${dong}`);
            }}
          />
        </Grid>
        <Grid
          width="248px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="18px" bold cursor="pointer">
            {getOneShareOffice?.dong ? getOneShareOffice?.dong : null}
          </Text>
        </Grid>
        <Grid
          width="28px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {getOneShareOffice?.mylike ? (
            <Button
              backgroundColor="none"
              _onClick={() => {
                dispatch(
                  officeActions.oneShareDeleteLikeDB(
                    getOneShareOffice.shareofficeid
                  )
                );
              }}
            >
              <Heart stroke="none" />
            </Button>
          ) : (
            <Button
              backgroundColor="none"
              _onClick={() => {
                dispatch(
                  officeActions.oneShareClickLikeDB(
                    getOneShareOffice.shareofficeid
                  )
                );
              }}
            >
              <Heart stroke="#111" fill="none" />
            </Button>
          )}
        </Grid>
      </Header>
      <Outter>
        <Grid bg="#F5F5F5" minHeight="1540px" paddingBottom="90px">
          <Grid height="400px" bg="#fff">
            <ShareOfficeImage />
            <ShareOfficeBtmInfo />
          </Grid>

          {/* 상세정보 */}
          <ShareOfficeBasicInfo />

          {/* 중개사 코멘트 */}
          <ShareOfficeCmntInfo />

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
                <Sp style={{ padding: "0 16px" }}>
                  {" "}
                  {getOneShareOffice?.detail_address === getOneShareOffice?.name
                    ? getOneShareOffice?.address
                    : getOneShareOffice?.detail_address}{" "}
                </Sp>
              </Grid>
              <OneMap shareofficeid={shareofficeid}></OneMap>
            </Grid>
          </Grid>
          <ShareOfficeAgentInfo />
        </Grid>
      </Outter>
      {!is_loaded && <LoadSpinner />}
      <Bar />
    </React.Fragment>
  );
};
const Header = styled.div`
  width: 100%;
  height: 56px;
  background-color: #fff;
  padding: 0 16px;
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
  top: 56px;
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
export default DetailShare;
