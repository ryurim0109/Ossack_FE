import React, { useState, useCallback } from "react";
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
import { MdKeyboardArrowLeft } from "react-icons/md";
import { history } from "../redux/configStore";

import { emailRegex, passwordRegex, nickNameRegex } from "../shared/regCheck";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import Swal from "sweetalert2";

const Signup = () => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nickNameError, setNickNameError] = useState("");
  const [signupError, setSignupError] = useState("");

  // 중복체크
  const [userEmailCurrent, setUserEmailCurrent] = useState(false);
  // 리덕스에서 statusCode 가져오기
  const emailDup = useSelector((state) => state.user.statusCode);

  // 비활성화 여부
  const [userEmail, setUserEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleEmailInput = (event) => {
    setUserEmail(event.target.value);
    const userEmailCurrent = event.target.value;
    //console.log("userEmailCurrent : ", userEmailCurrent);
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
    if (typeof emailDup === "undefined") {
      console.log("emailDup : ", emailDup);
      setEmailError("이메일 중복확인을 해주세요(🔐)");
    }
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
    if (!emailRegex(userEmail)) setEmailError("올바른 이메일 형식이 아닙니다.");
    else setEmailError("");

    // 비밀번호 유효성 체크
    if (!passwordRegex(password))
      setPasswordState(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    else setPasswordState("");

    // 비밀번호 같은지 체크
    if (password !== passwordCheck)
      setPasswordError("비밀번호가 일치하지 않습니다.");
    else setPasswordError("");

    // 닉네임 유효성 검사
    if (!nickNameRegex(nickname) || nickname.length < 1)
      setNickNameError("올바른 이름을 입력해주세요.(글자수 제한 2~10자리)");
    else setNickNameError("");

    if (!emailDup) {
      Swal.fire({
        title: "이메일 중복 확인을 해주세요!(🔐)",
        showCancelButton: false,
        confirmButtonText: "확인",
        confirmButtonColor: "#FF5151",
      });
      // setEmailError("이메일 중복확인을 해주세요(🔐)");
      return;
    }

    if (
      emailRegex.test(userEmail) &&
      passwordRegex.test(password) &&
      password === passwordCheck &&
      nickNameRegex.test(nickname) &&
      emailDup === true
      // &&checked
    ) {
      dispatch(userActions.signUpApi(joinData));
    }
  };

  const checkDup = () => {
    console.log("중복체크여부테스트_1", emailDup);

    if (typeof emailDup === "undefined") {
      console.log("emailDup : ", emailDup);
      setEmailError("이메일 중복확인을 해주세요(🔐)");
    }
    setEmailError("");
    userEmail.includes("@") &&
    password.length >= 5 &&
    checkPassword.length >= 5 &&
    nickname.length >= 1
      ? setIsActive(true)
      : setIsActive(false);

    dispatch(userActions.userEmailCheckDB(userEmail));
    setEmailError("");
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
        <BackBtn
          onClick={() => {
            history.push("/login");
          }}
        >
          <MdKeyboardArrowLeft fontSize="28" />
        </BackBtn>
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
                  size={"small"}
                />
                <Grid
                  style={{
                    width: "37px",
                    height: "37px",
                    margin: "-39px 0 0px 289px",
                    zIndex: "10",
                    position: "absolute",
                    fontSize: "25px",
                  }}
                  onClick={() => {
                    checkDup();
                  }}
                  //onKeyUp={isPassedSignup}
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
                  size={"small"}
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
                  size={"small"}
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
                  size={"small"}
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
              disabled={
                userEmail === "" || password === "" || emailDup === ""
                  ? true
                  : false
              }
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
const BackBtn = styled(Box)`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
`;
export default Signup;
