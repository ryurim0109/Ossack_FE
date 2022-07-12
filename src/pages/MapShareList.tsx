import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getShareListDB } from "../redux/modules/office";
import { useLocation } from "react-router-dom";
import { MyHeader } from "../components/my/index";
import { ShareOfficeResult } from "../components/search/index";
import { Bar, Spinner, NotUser } from "../components/shared/home";
import { RootState, useAppDispatch } from "../redux/configStore";

const MapShareList = () => {
  const appDispatch = useAppDispatch();
  const location = useLocation();
  const router = location?.search;
  const search = router.split("=")[1];
  const totalPage = useSelector(
    (state: RootState) => state?.office?.share_list.totalpage
  );
  const title = useSelector(
    (state: RootState) => state?.office?.share_list.keyword
  );
  //const login = useSelector((state:RootState) => state.user.is_login);

  const [pageno, setPageno] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const callback = async ([entry]: any, observer: any) => {
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
    let observer: any;
    if (targetRef.current) {
      observer = new IntersectionObserver(callback, { threshold: 1 });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [targetRef.current]);

  useEffect(() => {
    const share_info = {
      pageno: pageno,
      keyword: search,
    };
    appDispatch(getShareListDB(share_info));
  }, []);
  const is_session = localStorage.getItem("token");

  // if (!login || !is_session) {
  //   return (
  //     <React.Fragment>
  //       <NotUser />
  //     </React.Fragment>
  //   );
  // } else {
  return (
    <React.Fragment>
      <MyHeader is_back>{title} 리스트</MyHeader>
      <Outter>
        <ShareOfficeResult />
      </Outter>
      {isLoading ? <Spinner /> : null}
      {totalPage > pageno ? <div ref={targetRef}> </div> : null}
      <Bar />
    </React.Fragment>
  );
  // }
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
