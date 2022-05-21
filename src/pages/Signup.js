import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  Container,
} from "@mui/material/";
import styled from "styled-components";
import { Text } from "../elements/index";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import _ from "lodash";

const Signup = () => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nickNameError, setNickNameError] = useState("");
  const [signupError, setSignupError] = useState("");

  // 중복체크
  const [userEmailCurrent, setUserEmailCurrent] = useState(false);

  // 비활성화 여부
  const [userEmail, setUserEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleEmailInput = (event) => {
    setUserEmail(event.target.value);
    const userEmailCurrent = event.target.value;
    setUserEmailCurrent(userEmailCurrent);
  };

  const handleNickInput = (event) => {
    setNickname(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckPWDInput = (event) => {
    setCheckPassword(event.target.value);
  };

  const isPassedSignup = () => {
    return userEmail.includes("@") &&
      password.length >= 5 &&
      checkPassword.length >= 5 &&
      nickname.length >= 1
      ? setIsActive(true)
      : setIsActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      userEmail: data.get("userEmail"),
      nickname: data.get("nickname"),
      password: data.get("password"),
      passwordCheck: data.get("passwordCheck"),
    };
    const { userEmail, nickname, password, passwordCheck } = joinData;

    // 이메일 유효성 체크
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(userEmail))
      setEmailError("올바른 이메일 형식이 아닙니다.");
    else setEmailError("");

    // 비밀번호 유효성 체크
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password))
      setPasswordState(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    else setPasswordState("");

    // 비밀번호 같은지 체크
    if (password !== passwordCheck)
      setPasswordError("비밀번호가 일치하지 않습니다.");
    else setPasswordError("");

    // 이름 유효성 검사
    const nicknameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nicknameRegex.test(nickname) || nickname.length < 1)
      setNickNameError("올바른 이름을 입력해주세요.");
    else setNickNameError("");

    if (
      emailRegex.test(userEmail) &&
      passwordRegex.test(password) &&
      password === passwordCheck &&
      nicknameRegex.test(nickname)
      // &&checked
    ) {
      dispatch(userActions.signUpApi(joinData));
    }
  };

  // 이메일 중복확인 체크
  // const checkDup = useCallback(
  //   _.debounce((userEmail) => {
  //     dispatch(userActions.checkDupDB(userEmail, setDup));
  //   }, 1000),
  //   []
  // );
  const checkDup = () => {
    dispatch(userActions.userEmailCheckDB(userEmail));
  };

  const style = {
    "& label.Mui-focused": {
      color: "#3E00FF",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#3E00FF",
      },
    },
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Grid display="flex" flexDirection="column" component="h1" variant="h5">
          <Text size="1.250rem" bold>
            <Text color="#3E00FF" bold>
              오싹
            </Text>{" "}
            서비스 이용을 위해 <br />
            회원가입을 해주세요.
          </Text>
        </Grid>
        <Boxs
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <FormControl component="fieldset" variant="standard">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  label="이메일"
                  error={emailError !== "" || false}
                  sx={style}
                  onChange={handleEmailInput}
                  onKeyUp={isPassedSignup}
                />
                <Grid
                  style={{
                    width: "37px",
                    height: "37px",
                    margin: "-44px 0 0px 289px",
                    zIndex: "10",
                    position: "absolute",
                    fontSize: "25px",
                  }}
                  onClick={() => {
                    checkDup();
                  }}
                >
                  🔐
                </Grid>
              </Grid>
              <FormHelperTexts>{emailError}</FormHelperTexts>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nickname"
                  name="nickname"
                  label="닉네임"
                  error={nickNameError !== "" || false}
                  sx={style}
                  onChange={handleNickInput}
                  onKeyUp={isPassedSignup}
                />
              </Grid>
              <FormHelperTexts>{nickNameError}</FormHelperTexts>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="password"
                  name="password"
                  label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                  error={passwordState !== "" || false}
                  sx={style}
                  onChange={handlePasswordInput}
                  onKeyUp={isPassedSignup}
                />
              </Grid>
              <FormHelperTexts>{passwordState}</FormHelperTexts>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  label="비밀번호확인"
                  error={passwordError !== "" || false}
                  sx={style}
                  onChange={handleCheckPWDInput}
                  onKeyUp={isPassedSignup}
                />
              </Grid>
              <FormHelperTexts>{passwordError}</FormHelperTexts>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              style={
                isActive
                  ? { backgroundColor: "#3E00FF" }
                  : { backgroundColor: "#D5D8DB" }
              }
              disabled={userEmail === "" || password === "" ? true : false}
            >
              회원가입
            </Button>
          </FormControl>
          <FormHelperTexts>{signupError}</FormHelperTexts>
        </Boxs>
      </Box>
    </Container>
  );
};

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700;
  color: #d32f2f;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px;
`;

export default Signup;
