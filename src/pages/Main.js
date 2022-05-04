import React from 'react';
import styled from 'styled-components';
import {Sale} from '../components/main/index';
import {Bar,Banner} from '../components/shared/home';





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