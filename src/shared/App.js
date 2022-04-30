import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { Login, Main, Signup, SaleMap,MyPage } from "../pages/index";
import { MobileFrame } from "../components/home";

//css
import "../shared/css/App.css";

function App() {
  return (
    <>
      <Wrap>
        <ConnectedRouter history={history}>
          <MobileFrame className="MobileFramePage">
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />

            <Route path="/main" exact component={Main} />
            <Route path="/map" exact component={SaleMap} />
            <Route path="/mypage" exact component={MyPage} />
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
