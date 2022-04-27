import React from 'react';
import styled from 'styled-components';
import {Grid,Text,Input,Button  } from '../elements/index';

function Sale() {
  const search =()=>{
    console.log('서치버튼 클릭')
  }
  return (
    <>
      <Outter>
        <Grid width="100%" margin="30px 0" bg="#c4c4c4">
          <Text size="1.7rem">네이밍</Text>
        </Grid>
        <Grid width="100%" margin="25px 0" bg="#c4c4c4">
          <Text size="1.85rem" bold>어떤 오피스 공간을 <br/>찾고 계시나요?</Text>
        </Grid>
        <Grid width="100%" margin="16px 0" position="relative" >
          <Input padding="8px" bg="#c4c4c4" placeholder="검색어" _onChange={(e)=>{
              console.log(e.target.value);
          }}/>
          <Grid  width="50px" position="absolute" top="0" right="0">
            <Button width="50px" height="40px" _onClick={search}>검색</Button>
          </Grid>
          
        </Grid>
      </Outter>
    </>
  );
}
const Outter=styled.div`
  width:100%;
  position:relative;
  padding:0 16px;

`;
export default Sale;