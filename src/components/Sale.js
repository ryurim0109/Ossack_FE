import React from 'react';
import styled from 'styled-components';
import {Grid,Text,Input,Button  } from '../elements/index';
import {history} from '../redux/configStore';
import SearchImg from '../static/images/searchicon.png';
import {SaleList,PlaceList} from '../components/list/list';


function Sale() {
  return (
    <React.Fragment>
      <Outter>
        <Grid width="100%" margin="30px 0" bg="#c4c4c4">
          <Text size="1.7rem">네이밍</Text>
        </Grid>
        <Grid width="100%" margin="25px 0" bg="#c4c4c4">
          <Text size="1.85rem" bold> 닉네임님 어떤 오피스 공간을 <br/>찾고 계시나요?</Text>
        </Grid>
        <Grid width="100%" margin="16px 0" position="relative" >
         <Grid  width="50px" position="absolute" top="12px"  left="10px">
            <img src={SearchImg} alt="검색"/>
            </Grid>
          <Grid width="100%" height="48px" border="1px solid #111" textIn="40px"  display="flex" cursor="pointer"
          alignItems="center" color="#999" borderRadius="10px"
           _onClick={()=>{
             history.push('/map')
          }}>
            장소, 주소, 건물명 검색
          </Grid>
          
        </Grid>
        {/* 오피스구해요 박스 */}
        <SaleList/>
        <Grid margin="16px 0 0 0 ">
                <Text bold>📍성수동 근처</Text> 추천 공간
        </Grid>
        {/* 내근처매물 */}
          <PlaceList/>
      </Outter>
    </React.Fragment>
  );
}
const Outter=styled.div`
  width:100%;
  position:relative;
  padding:0 16px 58px 16px;

`;
export default Sale;