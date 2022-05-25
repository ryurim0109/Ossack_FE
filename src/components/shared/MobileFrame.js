import React, { useRef, useEffect } from "react";
import "../../shared/css/MobileFrame.css";

import { useLocation } from "react-router-dom";

const MobileFrame = ({ children }) => {
  const { pathname } = useLocation();
  const mobileFrame = useRef();

  //console.log("path : ", pathname);

  useEffect(() => {
    // const element = document.getElementById("mobileFrame");
    // element.scrollTo(0, 0);

    mobileFrame.current.scrollTo(0, 0);
    //console.log("called");

    // window.scrollTo(0, 0);
    // console.log("called");
  }, [pathname]);

  return (
    <React.Fragment>
      <div className="WebFullFrame">
        <div className="MobileFullFrame" ref={mobileFrame}>
          <div id="scroll" className="Container">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileFrame;
