import React, { useState } from "react";
import { MainMap,Search }  from "../components/map/index";
import Bar from "../components/shared/Bar";


function SaleMap(props) {
  return (
    <React.Fragment>
      <Search/>
      <MainMap />
      <Bar />
    </React.Fragment>
  );
}

export default SaleMap;
