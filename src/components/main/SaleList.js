import React from 'react';
import {Grid,Text} from '../../elements/index';

const SaleList = () => {
    return (
        <React.Fragment>
            <Grid margin="0 0 32px 0"> 
                <Grid display="flex" justifyContent="space-between" margin="16px 0">
                    <Grid width="47.4%" height="160px" border="1px solid #E5E5EC" borderRadius="8px" 
                    boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)" padding="12px">
                        <Text size="1.250rem" bold>오피스</Text>
                    </Grid>
                    <Grid width="47.4%" height="160px"  border="1px solid #E5E5EC" borderRadius="8px" 
                    boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)" padding="12px">
                         <Text size="1.250rem" bold>오피스텔</Text>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SaleList;
