import React from 'react';
import {history} from '../redux/configStore';
import styled from 'styled-components';
import { Grid,Text } from '../elements/index';
 
const NotFound = () => {
    return (
        <React.Fragment>
            <Grid position="relative" display="flex" alignItems="center" bg="#ebb1f9">
                <Outter>
                    <Grid width="100%" textAlign="center" display="flex" margin="100px 0"
                     flexDirection="column" alignItems="center">
                        <Text size="1.25rem" bold>주소가 올바르지 않아요!!</Text>
                        <Button onClick={()=>{
                            history.push('/main')
                        }}>메인으로 가기</Button>
                    </Grid>
                </Outter>
            </Grid>
        </React.Fragment>
    );
};
const Outter =styled.div`
    width:100%;
    height:500px;
    background:url('https://c.tenor.com/0jI-YXeywSsAAAAC/nyan-cat-cat.gif') no-repeat;
`;
const Button=styled.button`
    width:120px;
    font-size:20px;
    font-weight:bold;
    margin:24px 0;
    background-color:#fff;
    border-radius:8px;
`;
export default NotFound;