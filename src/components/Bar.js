import React from 'react';
import styled from 'styled-components';
import {Grid,Button} from '../elements/index';
import {history} from '../redux/configStore';


function Bar() {
  return (
    <>
        <Container>
            <Grid width="25%" textAlign="center" display="flex" justifyContent="center" alignItems="center">
                <Button backgroundColor="none">홈</Button>
            </Grid>
            <Grid  width="25%" textAlign="center" display="flex" justifyContent="center" alignItems="center">
                <Button backgroundColor="none">찜</Button>
            </Grid>
            <Grid  width="25%" textAlign="center" display="flex" justifyContent="center" alignItems="center">
                <Button backgroundColor="none">마이페이지</Button>
            </Grid>
            <Grid  width="25%" textAlign="center" display="flex" justifyContent="center" alignItems="center">
                <Button backgroundColor="none">더보기</Button>
            </Grid>
        </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0%;
  width: 100%;
  padding:0 16px;
  background:#c4c4c4;
  height: 58px;
  overflow-y: auto;
  position:fixed;
  bottom:0;
  z-index:99;
  display:flex;
  justify-content:space-between;
`;
export default Bar;