import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { Text } from "../elements/index";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nickNameError, setNickNameError] = useState("");
  const [signupError, setSignupError] = useState("");
  const history = useHistory();

  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  const onhandlePost = async (data) => {
    const { email, nickname, password } = data;
    const postData = { email, nickname, password };
    console.log(postData);
    // post
    // await axios
    //   .post('/member/join', postData)
    //   .then(function (response) {
    //     console.log(response, '성공');
    //     history.push('/login');
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //     setSignupError('회원가입에 실패하였습니다. 다시한번 확인해 주세요.');
    //   });
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

    // 회원가입 동의 체크
    if (!checked) alert("회원가입 약관에 동의해주세요.");

    if (
      emailRegex.test(userEmail) &&
      passwordRegex.test(password) &&
      password === passwordCheck &&
      nicknameRegex.test(nickname) &&
      checked
    ) {
      dispatch(userActions.signUpApi(joinData));
    }
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
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} /> */}
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
                  label="Email Address"
                  error={emailError !== "" || false}
                  sx={style}
                />
              </Grid>
              <FormHelperTexts>{emailError}</FormHelperTexts>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nickname"
                  name="nickname"
                  label="nickname"
                  error={nickNameError !== "" || false}
                  sx={style}
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
                  label="password (숫자+영문자+특수문자 8자리 이상)"
                  error={passwordState !== "" || false}
                  sx={style}
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
                  label="passwordCheck"
                  error={passwordError !== "" || false}
                  sx={style}
                />
              </Grid>
              <FormHelperTexts>{passwordError}</FormHelperTexts>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox onChange={handleAgree} color="primary" />}
                  label="I agree to the membership terms and conditions."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              style={{ backgroundColor: "#3E00FF" }}
            >
              Sign Up
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

const P = styled("p")({
  color: "#878D96",
  cursor: "pointer",
});
export default Signup;
