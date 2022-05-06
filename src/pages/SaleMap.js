import React, { useState } from "react";
import { MainMap,Search }  from "../components/map/index";
import {Spinner} from "../components/shared/home";

function SaleMap(props) {
  return (
    <React.Fragment>
      <Search/>
      <MainMap />
      {/* <KakaoMap /> */}
    </React.Fragment>
  );
}

export default SaleMap;
