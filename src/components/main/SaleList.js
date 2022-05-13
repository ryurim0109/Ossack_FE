import React from 'react';
import {Grid,Text} from '../../elements/index';
import { history } from '../../redux/configStore';

const SaleList = () => {

    const officeClick=(name)=>{
        console.log(name)
        history.push(`/map?query=${name}`)
    }
   
    return (
        <React.Fragment>
            <Grid margin="0 0 32px 0"> 
                <Grid display="flex" justifyContent="space-between" margin="16px 0" cursor="pointer">
                    <Grid id="office" width="47.4%" height="160px" border="1px solid #E5E5EC" borderRadius="8px" 
                    boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)" padding="12px"  _onClick={()=>{officeClick("office")}}>
                        <Text size="1.250rem" bold>오피스</Text>
                    </Grid>
                    <Grid id="officetell" width="47.4%" height="160px"  border="1px solid #E5E5EC" borderRadius="8px" cursor="pointer" _onClick={()=>{officeClick("share")}}
                    boxShadow="0px 2px 4px rgba(105, 105, 105, 0.1)" padding="12px">
                         <Text size="1.250rem" bold>공유 오피스</Text>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SaleList;
