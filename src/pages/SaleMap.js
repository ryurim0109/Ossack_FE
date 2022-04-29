import React,{useState} from 'react';
import {MainMap} from '../components/home';


function SaleMap(props) {
    const [nowLoca,setNowLoca] = useState();
    const receiveLoca = (Loca) => {
        setNowLoca(Loca)
    }
  return (
    <React.Fragment>
        <MainMap defaultLoca={receiveLoca}/>
        
    </React.Fragment>
  );
}

export default SaleMap;