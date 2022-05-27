import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as officeActions } from "../redux/modules/office";

import { MyHeader } from "../components/my/index";
import { MapOfficeResult } from "../components/search/index";
import { Bar, Spinner } from "../components/shared/home";

const MapOfficeList = (props) => {
  const dispatch = useDispatch();
  const search = props.location.search.split("=")[1].split("&")[0];

  const totalPage = useSelector((state) => state?.office?.page);
  const title = useSelector((state) => state?.office?.keyword);
  const router = useSelector((state) => state.router.location.search);

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
    dispatch(officeActions.getSOListDB(search, pageno, router));
  }, [pageno]);

  return (
    <React.Fragment>
      <MyHeader is_back>{title} 리스트</MyHeader>
      <Outter>
        <MapOfficeResult title={title} />
      </Outter>
      {isLoading ? <Spinner /> : null}
      {totalPage > pageno ? <div ref={setTarget}> </div> : null}
      <Bar />
    </React.Fragment>
  );
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
