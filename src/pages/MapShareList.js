import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as officeActions } from "../redux/modules/office";

import { MyHeader } from "../components/my/index";
import { ShareOfficeResult } from "../components/search/index";
import { Bar, Spinner, NotUser } from "../components/shared/home";

const MapShareList = (props) => {
  const appDispatch = useAppDispatch();
  const search = props.location.search.split("=")[1];
  const totalPage = useSelector((state) => state?.office?.page);
  const title = useSelector((state) => state?.office?.keyword);
  const login = useSelector((state) => state.user.is_login);

  const [pageno, setPageno] = useState(1);
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const callback = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setPageno((pre) => pre + 1);
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    dispatch(officeActions.getShareListDB(search, pageno));
  }, [pageno, search, dispatch]);
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
        <MyHeader is_back>{title} 리스트</MyHeader>
        <Outter>
          <ShareOfficeResult />
        </Outter>
        {isLoading ? <Spinner /> : null}
        {totalPage > pageno ? <div ref={setTarget}> </div> : null}
        <Bar />
      </React.Fragment>
    );
  }
};
const Outter = styled.div`
  width: 100%;
  padding: 0 16px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 62px;
`;

export default MapShareList;
