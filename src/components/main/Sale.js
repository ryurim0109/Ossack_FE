import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../../elements/index";
import { history } from "../../redux/configStore";
import { ReactComponent as Search } from "../../assets/search.svg";
import { SaleList, HotPlaceList, Office } from "./index";
import { Banner } from "../shared/home";

import { useSelector } from "react-redux";

function Sale() {
  const user_info = useSelector((state) => state.user.user);

  return (
    <React.Fragment>
      <Outter>
        <Grid width="100%" margin="50px 0 0">
          <Text size="1.250rem" bold>
            <Text color="#3E00FF" bold>
              {user_info?.nickname ? user_info?.nickname : "게스트"}님
            </Text>{" "}
            어떤 🏢오피스를 <br />
            찾고 계시나요?
          </Text>
        </Grid>
        <Grid width="100%" margin="12px 0 16px 0" position="relative">
          <Grid width="50px" position="absolute" top="12px" left="10px">
            <Search fill="none" stroke="#AFB4BE" />
          </Grid>
          <Grid
            width="100%"
            height="48px"
            textIn="40px"
            display="flex"
            bg="#F5F5F5"
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
        <Grid width="100%" display="flex" justifyContent="space-between">
          <Text bold size="1.250rem" cursor="pointer">
            텍스트 텍스트 오피스 📍
          </Text>
        </Grid>
        <Office />
      </Outter>
      <Banner />
      {/* 핫한 오피스 */}
      <Outter>
        <Grid width="100%" display="flex" justifyContent="space-between">
          <Text bold size="1.250rem" cursor="pointer">
            지금 가장 HOT한 지역 🔥
          </Text>
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
