import React from 'react';
import {Button,Grid,Image,Text} from '../../elements/index';

const MyProfile = () => {
    return (
        <React.Fragment>
            <Grid width="100%" margin="40px 0" height="180px" 
            position="relative" display="flex" flexDirection="column" alignItems="start" justifyContent="center"
            >
                <Grid width="100%" display="flex" justifyContent="center"  position="relative">
                    <Image type="circle" size="112"/>
                    <Button is_edit position="absolute" top="80px" right="35%"/>
                </Grid>
                <Grid width="100%" display="flex" padding="12px 0" justifyContent="center">
                    <Text  size="1.250rem" cursor="pointer">오싹이님</Text>
                </Grid>
                <Grid width="100%" display="flex" justifyContent="center">
                    <Text  size="0.85rem" cursor="pointer">alskldskf123@naver.com</Text>
                </Grid>
            </Grid>
            
        </React.Fragment>
    );
};

export default MyProfile;