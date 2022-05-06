import React, { useState }  from 'react';
import { Grid,Text } from '../../elements/index';

import styled from 'styled-components';


const Filter=()=> {
 
  return (
      <React.Fragment>
        <Otter>
            <Grid width="360px" bg="#ccc" display="flex" flexDirection="column" padding="16px">
                <Text bold>가격</Text>
                <Grid margin="24px 0">
                  <Text >보증금(전세금)</Text>
                </Grid>
                
            </Grid>
        </Otter>
    </React.Fragment>
  );
}
const Otter=styled.div`
    width:100%
    margin:10px;
    box-sizing:border-box;
`

export default Filter