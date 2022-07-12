import React, { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Text } from "../elements/index";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../redux/configStore";
import { loginApi } from "../redux/modules/user";
import { TalkTalk } from "../components/shared/home";

const Login = () => {
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  // 비활성화 여부
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleEmailInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isPassedLogin = () => {
    return userEmail.includes("@") && password.length >= 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("userEmail");
    const password = data.get("password");
    const user={
      userEmail:userEmail,
      password:password
    }
    appDispatch(loginApi(user));
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
    <React.Fragment>
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
          <Grid
          >
            <Text size="1.250rem" bold>
              <Text color="#3E00FF" bold>
                오싹
              </Text>{" "}
              서비스 이용을 위해 <br />
              로그인 해주세요.
            </Text>
          </Grid>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="userEmail"
              label="이메일"
              name="userEmail"
              autoComplete="userEmail"
              autoFocus
              sx={style}
              onChange={handleEmailInput}
              onKeyUp={isPassedLogin}
              size={"small"}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={style}
              onChange={handlePasswordInput}
              onKeyUp={isPassedLogin}
              size={"small"}
            />

            <Grid container>
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
                로그인
              </Button>
              <Grid
                width="100%"
                textAlign="center"
                margin="8px 0 0"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                <Text size="0.750em" bold>
                  <Text color="#999999" fontWeight="500px">
                    오싹이 처음이신가요?
                  </Text>{" "}
                  <Text
                    borderBottom="1px solid #3E00FF"
                    color="#3E00FF"
                    bold
                    cursor="pointer"
                  >
                    회원가입
                  </Text>{" "}
                </Text>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid
          width="100%"
          marginTop="40px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* 소셜로그인 */}
          <TalkTalk />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Login;
