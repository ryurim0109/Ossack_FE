import React from 'react';
import styled from 'styled-components';
import {Sale} from '../components/main/index';
import {Bar} from '../components/shared/home';





function Main() {
 
  return (
    <React.Fragment>
      <Outter>
        <Sale/>
        <Bar/>
      </Outter>
    </React.Fragment>
  );
}
const Outter=styled.div`
  width:100%;
  padding-bottom:90px;

`;
export default Main;