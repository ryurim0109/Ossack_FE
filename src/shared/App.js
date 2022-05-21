import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import {
  Login,
  Main,
  Signup,
  SaleMap,
  MyPage,
  Like,
  Start,
  SearchPage,
  NotFound,
  DetailOffice,
  MapOfficeList,
  MapShareList,
  Splash,
  QNA,
  DetailShare,
  Notice,
  WithDraw,
} from "../pages/index";
import { MobileFrame } from "../components/shared/home";
import KaKaoLogin from "../components/social/KaKaoLogin";

import GoogleLogin from "../components/social/GoogleLogin";

//css
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";
import backgroundImg from "../assets/bg.jpg";
import textImg from "../assets/bg02.png";

function App() {
  return (
    <>
      <Wrap>
        <Background>
          <TextImg />
        </Background>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <MobileFrame className="MobileFramePage">
              <Switch>
                <Route path="/" exact component={Splash} />
                <Route path="/start" exact component={Start} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route
                  path="/user/google/callback"
                  exact
                  component={GoogleLogin}
                />
                <Route
                  path="/user/kakao/callback"
                  exact
                  component={KaKaoLogin}
                />
                <Route path="/main" exact component={Main} />
                <Route path="/search" exact component={SearchPage} />
                <Route path="/officemap/:name" exact component={SaleMap} />
                <Route path="/mypage" exact component={MyPage} />
                <Route path="/mypage/qna" exact component={QNA} />
                <Route path="/mypage/notice" exact component={Notice} />
                <Route path="/mypage/withdraw" exact component={WithDraw} />
                <Route path="/like" exact component={Like} />
                <Route path="/map/office" exact component={MapOfficeList} />
                <Route path="/map/shareoffice" exact component={MapShareList} />
                <Route
                  path="/detail/:estateId"
                  exact
                  component={DetailOffice}
                />
                <Route
                  path="/detail/share/:shareofficeid"
                  exact
                  component={DetailShare}
                />
                <Route path="/*" component={NotFound} />
              </Switch>
            </MobileFrame>
          </ConnectedRouter>
        </ThemeProvider>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  .MobileFramePage {
    z-index: 999;
  }
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const TextImg = styled.div`
  width: 683px;
  height: 373px;
  background-image: url(${textImg});
  background-size: cover;
  position: fixed;
  bottom: 90px;
  left: 90px;
`;
export default App;
