import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Grid, Text } from "../../elements/index";
import { useParams } from "react-router-dom";

const OfficeBottomInfo = () => {
  const getOneShareOffice = useSelector(
    (state) => state.office.one_share_office
  );
  const shareofficeid = useParams().shareofficeid;

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
          width="79px"
          height="22px"
          borderRadius="100px"
          border="1px  solid #3E00FF"
          bg="#3E00FF"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Sp style={{ color: "#fff" }}>공유 오피스</Sp>
        </Grid>
        <TopSp>
          {getOneShareOffice?.name ? getOneShareOffice?.name : null}
        </TopSp>
        <Text color="#111" size="0.875rem">
          <Span>
            {getOneShareOffice?.name ? getOneShareOffice?.name : null}
          </Span>
          <Span></Span>
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
        <CenterInner>
          <Ssp>월이용료 </Ssp>
          <Text color="#3E00FF" size="14px" bold>
            {getOneShareOffice?.price ? getOneShareOffice?.price : null}
          </Text>
        </CenterInner>
        <CenterInner>
          <Ssp>보증금</Ssp>
          <Text color="#3E00FF" size="14px" bold>
            개별문의
          </Text>
        </CenterInner>
      </Grid>
    </React.Fragment>
  );
};

const Span = styled.span`
  //font-size: 0.625rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const Sp = styled.p`
  width: 55px;
  color: #000;
  //font-size: 0.975rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Ssp = styled.p`
  padding: 5px 0;
  width: 20%;
  color: #999;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const TopSp = styled.p`
  padding: 5px 0;
  width: 100%;
  color: #999;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const CenterInner = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  /* margin: 0 0 13px; */
  align-items: center;
`;
export default OfficeBottomInfo;
