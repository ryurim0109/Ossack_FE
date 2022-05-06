import React,{useEffect} from 'react';
import styled from 'styled-components';
import {Grid,Image,Text} from '../../elements/index';
import {XScrollDrag} from '../shared/home';
import { actionCreators as officeActions} from '../../redux/modules/office';
import { useDispatch, useSelector } from "react-redux";

const PlaceList = () => {
    const dispatch=useDispatch();
    const HotList=useSelector((state)=>state.office.hot_list)
    useEffect(()=>{
        dispatch(officeActions.getHotDB())
      },[])

    return (
        <React.Fragment>
           
            <Grid overflow="hidden" width="100%">
            <XScrollDrag>
                <FlexBox  >
                    {HotList && HotList.map((o,idx)=>{
                        return(
                            <Grid key={idx} width="160px" height="180px" bg="red" borderRadius="8px" position="relative" overflow="hidden">
                                <Image padding="180px" src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg" shape="rectangle" position="absolute"/>
                                <Grid  position="absolute" bottom="0" width="100%" height="68px" bg="rgba(0, 0, 0, 0.35)" padding="8px 16px 16px">
                                    <Grid width="42px" height="20px" bg="#fff" borderRadius="42px" display="flex" alignItems="center" justifyContent="center">
                                        <Text color="#111" size="10px">{o.subways[0].station?o.subways[0].station:"연남동"}</Text>
                                    </Grid>
                                    <Grid color="#fff" fontSize="10px" padding="4px" >
                                        <Text bold>{o.buildingInfo?o.buildingInfo:"맛집거리가 눈앞에 펼쳐지는 맛집거리 오피스"}</Text>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                    {/* map돌릴 부분 */}
                
                </FlexBox>
                </XScrollDrag>
            </Grid>
        
        </React.Fragment>
    );
};
const FlexBox=styled.div`
 width:1000px;
 display:flex;
 margin: 16px 0 0 0;
 gap:10px;

`;
export default PlaceList;