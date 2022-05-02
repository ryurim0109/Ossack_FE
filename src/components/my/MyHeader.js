import React from 'react';
import {Button,Grid,Text} from '../../elements/index';
import { history } from '../../redux/configStore';

const MyHeader = () => {
    return (
        <React.Fragment>
             <Grid
                width="100%"
                height="80px"
                bg="#fff"
                padding="0 16px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                boxShadow=" 0px 2px 2px rgba(0, 0, 0, 0.1)"
            >
            <Grid width="5%" display="flex" alignItems="center">
                    <Button
                        is_back
                        _onClick={() => {
                            history.goBack();
                        }}
                        />
            </Grid>
            <Grid width="95%" display="flex" alignItems="center"justifyContent="center">
                    <Text size="1.250rem" bold cursor="pointer">마이 페이지</Text>
            </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MyHeader;