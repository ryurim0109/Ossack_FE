import React, { useRef, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { gsap } from "gsap";
import { ConnectedRouter } from "connected-react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {
  Login,
  Main,
  Signup,
  SaleMap,
  MyPage,
  Like,
  SearchPage,
  NotFound,
  DetailOffice,
  Splash,
  QNA,
  DetailShare,
  Notice,
  WithDraw,
  Member,
  HotPlaceArticle,
  Event,
  EditProfile,
  MapOfficeList,
  MapShareList,
  Start,
} from "../pages/index";
import { MobileFrame } from "../components/shared/home";
import KaKaoLogin from "../components/social/KaKaoLogin";

import GoogleLogin from "../components/social/GoogleLogin";
//css
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";
import backgroundImg from "../assets/bg.jpg";
import textImg from "../assets/bg02.png";
import textImg02 from "../assets/bg03.png";

const App: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => remove(), 2000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => show(), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const remove = () => {
    const ani = gsap.to(textRef.current, {
      x: -773,
      display: "none",
      duration: 1,
      ease: "strong.inOut",
      onComplete: () => setActive(false),
    });
    return () => {
      ani.kill();
    };
  };
  const show = () => {
    const ani2 = gsap.to(text2Ref.current, {
      x: 863,
      duration: 1,
      ease: "strong.inOut",
    });
    return () => {
      ani2.kill();
    };
  };
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   const is_session = localStorage.getItem("token");
  //   if (is_session) {
  //     dispatch(userActions.loginCheckApi());
  //   }
  // }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Wrap>
          <Background>
            <TextImg ref={textRef} />
            {!active && <Text02Img ref={text2Ref} />}
          </Background>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <MobileFrame className="MobileFramePage">
              <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/start" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user/google/callback" element={<GoogleLogin />} />
                <Route path="/user/kakao/callback" element={<KaKaoLogin />} />
                <Route path="/main" element={<Main />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/officemap/:name" element={<SaleMap />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypage/qna" element={<QNA />} />
                <Route path="/mypage/notice" element={<Notice />} />
                <Route path="/mypage/member" element={<Member />} />
                <Route path="/mypage/withdraw" element={<WithDraw />} />
                <Route path="/mypage/profile" element={<EditProfile />} />
                <Route path="/like" element={<Like />} />
                <Route path="/map/office" element={<MapOfficeList />} />
                <Route path="/map/shareoffice" element={<MapShareList />} />
                <Route path="/detail/:estateId" element={<DetailOffice />} />
                <Route
                  path="/detail/share/:shareofficeid"
                  element={<DetailShare />}
                />
                {/*  <Route
                  path="/hotplacearticle/:name"
                  element={<HotPlaceArticle/>}
                /> */}
                <Route path="/event" element={<Event />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </MobileFrame>
          </ThemeProvider>
        </Wrap>
      </BrowserRouter>
    </>
  );
};

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
const Text02Img = styled.div`
  width: 690px;
  height: 373px;
  background-image: url(${textImg02});
  background-size: cover;
  position: fixed;
  bottom: 90px;
  left: -773px;
`;
export default App;
