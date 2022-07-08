import React, { useEffect } from "react";
import { Grid, Image, Text } from "../../elements/index";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import defaultImg from "../../assets/default.png";
import { actionCreators as userActions } from "../../redux/modules/user";

const MyProfile = () => {
  const appDispatch = useAppDispatch();

  const user_info = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(userActions.loginCheckApi());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Inner>
        <Grid
          width="100%"
          margin="40px 0 0"
          height="180px"
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
        >
          <Grid
            width="100%"
            display="flex"
            justifyContent="center"
            position="relative"
          >
            <Image
              border="2px solid #F3F3F3"
              type="circle"
              size="112"
              src={user_info?.imageUrl ? user_info?.imageUrl : defaultImg}
            />
          </Grid>
          <Grid
            width="100%"
            display="flex"
            padding="12px 0"
            justifyContent="center"
          >
            <Text size="18px" bold>
              {user_info?.nickname ? user_info?.nickname : "게스트"}님
            </Text>
          </Grid>
          <Grid width="100%" display="flex" justifyContent="center">
            <Text size="12px" color="#666">
              {user_info?.userEmail ? user_info?.userEmail : "이메일 없음"}
            </Text>
          </Grid>
        </Grid>
      </Inner>
    </React.Fragment>
  );
};
const Inner = styled.div`
  position: relative;
  top: 80px;
`;

export default MyProfile;
