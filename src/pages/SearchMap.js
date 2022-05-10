
import React from 'react';
import styled from 'styled-components';
import { MyHeader } from '../components/my/index';
import { OneMap } from '../components/map/index';
import { Grid,Image,Text } from '../elements/index';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { history } from '../redux/configStore';
 
const SearchMap = () => {
    const estateid = useParams().estateId;
    //   const list = useSelector((state) => state.search.list);
//   const officeData = list?.filter((a) => a.estateid === +estateid);
    return (
        <React.Fragment>
            <MyHeader>리스트</MyHeader>
            <OneMap estateid={estateid}/>
            <DetailWrap>
                {/* 맵돌리기 */}
                <Grid display="flex"  justifyContent="space-between" alignItems="center" _onClick={()=>{
                        history.push(`/detail/${estateid}/`)
                }}>
                    <Grid width="25%" height="70px" margin="0 5% 0 0" overflow="hidden" borderRadius="8px">
                        <Image src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg" shape="rectangle" />
                    </Grid>
                    <Grid width="80%"  height="70px" display="flex" flexDirection="column"  justifyContent="center">
                        <Text bold size="0.625rem">초역세권 텍스트</Text>
                        <Text bold size="0.875rem">트리플역세권사무실(광희동,장충동)</Text>
                        <Text size="0.625rem">초역세권 텍스트</Text>
                    </Grid>
                </Grid>
                 {/* 맵돌리기 */}
            </DetailWrap>
        </React.Fragment>
    );
}
const DetailWrap=styled.div`
    width:100%;
    height:100px;
    background:#fff;
    position: fixed;
    bottom: 0px;
    z-index: 1;
    padding:0 16px;
    


`;
export default SearchMap;

