import React,{useEffect} from 'react';
import styled from 'styled-components';
import {Grid,Image,Text} from '../../elements/index';
import {XScrollDrag} from '../shared/home';
import { actionCreators as officeActions} from '../../redux/modules/office';
import { useDispatch, useSelector } from "react-redux";
import { history } from '../../redux/configStore';
import img01 from '../../static/images/1.jpg';
import img02 from '../../static/images/2.jpg';
import img03 from '../../static/images/3.jpg';
import img04 from '../../static/images/4.jpg';
import img05 from '../../static/images/5.jpg';

const PlaceList = () => {
    const dispatch=useDispatch();
    const HotList=useSelector((state)=>state.office.hot_list);
    console.log(HotList)
    useEffect(()=>{
        dispatch(officeActions.getHotDB())
      },[])

    return (
        <React.Fragment>
           
            <Grid overflow="hidden" width="100%">
            <XScrollDrag>
                <FlexBox  >
                    {/* {HotList && HotList?.map((o,idx)=>{
                        return(
                            <Grid key={idx} width="160px" height="180px"  borderRadius="8px" position="relative" overflow="hidden">
                                <Image padding="180px" src={idx} shape="rectangle" position="absolute"/>
                                <Grid  position="absolute" bottom="0" width="100%" height="68px" bg="rgba(0, 0, 0, 0.35)" padding="8px 16px 16px">
                                    <Grid width="42px" height="20px" bg="#fff" borderRadius="42px" display="flex" alignItems="center" justifyContent="center">
                                        <Text color="#111" size="10px">{o.monthly?o.monthly:"dd"}</Text>
                                    </Grid>
                                    <Grid color="#fff" fontSize="10px" padding="4px" >
                                        <Text bold>{o.building_info?o.building_info:"맛집거리가 눈앞에 펼쳐지는 맛집거리 오피스"}</Text>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })} */}
                    {/* map돌릴 부분 */}
                    <Grid width="160px" height="180px"  borderRadius="8px" position="relative" overflow="hidden" >
                                <Image padding="180px" src={img01} shape="rectangle" position="absolute"/>
                                <Grid  position="absolute" bottom="0" width="100%" height="68px" bg="rgba(0, 0, 0, 0.35)" padding="8px 16px 16px" _onClick={()=>{
                                    history.push(`/detail/${HotList[0]?.estateid}`)
                                }}>
                                    <Grid width="42px" height="20px" bg="#fff" borderRadius="42px" display="flex" alignItems="center" justifyContent="center">
                                        <Text color="#111" size="10px">{HotList[0]?.monthly}</Text>
                                    </Grid>
                                    <Grid color="#fff" fontSize="10px" padding="4px" >
                                        <Text bold>{HotList[0]?.building_info}</Text>
                                    </Grid>
                                </Grid>
                    </Grid>
                    <Grid width="160px" height="180px"  borderRadius="8px" position="relative" overflow="hidden" >
                                <Image padding="180px" src={img02} shape="rectangle" position="absolute"/>
                                <Grid  position="absolute" bottom="0" width="100%" height="68px" bg="rgba(0, 0, 0, 0.35)" padding="8px 16px 16px" _onClick={()=>{
                                    history.push(`/detail/${HotList[1]?.estateid}`)
                                }}>
                                    <Grid width="42px" height="20px" bg="#fff" borderRadius="42px" display="flex" alignItems="center" justifyContent="center">
                                        <Text color="#111" size="10px">{HotList[1]?.monthly}</Text>
                                    </Grid>
                                    <Grid color="#fff" fontSize="10px" padding="4px" >
                                        <Text bold>{HotList[1]?.building_info}</Text>
                                    </Grid>
                                </Grid>
                    </Grid>
                    <Grid width="160px" height="180px"  borderRadius="8px" position="relative" overflow="hidden" >
                                <Image padding="180px" src={img03} shape="rectangle" position="absolute"/>
                                <Grid  position="absolute" bottom="0" width="100%" height="68px" bg="rgba(0, 0, 0, 0.35)" padding="8px 16px 16px" _onClick={()=>{
                                    history.push(`/detail/${HotList[2]?.estateid}`)
                                }}>
                                    <Grid width="42px" height="20px" bg="#fff" borderRadius="42px" display="flex" alignItems="center" justifyContent="center">
                                        <Text color="#111" size="10px">{HotList[2]?.monthly}</Text>
                                    </Grid>
                                    <Grid color="#fff" fontSize="10px" padding="4px" >
                                        <Text bold>{HotList[2]?.building_info}</Text>
                                    </Grid>
                                </Grid>
                    </Grid>
                    <Grid width="160px" height="180px"  borderRadius="8px" position="relative" overflow="hidden" >
                                <Image padding="180px" src={img04} shape="rectangle" position="absolute"/>
                                <Grid  position="absolute" bottom="0" width="100%" height="68px" bg="rgba(0, 0, 0, 0.35)" padding="8px 16px 16px" _onClick={()=>{
                                    history.push(`/detail/${HotList[3]?.estateid}`)
                                }}>
                                    <Grid width="42px" height="20px" bg="#fff" borderRadius="42px" display="flex" alignItems="center" justifyContent="center">
                                        <Text color="#111" size="10px">{HotList[3]?.monthly}</Text>
                                    </Grid>
                                    <Grid color="#fff" fontSize="10px" padding="4px" >
                                        <Text bold>{HotList[3]?.building_info}</Text>
                                    </Grid>
                                </Grid>
                    </Grid>
                    <Grid width="160px" height="180px"  borderRadius="8px" position="relative" overflow="hidden" >
                                <Image padding="180px" src={img05} shape="rectangle" position="absolute"/>
                                <Grid  position="absolute" bottom="0" width="100%" height="68px" bg="rgba(0, 0, 0, 0.35)" padding="8px 16px 16px" _onClick={()=>{
                        history.push(`/detail/${HotList[4]?.estateid}`)
                    }}>
                                    <Grid width="42px" height="20px" bg="#fff" borderRadius="42px" display="flex" alignItems="center" justifyContent="center">
                                        <Text color="#111" size="10px">{HotList[4]?.monthly}</Text>
                                    </Grid>
                                    <Grid color="#fff" fontSize="10px" padding="4px" >
                                        <Text bold>{HotList[4]?.building_info}</Text>
                                    </Grid>
                                </Grid>
                    </Grid>
                
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