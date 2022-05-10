import React from 'react';
import {Button,Grid,Text} from '../../elements/index';

const MyLogout = () => {
    return (
        <React.Fragment>
            <Grid width="100%" display="flex" margin="120px 0 0 0" padding="0 107px" alignItems="center" justifyContent="space-between">
                <Button width="49px" fontSize="0.875rem" backgroundColor="none">로그아웃</Button>
                <Button  width="49px"fontSize="0.875rem" backgroundColor="none">회원탈퇴</Button>
            </Grid>
        </React.Fragment>
    );
};

export default MyLogout;