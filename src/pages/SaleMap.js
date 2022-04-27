import React,{useState} from 'react';
import {Location} from '../components/home'

function SaleMap(props) {
    const [nowLoca,setNowLoca] = useState();
    const receiveLoca = (Loca) => {
        setNowLoca(Loca)
    }
  return (
    <React.Fragment>
        <Location defaultLoca={receiveLoca}/>
    </React.Fragment>
  );
}

export default SaleMap;