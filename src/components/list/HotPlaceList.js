import React from 'react';
import styled from 'styled-components';
import {Grid} from '../../elements/index';
import XScrollDrag from '../XScrollDrag';

const PlaceList = () => {

    
   
    return (
        <React.Fragment>
            <Grid margin="8px 0 0 0" display="flex" alignItems="center">
                <Grid width="88px" height="25px" bg="#ccc" borderRadius="100px" 
                display="flex" alignItems="center" justifyContent="center" margin="0 4px 0 0">#맛집 근처</Grid>
                <Grid width="88px" height="25px" bg="#ccc" borderRadius="100px" 
                display="flex" alignItems="center" justifyContent="center">#역 근처</Grid>
            </Grid>
            <Grid overflow="hidden" width="100%">
            <XScrollDrag>
                <FlexBox  >
                    <Grid width="160px" height="165px" bg="red" borderRadius="8px"></Grid>
                    <Grid width="160px" height="165px" bg="green" borderRadius="8px"></Grid>
                    <Grid width="160px" height="165px" bg="yellow" borderRadius="8px"></Grid>
                    <Grid width="160px" height="165px" bg="yellow" borderRadius="8px"></Grid>
                    <Grid width="160px" height="165px" bg="yellow" borderRadius="8px"></Grid>
                </FlexBox>
                </XScrollDrag>
            </Grid>
        
        </React.Fragment>
    );
};
const FlexBox=styled.div`
 width:1000px;
 display:flex;
 margin: 24px 0;
 gap:10px;

`;
export default PlaceList;