import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../elements/index";
import { history } from "../../redux/configStore";
import SearchImg from "../../static/images/searchicon.png";
import { SaleList, HotPlaceList, Office } from "./index";

function Sale() {
  return (
    <React.Fragment>
      <Outter>
        <Grid
          width="100%"
          margin="38px 0"
          display="flex"
          justifyContent="space-between"
        >
          <Text size="1.250rem" bold cursor="pointer">
            오싹
          </Text>
          <Grid width="24px" height="24px" bg="#ccc"></Grid>
        </Grid>
        <Grid width="100%" margin="22px 0" bg="#c4c4c4">
          <Text size="1.250rem" bold>
            {" "}
            @@@님 어떤 🏢오피스를 <br />
            찾고 계시나요?
          </Text>
        </Grid>
        <Grid width="100%" margin="16px 0" position="relative">
          <Grid width="50px" position="absolute" top="12px" left="10px">
            <img src={SearchImg} alt="검색" />
          </Grid>
          <Grid
            width="100%"
            height="48px"
            border="1px solid #111"
            textIn="40px"
            display="flex"
            cursor="pointer"
            alignItems="center"
            color="#999"
            borderRadius="10px"
            _onClick={() => {
              history.push("/search");
            }}
          >
            장소, 주소, 건물명을 입력하세요.
          </Grid>
        </Grid>
        {/* 오피스구해요 박스 */}
        <SaleList />
        <Grid
          margin="24px 0 0 0 "
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Text bold size="1.250rem" cursor="pointer">
            성수동 근처추천 오피스 📍{" "}
          </Text>
          <Grid width="50px" fontSize="0.750rem" cursor="pointer">
            내 위치
          </Grid>
        </Grid>
        <Office />
        {/* 핫한 오피스 */}
        <Grid
          margin="18px 0 0 0 "
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Text bold size="1.250rem" cursor="pointer">
            지금 가장 HOT한 오피스 🔥{" "}
          </Text>
          <Grid
            width="60px"
            fontSize="0.750rem"
            color="#828282"
            cursor="pointer"
          >
            전체보기
          </Grid>
        </Grid>
        <HotPlaceList />
      </Outter>
    </React.Fragment>
  );
}
const Outter = styled.div`
  width: 100%;
  position: relative;
  padding: 0 16px 0px 16px;
`;
export default Sale;
