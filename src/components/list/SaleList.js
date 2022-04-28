import React from 'react';
import {Grid} from '../../elements/index';

const SaleList = () => {
    return (
        <React.Fragment>
            <Grid margin="16px 0"> 
                <Grid display="flex" justifyContent="space-between" margin="16px 0">
                    <Grid width="47.4%" height="190px" border="1px solid #111" borderRadius="8px"></Grid>
                    <Grid width="47.4%" height="190px"  border="1px solid #111" borderRadius="8px"></Grid>
                </Grid>
                <Grid display="flex" justifyContent="space-between" >
                    <Grid width="47.4%" height="190px" border="1px solid #111" borderRadius="8px"></Grid>
                    <Grid width="47.4%" height="190px"  border="1px solid #111" borderRadius="8px"></Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SaleList;
