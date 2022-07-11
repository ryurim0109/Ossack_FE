import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Grid } from "../../elements/index";
import { RootState } from "../../redux/configStore";

const OfficeBasicInfo = () => {
  const getOneOffice = useSelector((state:RootState) => state.office.one_office);

  return (
    <React.Fragment>
      <Grid height="340px" bg="#fff" margin="0 0 10px 0">
        <Grid
          bottom="0"
          padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="300px"
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
              <P>📐공급면적</P>
              <Sp>{getOneOffice?.area ? getOneOffice?.area : null}</Sp>
            </CenterInner>
            <CenterInner>
              <P>😀가용인원</P>
              <Sp>{getOneOffice?.capacity ? getOneOffice?.capacity : null}</Sp>
            </CenterInner>
            <CenterInner>
              <P>💸 관리비</P>
              <Sp>
                {getOneOffice?.management_fee
                  ? getOneOffice?.management_fee
                  : null}
              </Sp>
            </CenterInner>
            <CenterInner>
              <P>🏢 오피스 타입</P>
              <Sp>{getOneOffice?.type ? getOneOffice?.type : null}</Sp>
            </CenterInner>
            <CenterInner>
              <P>🚽 화장실</P>
              <Sp>{getOneOffice?.toilet ? getOneOffice?.toilet : null}</Sp>
            </CenterInner>
            <CenterInner>
              <P>📌건물층 / 해당층</P>
              <Sp>
                {getOneOffice?.buildingFloor
                  ? getOneOffice?.buildingFloor
                  : "15층"}
                / {getOneOffice?.roomFloor ? getOneOffice?.roomFloor : "2층"}
              </Sp>
            </CenterInner>
            <CenterInner>
              <P>🚗 주차장</P>
              <Sp>{getOneOffice?.parking ? getOneOffice?.parking : null}</Sp>
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
