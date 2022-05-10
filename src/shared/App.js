import React from "react";
import styled from "styled-components";
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
  SearchList,
  SearchMap,
  DetailOffice,
  MapOfficeList,
} from "../pages/index";
import { MobileFrame } from "../components/shared/home";
import KaKaoLogin from "../components/social/KaKaoLogin";

import GoogleLogin from "../components/social/GoogleLogin";

//css
import "../shared/css/App.css";

function App() {
  return (
    <>
      <Wrap>
        <ConnectedRouter history={history}>
          <MobileFrame className="MobileFramePage">
            <Switch>
              <Route path="/" exact component={Start} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/user/google/callback" exact component={GoogleLogin}/>
              <Route path="/user/kakao/callback" exact component={KaKaoLogin} />
              <Route path="/main" exact component={Main} />
              <Route path="/search" exact component={SearchPage} />
              <Route path="/map" exact component={SaleMap} />
              <Route path="/mypage" exact component={MyPage} />
              <Route path="/like" exact component={Like} />
              <Route path="/searchlist" exact component={SearchList} />
              <Route path="/map/office" exact component={MapOfficeList} />
              <Route path="/searchmap/:estateId" exact  component={SearchMap}/>
              <Route path="/detail/:estateId" exact  component={DetailOffice}/>
              <Route component={NotFound} />
            </Switch>
          </MobileFrame>
        </ConnectedRouter>
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
