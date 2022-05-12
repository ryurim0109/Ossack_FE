import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {Grid,Text} from '../../elements/index';
import {history} from '../../redux/configStore';
import { useSelector } from "react-redux";
//아이콘
import home from '../../static/images/home.svg';
import active_home from '../../static/images/active_home.svg';
import heart from '../../static/images/favourite.svg';
import active_heart from '../../static/images/active_favourite.svg';
import search from '../../static/images/search.svg';
import active_search from '../../static/images/active_search.svg';
import user from '../../static/images/user.svg';
import active_user from '../../static/images/active_user.svg';


function Bar() {
  
  const gnbClick=(e,gnbname)=>{
    if(gnbname==="home"){
      history.push('/main');
    }else if(gnbname==="map"){
      history.push('/map')
    }else if(gnbname==="like"){
      history.push('/like')
    }else if(gnbname==="mypage"){
      history.push('/mypage')
    }
  }
  const router = useSelector((state) => state.router.location.pathname);
  const [params, setParams] = useState(window.location.pathname);
  
  //const [activeNav, setActiveNav] = useState(1);
  useEffect(() => {
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
                <Text cursor="pointer" color={params==='/main'?'#3E00FF':"#BEBDC4"} size="12px">홈</Text>
               <div/>
            </Grid>
            <Grid  _onClick={(e) => {
              gnbClick(e,"map")
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px"><img src={params.includes('/map') || params.includes('/search') || params.includes('/detail')?active_search:search} alt="검색아이콘"/> </Grid>
                <Text cursor="pointer" color={params.includes('/map') || params.includes('/search') || params.includes('/detail')?'#3E00FF':"#BEBDC4"} size="12px">탐색</Text>
               <div/>
            </Grid>
            <Grid  _onClick={(e) => {
              gnbClick(e,"like")
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px"><img src={params==='/like'?active_heart:heart} alt="하트아이콘"/> </Grid>
               <Text cursor="pointer" color={params==='/like'?'#3E00FF':"#BEBDC4"} size="12px">찜</Text>
            </Grid>
            <Grid _onClick={(e) => {
               gnbClick(e,"mypage")
          }}
            width="25%" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Grid width="24px" height="24px"><img src={params==='/mypage'?active_user:user} alt="유저아이콘"/> </Grid>
               <Text cursor="pointer" color={params==='/mypage'?'#3E00FF':"#BEBDC4"}  size="12px">마이페이지</Text>
            </Grid>
        </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  margin: 0%;
  width: 100%;
  padding:0 16px;
  background:#fff;
  height: 58px;
  overflow-y: auto;
  position:fixed;
  bottom:0;
  z-index:99;
  display:flex;
  justify-content:space-between;
  box-shadow: 0px -2px 50px rgba(0, 0, 0, 0.05);

`;
export default Bar;