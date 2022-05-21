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
  ShareOfficeBasicInfo,
  ShareOfficeBtmInfo,
  ShareOfficeImage,
  ShareOfficeCmntInfo,
} from "../components/detail/index";

const DetailShare = () => {
  const dispatch = useDispatch();
  const shareofficeid = useParams().shareofficeid;
  const getOneShareOffice = useSelector(
    (state) => state.office.one_share_office
  );
  console.log("getOneShareOffice : ", getOneShareOffice);

  useEffect(() => {
    console.log(shareofficeid);
    dispatch(officeActions.getOneShareOfficeDB(shareofficeid));
  }, [shareofficeid]);

  return (
    <React.Fragment>
      <MyHeader>
        {getOneShareOffice?.dong ? getOneShareOffice?.dong : null}
      </MyHeader>
      <Grid bg="#F5F5F5" minHeight="1540px" paddingBottom="90px">
        <Grid height="400px" bg="#fff" margin="0 0 10px 0">
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
                {getOneShareOffice?.address}{" "}
              </Sp>
            </Grid>
            <OneMap shareofficeid={shareofficeid}></OneMap>
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
export default DetailShare;
