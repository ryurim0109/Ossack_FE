import React from 'react';
import styled from 'styled-components';
import {Grid} from '../elements/index';


function Header() {
  return (
    <React.Fragment>
        <Outter>
            <Grid  bg="yellow" display="flex" alignItems="center" justifyContent="space-between">
                <H1>창준생</H1>
                <Grid width="33.3%" display="flex" bg="orange" alignItems="center" justifyContent="space-between" hover="green">
                    <Li>상권정보</Li>
                    <Li>게시글</Li>
                    <Li>고민상담</Li>
                </Grid>
                <Grid width="33.3%" display="flex" alignItems="center">
                    <Grid display="flex" alignItems="center" justifyContent="end">
                        <Li>마이페이지</Li>
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
    width:30%;
    font-size:1.750rem;
    cursor:pointer;
`;
const Li = styled.div`
    cursor:pointer;
    text-align:center;
    font-size:1rem;
    background:red;
    @media screen and (max-width: 450px) {
        width:150px;
    }
`;
export default Header;