import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Text } from "../../elements/index";
import { history } from "../../redux/configStore";
import { useSelector } from "react-redux";
//아이콘
import { ReactComponent as Heart } from "../../assets/favourite.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as User } from "../../assets/user.svg";

function Bar() {
  const gnbClick = (e, gnbname) => {
    if (gnbname === "home") {
      history.push("/main");
    } else if (gnbname === "officemap") {
      history.push("/officemap");
    } else if (gnbname === "like") {
      history.push("/like");
    } else if (gnbname === "mypage") {
      history.push("/mypage");
    }
  };
  const router = useSelector((state) => state.router.location.pathname);
  const [params, setParams] = useState(window.location.pathname);

  //const [activeNav, setActiveNav] = useState(1);
  useEffect(() => {
    setParams(router);
  }, [router]);
  return (
    <React.Fragment>
      <Container>
        <Grid
          _onClick={(e) => {
            gnbClick(e, "home");
          }}
          width="25%"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid width="24px" height="24px">
            {params === "/main" ? (
              <Home fill="none" stroke="#3E00FF" />
            ) : (
              <Home fill="none" stroke="#BEBDC4" />
            )}
          </Grid>
          <Text
            cursor="pointer"
            color={params === "/main" ? "#3E00FF" : "#BEBDC4"}
            size="12px"
          >
            홈
          </Text>
          <div />
        </Grid>
        <Grid
          _onClick={(e) => {
            gnbClick(e, "officemap");
          }}
          width="25%"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid width="24px" height="24px">
            {params.includes("/officemap") ||
            params.includes("/map") ||
            params.includes("/search") ||
            params.includes("/detail") ? (
              <Search fill="none" stroke="#3E00FF" />
            ) : (
              <Search fill="none" stroke="#BEBDC4" />
            )}
          </Grid>
          <Text
            cursor="pointer"
            color={
              params.includes("/officemap") ||
              params.includes("/map") ||
              params.includes("/search") ||
              params.includes("/detail")
                ? "#3E00FF"
                : "#BEBDC4"
            }
            size="12px"
          >
            탐색
          </Text>
          <div />
        </Grid>
        <Grid
          _onClick={(e) => {
            gnbClick(e, "like");
          }}
          width="25%"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid width="24px" height="24px">
            {params === "/like" ? (
              <Heart fill="none" stroke="#3E00FF" />
            ) : (
              <Heart fill="none" stroke="#BEBDC4" />
            )}
          </Grid>
          <Text
            cursor="pointer"
            color={params === "/like" ? "#3E00FF" : "#BEBDC4"}
            size="12px"
          >
            찜
          </Text>
        </Grid>
        <Grid
          _onClick={(e) => {
            gnbClick(e, "mypage");
          }}
          width="25%"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid width="24px" height="24px">
            {params === "/mypage" ? (
              <User fill="none" stroke="#3E00FF" />
            ) : (
              <User fill="none" stroke="#BEBDC4" />
            )}
          </Grid>
          <Text
            cursor="pointer"
            color={params === "/mypage" ? "#3E00FF" : "#BEBDC4"}
            size="12px"
          >
            마이페이지
          </Text>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  margin: 0%;
  width: 100%;
  padding: 0 16px;
  background: #fff;
  height: 58px;
  overflow-y: auto;
  position: fixed;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px -2px 50px rgba(0, 0, 0, 0.05);
`;
export default Bar;
