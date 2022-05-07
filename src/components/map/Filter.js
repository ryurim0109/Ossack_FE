import React, { useState }  from 'react';
import { Grid,Text,Button } from '../../elements/index';

import styled from 'styled-components';


const Filter=(props)=> {

  const {isOpen,setIsOpen}=props;
  

  const ModalClose=()=>{
    setIsOpen(!isOpen)
}
const [currentClick, setCurrentClick] = useState(null);
const [prevClick, setPrevClick] = useState(null);
const [rentClick, setRentClick] = useState(null);
const [rentPrevClick, setRentPrevClick] = useState(null);


const GetClick = (e) => {
  setCurrentClick(e.target.id);
  
  //console.log(e.target.id);
};

const GetRent=(e)=>{
  setRentClick(e.target.id)
}

React.useEffect(
  (e) => {
    if (currentClick !== null) {
      let current = document.getElementById(currentClick);
      console.log(current.innerHTML);
      current.style.backgroundColor = "#E3E3E3";
      current.style.border = "1px solid #6C6C6C";
    }

    if (prevClick !== null) {
      let prev = document.getElementById(prevClick);
      prev.style.backgroundColor = "#fff";
      prev.style.border = "1px solid #E6E7E8";
    }
  
    setPrevClick(currentClick);
  },[currentClick]);

  React.useEffect(
    (e) => {
      if (rentClick !== null) {
        let rent = document.getElementById(rentClick);
        console.log(rent.innerHTML);
        rent.style.backgroundColor = "#E3E3E3";
        rent.style.border = "1px solid #6C6C6C";
      }
  
      if (rentPrevClick !== null) {
        let prev = document.getElementById(rentPrevClick);
        prev.style.backgroundColor = "#fff";
        prev.style.border = "1px solid #E6E7E8";
      }
    
      setRentPrevClick(rentClick);
    },[rentClick]);

    const findOffice=()=>{
      console.log(currentClick)
      console.log(rentClick)
    }
    const refreshBtn=()=>{
      console.log('초기화')
      console.log(setCurrentClick(null))
      console.log(setRentClick(null))
      
    }
 
  return (
      <React.Fragment>
         {isOpen ?
            (<Outter>
              <Grid boxShadow=" 30px 30px 30px rgba(0, 0, 0, 0.3)" borderRadius="8px 8px 0 0"
              width="100%" height="500px" bg="#fff" >
                <Grid cursor="pointer"height="4px" _onClick={ModalClose}>
                  <Br />
                </Grid>
                <Grid width="100%"  padding="16px"> 
                  <Text size="1rem" bold>가격</Text>
                  <Grid width="100%" height="173px" padding="24px 0"> 
                    <Text size="1rem">보증금(전세금)</Text>
                    <Grid display="flex" height="34px" justifyContent="space-between" margin="24px 0 0">
                        <Btn id="case1" onClick={GetClick}>1천만원 이하</Btn>
                        <Btn id="case2" onClick={GetClick}>1천만원대</Btn>
                        <Btn id="case3" onClick={GetClick}>2천만원대</Btn>
                    </Grid>
                    <Grid display="flex" height="34px" justifyContent="space-between" margin="24px 0 0">
                        <Btn id="case4" onClick={GetClick}>3천만원대</Btn>
                        <Btn id="case5" onClick={GetClick}>4천만원대</Btn>
                        <Btn id="case6" onClick={GetClick}>5천만원 이상</Btn>
                    </Grid>
                  </Grid>
                  <Grid width="100%" height="173px" padding="24px 0"> 
                    <Text size="1rem">월세</Text>
                    <Grid display="flex" height="34px" justifyContent="space-between" margin="24px 0 0">
                        <Btn id="rent1" onClick={GetRent}>100만원</Btn>
                        <Btn id="rent2" onClick={GetRent}>200만원</Btn>
                        <Btn id="rent3" onClick={GetRent}>300만원</Btn>
                    </Grid>
                    <Grid display="flex" height="34px" justifyContent="space-between" margin="24px 0 0">
                        <Btn id="rent4" onClick={GetRent}>400만원</Btn>
                        <Btn id="rent5" onClick={GetRent}>500만원</Btn>
                        <Btn id="rent6" onClick={GetRent}>600만원</Btn>
                    </Grid>
                  </Grid>
                  <Grid width="100%" margin="32px 0 0" height="40px"display="flex" justifyContent="space-between" alignItems="center">
                    <Button width="92px" height="24px" backgroundColor="none" color="#3F3F3F" fontSize="0.875rem"
                    padding="0" 
                    _onClick={refreshBtn}>가격 재설정</Button>
                    <Button width="212px" height="40px" backgroundColor="#3F3F3F" color="#fff" borderRadius="8px"
                    padding="0" fontSize="0.875rem"
                    _onClick={findOffice}>매물찾기</Button>
                  </Grid>
                  
                </Grid>
                
            </Grid>
            </Outter>
            ) 
            :null

            }
    </React.Fragment>
  );
}
const Outter=styled.div`

  width:100%;
  position: absolute;
  bottom:0;
  left:0;
  z-index:999;
  display:flex;
  animation: modal-show 1s;

  @keyframes modal-show { 
    from { opacity: 0; height: 0; } to { opacity: 1; height: 500px; } } 
   

`
const Br=styled.div`
  width:40px;
  height:4px;
  background-color:#F5F5F5;
  position:absolute;
  left:50%;
  transform:translate(-50%);
  top:10px;
`;
const Btn=styled.button`
  width:104px;
  height:34px;
  border-radius:8px;
  font-size:12px;
  color:#808080;
  background:#fff;
  border: 1px solid #E6E7E8;
`

export default Filter