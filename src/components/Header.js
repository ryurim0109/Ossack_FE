import React from 'react';
import styled from 'styled-components';
import {Grid} from '../elements/index';
import {history} from '../redux/configStore';


function Header() {
  return (
    <React.Fragment>
        <Outter>
            <Grid  bg="yellow" display="flex" alignItems="center" justifyContent="space-between">
                <Grid display="flex" alignItems="center">
                    <H1 onClick={()=>{
                    history.push('/main')
                    }}>오싹</H1>
                    <Grid width="33.3%" display="flex" bg="orange" alignItems="center" justifyContent="space-between" hover="green">
                        <Li >상권지도</Li>
                        <Li onClick={()=>{
                        history.push('/board')
                        }}>게시글</Li>
                        <Li>고민상담</Li>
                    </Grid>
                </Grid>
                <Grid width="33.3%" display="flex" alignItems="center">
                    <Grid display="flex" alignItems="center" justifyContent="end">
                        <Li>마이오피스</Li>
                        <Li>로그아웃</Li>
                    </Grid>
                </Grid>
            </Grid>
        </Outter>
    </React.Fragment>
  );
}

const Outter =styled.header`
    width:100%;
    height:64px;
    background:red;
    box-sizing:border-box;
    padding: 0 16px;
    position:relative;

`;
const H1 = styled.h1`
    width:10%;
    font-size:1.750rem;
    cursor:pointer;
`;
const Li = styled.div`
    width:100px;
    cursor:pointer;
    text-align:center;
    font-size:1rem;
    background:red;
    @media screen and (max-width: 450px) {
        width:150px;
    }
`;
export default Header;