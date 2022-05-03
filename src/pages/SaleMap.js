import React, { useState } from "react";
import {MainMap}  from "../components/map/index";
import {Spinner} from "../components/shared/home";

function SaleMap(props) {
  return (
    <React.Fragment>
      <MainMap />
      {/* <KakaoMap /> */}
    </React.Fragment>
  );
}

export default SaleMap;
