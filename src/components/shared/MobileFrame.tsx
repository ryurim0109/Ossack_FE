import React from "react";
import "../../shared/css/MobileFrame.css";

interface MobileFrameProps {
  children: React.ReactNode;
  className: string;
  // any other props you might have
}
const MobileFrame = ({ children, className }: MobileFrameProps) => {
  return (
    <React.Fragment>
      <div className="WebFullFrame">
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
