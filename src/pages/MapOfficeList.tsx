import React, { useEffect, useState ,useRef} from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSOListDB } from "../redux/modules/office";

import { MyHeader } from "../components/my/index";
import { MapOfficeResult } from "../components/search/index";
import { Bar, Spinner, NotUser } from "../components/shared/home";
import { useAppDispatch,RootState } from "../redux/configStore";

const MapOfficeList = () => {
  const appDispatch = useAppDispatch();
  const location = useLocation();
  const router =location?.search;

  const totalPage = useSelector((state:RootState) => state?.office?.list.totalpage);
  const title = useSelector((state:RootState) => state?.office?.list?.keyword);
  //const login = useSelector((state) => state.user.is_login);

  const [pageno, setPageno] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const callback:any = async ([entry]: any, observer:any) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setPageno((pre) => pre + 1);
      setIsLoading(false);
      observer.observe(entry.targetRef);
    }
  };

  useEffect(() => {
    let observer:any;
    if (targetRef) {
      observer = new IntersectionObserver(callback, { threshold: 1 });
      observer.observe(targetRef);
    }
    return () => observer && observer.disconnect();
  }, [targetRef]);

  useEffect(() => {
    const serach_info={
      pageno:pageno,
    }
    //appDispatch(getSOListDB(serach_info));
  }, []);
 // const is_session = localStorage.getItem("token");

  /* if (!login || !is_session) {
    return (
      <React.Fragment>
        <NotUser />
      </React.Fragment>
    );
  } else { */
    return (
      <React.Fragment>
        <MyHeader is_back>{title} 리스트</MyHeader>
        <Outter>
          <MapOfficeResult />
        </Outter>
        {isLoading ? <Spinner /> : null}
        {totalPage > pageno ? <div ref={targetRef}> </div> : null}
        <Bar />
      </React.Fragment>
    );
 /*  } */
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

export default MapOfficeList;
