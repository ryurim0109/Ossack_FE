import React from "react";
import { Button, Grid, Text } from "../../elements/index";
import { history } from "../../redux/configStore";

const MyContent = () => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        height="135px"
        padding="0 16px"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid display="flex" alignItems="center" justifyContent="space-between">
          <Grid
            display="flex"
            alignItems="center"
            _onClick={() => {
              history.push("/mypage/notice");
            }}
          >
            <Text size="16px" cursor="pointer">
              공지사항
            </Text>
          </Grid>
          <Button is_right />
        </Grid>
        <Grid display="flex" alignItems="center" justifyContent="space-between">
          <Grid
            display="flex"
            alignItems="center"
            _onClick={() => {
              history.push("/mypage/qna");
            }}
          >
            <Text size="16px" cursor="pointer">
              자주 묻는 질문
            </Text>
          </Grid>
          <Button is_right />
        </Grid>
        <Grid display="flex" alignItems="center" justifyContent="space-between">
          <Grid
            display="flex"
            alignItems="center"
            _onClick={() => {
              history.push("/mypage/member");
            }}
          >
            <Text size="16px" cursor="pointer">
              팀원 소개
            </Text>
          </Grid>
          <Button is_right />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MyContent;
