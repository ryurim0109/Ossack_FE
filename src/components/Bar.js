import React,{useState} from 'react';
import styled from 'styled-components';
import {Grid,Button,Text,Image} from '../elements/index';
import {history} from '../redux/configStore';
import HomeImg from '../static/images/home.png'


function Bar() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <React.Fragment>
        <Container>
            <Grid  _onClick={() => {
              setActiveNav(1)
              history.push('/main')
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px"><img src={HomeImg} alt="홈아이콘"/> </Grid>
                {activeNav===1 ?  (<Text cursor="pointer" color="red" size="12px">홈</Text>) :
                 (<Text cursor="pointer" color="#111" size="12px">홈</Text>)
                }
               <div/>
            </Grid>
            <Grid  _onClick={() => {
              setActiveNav(2)
              history.push('/main')
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px" bg="red"></Grid>
                {activeNav===2 ?  (<Text cursor="pointer" color="red" size="12px">찜</Text>) :
                 (<Text cursor="pointer" color="#111" size="12px">찜</Text>)
                }
            </Grid>
            <Grid _onClick={() => {
              setActiveNav(3)
              history.push('/mypage')
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px" bg="red"></Grid>
                {activeNav===3 ?  (<Text cursor="pointer" color="red" size="12px">마이페이지</Text>) :
                 (<Text cursor="pointer" color="#111" size="12px">마이페이지</Text>)
                }
            </Grid>
            {/* 
            <Grid width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px" bg="red"></Grid>
                <Text color="#111" size="12px">더보기</Text>
            </Grid> */}
        </Container>
    </React.Fragment>
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