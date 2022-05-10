import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { Grid,Image,Button,Text } from '../elements/index';
import  { actionCreators as officeActions } from '../redux/modules/office';
import { MyHeader } from '../components/my/index';
import { history } from '../redux/configStore';
import { SlickSlider,Bar } from '../components/shared/home';


const MapOfficeList = (props) => {
    const dispatch = useDispatch();
    const search = (props.location.search).split("=")[1];
    //console.log(decodeURI(search))
    const officeData= useSelector((state)=>state.office.list);

   useEffect(()=>{
    dispatch(officeActions.getSOListDB(search))
   },[search])
    return (
        <React.Fragment>
            <MyHeader>{decodeURI(search)} 리스트</MyHeader>
            <Outter>
            {officeData &&
        officeData.map((o, idx) => {
          return (
            <>
            <Grid 
              key={idx}
              width="100%"
              margin="16px 0"
              height="235px"
              bg="#999"
              borderRadius="8px"
              position="relative"
              overflow="hidden"
            >
              <SlickSlider>
              {o.images &&
                      o.images.map((image, idx) => {
                        return (
                          <Image
                            key={idx}
                            padding="235px"
                            bottom="0"
                            src={image}
                            shape="rectangle"
                            position="absolute"
                          />
                        );
                      })}
              </SlickSlider>
              {o.mylike ? (
                <Button
                  fill_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#FF0000"
                  _onClick={() =>
                    dispatch(officeActions.deleteLikeDB(o.estateid))
                  }
                />
              ) : (
                <Button
                  is_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#fff"
                  _onClick={() =>
                    dispatch(officeActions.clickLikeDB(o.estateid))
                  }
                />
              )}
            </Grid>
            <Grid  _onClick={()=>{
              history.push(`/detail/${o.estateid}`)
            }} cursor="pointer"
             width="100%" height="76px" display="flex" flexDirection="column" justifyContent="center">
                  <Text size="0.625rem" bold>{o.buildingInfo}</Text>
                  <Text size="0.875rem">{o.type}</Text>
                    <Text size="0.875rem" bold><Span>월세</Span>{o.rent_fee}만원  <Span>보증금</Span>{o.deposit}만원</Text>
                 
            </Grid>
            </>
          );
        })}
        </Outter>
        <Bar/>
        </React.Fragment>
    );
};
const Outter=styled.div`
  width:100%;
  padding:0 16px;
  padding-bottom:90px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`;
const Span = styled.span`
  font-size: 0.625rem;
`;

export default MapOfficeList;