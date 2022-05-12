import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import  { actionCreators as officeActions } from '../redux/modules/office';

import { MyHeader } from '../components/my/index';
import { MapOfficeResult } from '../components/search/index';
import { Bar,LoadSpinner } from '../components/shared/home';


const MapOfficeList = (props) => {
    const dispatch = useDispatch();
    const search = (props.location.search).split("=")[1];
    //console.log(decodeURI(search))
    const totalPage = useSelector((state)=>state?.office?.page);
  console.log(totalPage)

  const [pageno,setPageno] = useState(1);
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const callback = async ([entry], observer) => {
   // console.log(entry);
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

  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  React.useEffect(()=>{
    
      dispatch(officeActions.getSOListDB(search,pageno));
      // console.log(pageno)
  },[pageno]);


    return (
        <React.Fragment>
            <MyHeader>{decodeURI(search)} 리스트</MyHeader>
            <Outter>
            {/* <InfinityScroll
              callNext={() => dispatch(officeActions.getSOListDB(search))}
              is_next={office_list?.length ? true : false}
              loading={is_loading}
            >
              <MapOfficeResult/>
              </InfinityScroll> */}
              <MapOfficeResult/>
            </Outter>
            {isLoading ? (
                    <LoadSpinner />
                  ): null }

             {totalPage>pageno ?
               (<div ref={setTarget}> </div>):(null)}
             <Bar/>
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
`;


export default MapOfficeList;
