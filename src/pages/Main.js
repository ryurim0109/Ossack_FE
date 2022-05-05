import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {Sale} from '../components/main/index';
import {Bar} from '../components/shared/home';
import { actionCreators as userActions } from '../redux/modules/user';





function Main() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(userActions.loginCheckApi());
  },[])
 
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