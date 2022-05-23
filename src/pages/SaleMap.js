import React from "react";
import { MainMap, Search } from "../components/map/index";
import Bar from "../components/shared/Bar";
import { useParams } from "react-router-dom";

function SaleMap(props) {
  const name = useParams().name;
  return (
    <React.Fragment>
      <Search name={name} />
      <MainMap name={name} />
      <Bar />
    </React.Fragment>
  );
}

export default SaleMap;
