import React from 'react';
import {Text,Grid,Button,Image} from '../elements/index';

function Center() {
  return (
    <React.Fragment>
        <Grid width="100%" padding="0 16px" margin="42px 0" flexDirection="column">
            <Text size="1.25rem" bold>내 근처 추천매물</Text>
           
            <Grid width="100%"  margin="16px 0" display="flex" alignItems="center" justifyContent="space-between">
               <Grid>
                    <Text size="1rem" >성수동 근처</Text>
                </Grid>
                <Button width="60px" >더보기</Button>

            </Grid>
            {/* 내근처 추천매물 */}
            <Grid display="flex" alignItems="center" justifyContent="space-between">
                <Grid bg="#eee" width="30%" height="443px">
                </Grid>
                <Grid bg="#eee" width="30%" height="443px"></Grid>
                <Grid bg="#eee" width="30%" height="443px"></Grid>
            </Grid>
            {/* 신규 오피스 */}
            <Grid></Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Center;