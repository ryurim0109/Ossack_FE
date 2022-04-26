import React from 'react';
import styled from 'styled-components';
import {Grid} from '../elements/index';

function Honey() {
  return (
    <React.Fragment>
        <Outter>
            <Grid bg="#c4c4c4">꿀팁</Grid>
            <Grid  bg="#c4c4c4">창업매거진</Grid>
        </Outter>
        <Level>창업레벨테스트</Level>
    </React.Fragment>
  );
};
const Outter =styled.div`
    width:100%;
    height:500px;
    background:#eee;
    box-sizing:border-box;
    padding: 0 16px;
    position:relative;
    display:flex;
    gap:20px;

    @media screen and (max-width: 720px) {
       flex-direction:column;
    }
`;
const Level=styled.div`
    width:100%;
    height:200px;
    position:relative;
    background:#1b74e4;

`;


export default Honey;