import React from "react";
import { MainMap, Search } from "../components/map/index";
import { Bar, NotUser } from "../components/shared/home";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SaleMap(props) {
  const name = useParams().name;
  const login = useSelector((state) => state.user.is_login);
  const is_session = localStorage.getItem("token");

  if (!login || !is_session) {
    return (
      <React.Fragment>
        <NotUser />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Search name={name} />
        <MainMap name={name} />
        <Bar />
      </React.Fragment>
    );
  }
}

export default SaleMap;
