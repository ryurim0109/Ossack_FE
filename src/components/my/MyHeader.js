import React from 'react';
import {Button,Grid,Text} from '../../elements/index';
import { history } from '../../redux/configStore';

const MyHeader = (props) => {
    const {children} =props;
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
                    <Text size="1.250rem" bold cursor="pointer">{children}</Text>
            </Grid>
            </Grid>
        </React.Fragment>
    );
};
MyHeader.defaultProps = {
    children: null,
}
export default MyHeader;