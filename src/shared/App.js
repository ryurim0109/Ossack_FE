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
} from "../pages/index";
import { MobileFrame } from "../components/shared/home";
import KaKaoLogin from "../components/social/KaKaoLogin";

import GoogleLogin from "../components/social/GoogleLogin";

//css
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";

function App() {
  return (
    <>
      <Wrap>
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
                {/* <Route path="/officemap" exact component={SaleMap} /> */}
                <Route path="/officemap/:name" exact component={SaleMap} />
                <Route path="/mypage" exact component={MyPage} />
                <Route path="/mypage/qna" exact component={QNA} />
                <Route path="/mypage/notice" exact component={Notice} />
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

export default App;
