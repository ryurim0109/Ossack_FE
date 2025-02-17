import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Grid, Text } from "../../elements/index";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/configStore";

const OfficeBottomInfo = () => {
  const getOneOffice = useSelector((state:RootState) => state.office.one_office);
  const estateid = useParams().estateId;
  return (
    <React.Fragment>
      <Grid
        padding="0 16px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        height="70px"
      >
        <Grid
          width="56px"
          height="22px"
          borderRadius="100px"
          border="1px  solid #3E00FF"
          bg="#3E00FF"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Sp style={{ color: "#fff" }}>오피스</Sp>
        </Grid>
        <Text color="#111" size="0.875rem">
          <Span>
            {getOneOffice?.monthly !== "매매" ? getOneOffice?.monthly : null}
            {getOneOffice?.rent_fee !== "0"
              ? getOneOffice?.rent_fee + "만 / "
              : null}
          </Span>
          <Span>
            {getOneOffice?.monthly === "월세" ? "보증금" : null}
            {getOneOffice?.deposit ? getOneOffice?.deposit : " 3,000만"}
          </Span>
        </Text>
        <Text color="#3E00FF" size="18px" bold>
          권리금 없음
        </Text>
      </Grid>
      <Grid
        padding="16px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        height="75px"
      >
        <Grid>
          <Ssp>
            {getOneOffice?.subwayInfo ? getOneOffice?.subwayInfo : null}
          </Ssp>
          <Grid>
            <Ssp>매물번호 {estateid ? estateid : null}</Ssp>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Span = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const Sp = styled.p`
  width: 60%;
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Ssp = styled.p`
  padding: 5px 0;
  width: 90%;
  color: #999;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
export default OfficeBottomInfo;
