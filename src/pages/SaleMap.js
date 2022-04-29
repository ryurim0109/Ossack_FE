import React,{useState} from 'react';
import {MainMap} from '../components/home';
import KakaoMap from '../components/map/KakaoMap';


function SaleMap(props) {
   
  return (
    <React.Fragment>
        <MainMap />
        {/* <KakaoMap /> */}
        
    </React.Fragment>
  );
}

export default SaleMap;