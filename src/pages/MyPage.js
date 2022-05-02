import React from 'react';
import styled from 'styled-components';
import {Bar} from '../components/home';
import {MyHeader,MyProfile,MyContent,MyLogout} from '../components/my/index'

const MyPage = () => {
    return (
        <React.Fragment>
            <Outter>
                <MyHeader/>
                <MyProfile/>
                <MyContent/>
                <MyLogout/>
                <Bar/>
            </Outter>
        </React.Fragment>
    );
};
const Outter=styled.div`
  width:100%;
  padding-bottom:68px;

`;
export default MyPage;