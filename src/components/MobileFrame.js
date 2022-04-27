import React from "react";
import "../shared/css/MobileFrame.css";

const MobileFrame = ({ children }) => { 
  return (  
    <React.Fragment>  
    <div className="WebFullFrame" >
      <div className="MobileFullFrame" >
        <div id="scroll" className="Container" >{children}</div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default MobileFrame;