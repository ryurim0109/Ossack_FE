import React, { useState } from "react";
import { MainMap } from "../components/map/index";
import { Spinner } from "../components/shared/home";

import Bar from "../components/shared/Bar";

function SaleMap(props) {
  return (
    <React.Fragment>
      <MainMap />
      {/* <KakaoMap /> */}
      <Bar />
    </React.Fragment>
  );
}

export default SaleMap;
