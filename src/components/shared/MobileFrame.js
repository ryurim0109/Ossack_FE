import React, { useRef, useEffect } from "react";
import "../../shared/css/MobileFrame.css";

import { useLocation } from "react-router-dom";
import { history } from "../../redux/configStore";
import ScrollToTop from "./ScrollToTop";

const MobileFrame = ({ children }) => {
  // const { pathname } = useLocation();
  // const mobileFrame = useRef();

  // console.log("path : ", pathname);

  // useEffect(() => {
  // const element = document.getElementById("mobileFrame");
  // element.scrollTo(0, 0);
  // mobileFrame.scrollTo(0, mobileFrame.current.offsetTop);
  // console.log("called");
  // window.scrollTo(0, 0);
  // console.log("called");
  // }, [pathname]);

  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     mobileFrame.scrollTo(0, 0);
  //   });
  //   return () => {
  //     unlisten();
  //   };
  // }, [pathname]);

  return (
    <React.Fragment>
      <div className="WebFullFrame">
        <ScrollToTop />
        <div className="MobileFullFrame">
          <div id="scroll" className="Container">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileFrame;
