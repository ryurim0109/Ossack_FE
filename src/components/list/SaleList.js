import React from 'react';
import {Grid} from '../../elements/index';

const SaleList = () => {
    return (
        <React.Fragment>
            <Grid margin="24px 0"> 
                <Grid display="flex" justifyContent="space-between" margin="16px 0">
                    <Grid width="47.4%" height="190px" border="1px solid #E5E5EC" borderRadius="8px" 
                    boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)"></Grid>
                    <Grid width="47.4%" height="190px"  border="1px solid #E5E5EC" borderRadius="8px" 
                    boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)"></Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SaleList;
