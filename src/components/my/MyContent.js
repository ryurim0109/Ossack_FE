import React from 'react';
import {Button,Grid,Text} from '../../elements/index';

const MyContent = () => {
    return (
        <React.Fragment>
            <Grid width="100%" height="135px" padding="0 16px"
            position="relative" display="flex" flexDirection="column" alignItems="center" justifyContent="center"
            >
                <Grid display="flex" alignItems="center" justifyContent="space-between">
                    <Grid  display="flex" alignItems="center">
                        {/* <Grid width="24px" margin="0 10px 0 0" height="24px" bg="red"> </Grid> */}
                        <Text size="1.250rem" cursor="pointer">자주 하는 질문</Text>
                    </Grid>
                    <Button is_right/>
                </Grid>
                <Grid display="flex" alignItems="center" justifyContent="space-between">
                    <Grid  display="flex" alignItems="center">
                        {/* <Grid width="24px" margin="0 10px 0 0" height="24px" bg="red"> </Grid> */}
                        <Text size="1.250rem" cursor="pointer">팀원 소개</Text>
                    </Grid>
                    <Button is_right/>
                </Grid>
                <Grid display="flex" alignItems="center" justifyContent="space-between">
                    <Grid  display="flex" alignItems="center">
                        {/* <Grid width="24px" margin="0 10px 0 0" height="24px" bg="red"> </Grid> */}
                        <Text size="1.250rem" cursor="pointer">계정 엑세스</Text>
                    </Grid>
                    <Button is_right/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MyContent;