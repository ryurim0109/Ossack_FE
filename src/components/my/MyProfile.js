import React, { useState, useEffect } from "react";
import { Button, Grid, Image, Text } from "../../elements/index";
import { ProfileModal } from "./index";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import defaultImg from "../../assets/default.png";
import { actionCreators as userActions } from "../../redux/modules/user";

const MyProfile = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const user_info = useSelector((state) => state.user.user);
  //console.log(user_info)

  // useEffect(() => {
  //   dispatch(userActions.loginCheckApi());
  // }, []);

  return (
    <React.Fragment>
      <Grid>
        <Grid
          width="100%"
          margin="40px 0"
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
            <Button
              is_edit
              position="absolute"
              top="80px"
              right="35%"
              _onClick={openModalHandler}
            />
          </Grid>
          <Grid
            width="100%"
            display="flex"
            padding="12px 0"
            justifyContent="center"
          >
            <Text size="18px" cursor="pointer" bold>
              {user_info?.nickname ? user_info?.nickname : "게스트"}님
            </Text>
          </Grid>
          <Grid width="100%" display="flex" justifyContent="center">
            <Text size="0.85rem" cursor="pointer">
              {user_info?.userEmail ? user_info?.userEmail : "이메일 없음"}
            </Text>
          </Grid>
        </Grid>
        {isOpen ? (
          <>
            <ModalBackdrop onClick={openModalHandler}></ModalBackdrop>
            <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};
const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;

export default MyProfile;
