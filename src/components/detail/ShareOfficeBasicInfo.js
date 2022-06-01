import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Grid } from "../../elements/index";

const OfficeBasicInfo = () => {
  const getOneShareOffice = useSelector(
    (state) => state.office.one_share_office
  );

  return (
    <React.Fragment>
      <Grid height="250px" bg="#fff" margin="0 0 10px 0">
        <Grid
          bottom="0"
          padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="210px"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="16px 0"
          >
            <Bp>기본정보</Bp>
          </Grid>
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CenterInner>
              <P>⏰ 이용시간</P>
              <Sp>
                {getOneShareOffice?.time ? getOneShareOffice?.time : "연중무휴"}
              </Sp>
            </CenterInner>
            <CenterInner>
              <P>🗓 이용기간</P>
              <Sp>
                {getOneShareOffice?.minimum_days
                  ? getOneShareOffice?.minimum_days
                  : "개별문의"}
              </Sp>
            </CenterInner>
            <CenterInner>
              <P>📌 건물층/해당층</P>
              <Sp>
                {getOneShareOffice?.floor
                  ? getOneShareOffice?.floor
                  : "개별문의"}
              </Sp>
            </CenterInner>
            <CenterInner>
              <P>🚗 주차장</P>
              <Sp>
                {getOneShareOffice?.parking !== "월 -원"
                  ? getOneShareOffice?.parking
                  : "무료주차"}
              </Sp>
            </CenterInner>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const P = styled.p`
  font-weight: bold;
  width: 40%;
  color: #000;
  font-size: 0.975rem;
`;

const Sp = styled.p`
  width: 60%;
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Bp = styled.p`
  font-weight: bold;
  width: 60%;
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const CenterInner = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
`;
export default OfficeBasicInfo;
