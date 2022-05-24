import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { Bar } from "../components/shared/home";
import { Grid, Image, Button, Text } from "../elements/index";
import { ReactComponent as ProEdit } from "../assets/pro_edit.svg";

import { useSelector, useDispatch } from "react-redux";
import defaultImg from "../assets/default.png";
import Swal from "sweetalert2";
import { actionCreators as userActions } from "../redux/modules/user";

const EditProfile = () => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);
  const [nickname, setNickname] = useState(user_info?.nickname);
  useEffect(() => {
    dispatch(userActions.loginCheckApi());
  }, [dispatch]);
  //사진 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  };
  const changeNickname = (e) => {
    setNickname(e.target.value);
  };
  const editProfile = () => {
    let maxSize = 3 * 1024 * 1024;
    let fileSize = image.size;
    console.log(fileSize);
    if (fileSize > maxSize) {
      Swal.fire("첨부파일 사이즈는 3MB 이내로 등록 가능합니다.");
      return false;
    }
    if (!nickname) {
      /*  if (!nicknameCheck(nickname)) {
      Swal.fire({
        title: "닉네임은 2글자 ~ 8글자에서 정해주세요!",
        showCancelButton: false,
        confirmButtonText: "네",
      });
    }  */
      dispatch(
        userActions.editProfileDB(
          user_info.nickname,
          image,
          user_info?.imageUrl
        )
      );
    } else {
      dispatch(userActions.editProfileDB(nickname, image, user_info?.imageUrl));
    }
  };
  const ImgDelete = () => {
    if (!nickname) {
      /*  if (!nicknameCheck(nickname)) {
        Swal.fire({
          title: "닉네임은 2글자 ~ 8글자에서 정해주세요!",
          showCancelButton: false,
          confirmButtonText: "네",
        });
      }  */
      dispatch(
        userActions.userImgDeleteDB(
          user_info.nickname,
          image,
          user_info?.imageUrl
        )
      );
    } else {
      dispatch(
        userActions.userImgDeleteDB(nickname, image, user_info?.imageUrl)
      );
    }
  };
  return (
    <React.Fragment>
      <MyHeader>프로필 변경</MyHeader>
      <Outter>
        <Grid
          width="100%"
          margin="40px 0 0"
          height="154px"
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
        >
          {/* 프로필 이미지 부분 */}
          <Grid
            width="100%"
            display="flex"
            justifyContent="center"
            position="relative"
            height="112px"
          >
            <Image
              border="2px solid #F3F3F3"
              type="circle"
              size="112"
              src={
                preview
                  ? preview
                  : user_info?.imageUrl
                  ? user_info?.imageUrl
                  : defaultImg
              }
            />
            <label htmlFor="file_input" className="upload-box">
              <ProEdit />
            </label>
          </Grid>
          <input
            type="file"
            id="file_input"
            accept="image/jpeg, image/png, image/jpg"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
              setImage(e.target.files[0]);
            }}
            style={{ display: "none" }}
          />
        </Grid>
        {/* 닉네임 */}
        <Grid
          width="100%"
          height="76px"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="space-between"
          padding="0 16px"
        >
          <Text bold>닉네임</Text>
          <NickInput
            onChange={changeNickname}
            defaultValue={user_info?.nickname}
            type="text"
          />
        </Grid>
        {/* 사진삭제 완료 버튼 */}
        <Grid
          width="100%"
          height="94px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          padding="0 16px"
        >
          <Text
            bold
            color="#3E00FF"
            borderBottom="1px solid #3E00FF"
            cursor="pointer"
            _onClick={ImgDelete}
          >
            이미지 삭제
          </Text>
          <Button color="#fff" borderRadius="8px" _onClick={editProfile}>
            완료
          </Button>
        </Grid>
      </Outter>
      <Bar />
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  top: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & label {
    position: absolute;
    width: 28px;
    height: 28px;
    bottom: 0;
    background: ${({ theme }) => theme.colors.subTitle};
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    right: 35%;
  }
`;
const NickInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkgray3};
  padding: 0 16px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.main};
  }
`;
export default EditProfile;
