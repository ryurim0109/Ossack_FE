import React from "react";
import { Button, Grid, Text } from "../../elements/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyContent = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Inner>
        <Grid
          width="100%"
          height="180px"
          padding="0 16px"
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            _onClick={() => {
              navigate("/mypage/profile");
            }}
          >
            <Grid display="flex" alignItems="center">
              <Text size="16px" cursor="pointer">
                프로필 변경
              </Text>
            </Grid>
            <Button is_right />
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            _onClick={() => {
              navigate("/mypage/notice");
            }}
          >
            <Grid display="flex" alignItems="center">
              <Text size="16px" cursor="pointer">
                공지사항
              </Text>
            </Grid>
            <Button is_right />
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            _onClick={() => {
              navigate("/mypage/qna");
            }}
          >
            <Grid display="flex" alignItems="center">
              <Text size="16px" cursor="pointer">
                자주 묻는 질문
              </Text>
            </Grid>
            <Button is_right />
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            _onClick={() => {
              navigate("/mypage/member");
            }}
          >
            <Grid display="flex" alignItems="center">
              <Text size="16px" cursor="pointer">
                팀원 소개
              </Text>
            </Grid>
            <Button is_right />
          </Grid>
        </Grid>
      </Inner>
    </React.Fragment>
  );
};
const Inner = styled.div`
  position: relative;
  top: 60px;
`;
export default MyContent;
