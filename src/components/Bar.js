import React,{useState} from 'react';
import styled from 'styled-components';
import {Grid,Button,Text,Image} from '../elements/index';
import {history} from '../redux/configStore';
import { useSelector } from "react-redux";
//아이콘
import home from '../static/images/home.png';
import active_home from '../static/images/active_home.png';


function Bar() {

  const gnbClick=(e,gnbname)=>{
    if(gnbname==="home"){
      history.push('/main');
    }else if(gnbname==="like"){
      history.push('/like')
    }else if(gnbname==="mypage"){
      history.push('/mypage')
    }
  }
  const router = useSelector((state) => state.router.location.pathname);
  const [params, setParams] = useState(window.location.pathname);
  //const [activeNav, setActiveNav] = useState(1);
  React.useEffect(() => {
    setParams(router);
  }, [router]);
  return (
    <React.Fragment>
        <Container>
            <Grid  _onClick={(e) => {
              gnbClick(e,"home")
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px"><img src={params==='/main'?active_home:home} alt="홈아이콘"/> </Grid>
                <Text cursor="pointer" color={params==='/main'?'red':"#111"} size="12px">홈</Text>
               <div/>
            </Grid>
            <Grid  _onClick={(e) => {
              gnbClick(e,"like")
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px" bg="red"></Grid>
               <Text cursor="pointer" color={params==='/like'?'red':"#111"} size="12px">찜</Text>
            </Grid>
            <Grid _onClick={(e) => {
               gnbClick(e,"mypage")
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px" bg="red"></Grid>
               <Text cursor="pointer" color={params==='/mypage'?'red':"#111"}  size="12px">마이페이지</Text>
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