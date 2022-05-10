import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import  { actionCreators as officeActions } from '../redux/modules/office';

import { MyHeader } from '../components/my/index';
import { MapOfficeResult } from '../components/search/index';
import { Bar,Spinner } from '../components/shared/home';
import InfinityScroll from '../shared/InfinityScroll';


const MapOfficeList = (props) => {
    const dispatch = useDispatch();
    const search = (props.location.search).split("=")[1];
    //console.log(decodeURI(search))
    const is_loading = useSelector((state) => state.office.is_loading);
    console.log(is_loading)
    const office_list = useSelector((state) => state.map.office_list);

    useEffect(() => {
      if(office_list?.length === 0){
        dispatch(officeActions.getSOListDB(search,0))
      }
    }, [])

    // if(!office_list){
    //     return <Spinner/>
    // }
    

   /* useEffect(()=>{
    dispatch(officeActions.getSOListDB(search))
   },[search]) */


    return (
        <React.Fragment>
            <MyHeader>{decodeURI(search)} 리스트</MyHeader>
            <Outter>
            <InfinityScroll
              callNext={() => dispatch(officeActions.getSOListDB(search))}
              is_next={office_list?.length ? true : false}
              loading={is_loading}
            >
              <MapOfficeResult/>
              </InfinityScroll>
            </Outter>
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
