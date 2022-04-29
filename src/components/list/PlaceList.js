import React from 'react';
import styled from 'styled-components';
import {Grid} from '../../elements/index';
import XScrollDrag from '../XScrollDrag';

const PlaceList = () => {

    
   
    return (
        <React.Fragment>
        
            <Grid overflow="hidden" width="100%">
            <XScrollDrag>
                <FlexBox  >
                    <Grid width="136px" height="177px" bg="red"></Grid>
                    <Grid width="136px" height="177px" bg="green"></Grid>
                    <Grid width="136px" height="177px" bg="yellow"></Grid>
                    <Grid width="136px" height="177px" bg="yellow"></Grid>
                    <Grid width="136px" height="177px" bg="yellow"></Grid>
                </FlexBox>
                </XScrollDrag>
            </Grid>
        
        </React.Fragment>
    );
};
const FlexBox=styled.div`
 width:1000px;
 display:flex;
 margin: 16px 0;
 gap:10px;

`;
export default PlaceList;