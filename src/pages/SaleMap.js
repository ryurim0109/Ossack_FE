import React,{useState} from 'react';
import {Location} from '../components/home'

function SaleMap(props) {
    const [nowLoca,setNowLoca] = useState();
    const receiveLoca = (Loca) => {
        setNowLoca(Loca)
    }
  return (
    <>
        <Location defaultLoca={receiveLoca}/>
    </>
  );
}

export default SaleMap;