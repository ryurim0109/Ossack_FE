import React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import kakaoIcon from "../static/images/kakaoIcon.svg";
import googleIcon from "../static/images/googleIcon.svg";

import { Text } from "../elements/index";
// import styled from "styled-components";
import { history } from "../redux/configStore";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../shared/SocialOAuth";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { styled } from "@mui/system";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userEmail: data.get("userEmail"),
      password: data.get("password"),
    });
    dispatch(userActions.loginApi(data.get("userEmail"), data.get("password")));
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
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userEmail"
              label="Email Address"
              name="userEmail"
              autoComplete="userEmail"
              autoFocus
              sx={style}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={style}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <Grid container>
              {/* 회원가입 */}
              <Grid
                width="100%"
                textAlign="center"
                margin="8px 0 0"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                <P>아직 계정이 없으신가요?</P>
                <P>
                  <Text borderBottom="1px solid #fff">회원가입</Text> 하러가기
                </P>
              </Grid>
              {/* 소셜로그인 */}
              <Grid
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin="24px 0 24px"
              >
                <Grid
                  width="114px"
                  display="flex"
                  justifyContent="space-between"
                >
                  <MyBtn>
                    <A href={KAKAO_AUTH_URL}>
                      <img src={kakaoIcon} alt="카카오로그인" />
                    </A>
                  </MyBtn>
                  <MyBtn>
                    <A href={GOOGLE_AUTH_URL}>
                      <img src={googleIcon} alt="구글로그인" />
                    </A>
                  </MyBtn>
                </Grid>
              </Grid>
              {/* 소셜로그인 */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#3E00FF" }}
              >
                Sign In
              </Button>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </React.Fragment>
  );
};

// const A = styled.a`
//   color: #000;
// `;
// const P = styled.p`
//   color: #fff;
//   cursor: pointer;
// `;

const A = styled("a")({
  color: "#000",
});

const P = styled("p")({
  color: "#878D96",
  cursor: "pointer",
});

const MyBtn = styled("button")({
  borderRadius: "46px",
  height: "47px",
  width: "47px",
});

const TF = styled("TextField")({
  margin: "normal",
  id: "userEmail",
  label: "Email Address",
  name: "userEmail",
  autoComplete: "userEmail",
});

export default Login;
