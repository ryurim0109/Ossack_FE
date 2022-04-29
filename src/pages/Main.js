import React from 'react';
import styled from 'styled-components';
import {Sale,Bar,Banner} from '../components/home';

function Main() {
  return (
    <React.Fragment>
      <Outter>
        <Sale/>
        <Bar/>
        <Banner/>
      </Outter>
    </React.Fragment>
  );
}
const Outter=styled.div`
  width:100%;
  padding-bottom:68px;

`;
export default Main;