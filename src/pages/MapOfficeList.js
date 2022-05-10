import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { Grid,Image,Button,Text } from '../elements/index';
import  { actionCreators as officeActions } from '../redux/modules/office';
import { MyHeader } from '../components/my/index';
import { history } from '../redux/configStore';

const MapOfficeList = (props) => {
    const dispatch = useDispatch();
    const search = (props.location.search).split("=")[1];
    console.log(search)
    const officeData= useSelector((state)=>state.office.list)

   useEffect(()=>{
    dispatch(officeActions.getSOListDB(search))
   },[search])
    return (
        <React.Fragment>
            <MyHeader>{search} 리스트</MyHeader>
            <Outter>
            {officeData &&
        officeData.map((o, idx) => {
          return (
            <Grid 
            _onClick={()=>{
              history.push(`/detail/${o.estateid}`)
            }}
              key={idx}
              width="320px"
              margin="12px 0 32px 0"
              height="235px"
              bg="#999"
              borderRadius="8px"
              position="relative"
              overflow="hidden"
            >
              <Image
                padding="235px"
                bottom="0"
                src={o.images[0]}
                shape="rectangle"
                position="absolute"
              />
              <Grid
                width="100%"
                height="235px"
                bottom="0"
                position="absolute"
                bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8) 5.74%, rgba(108, 108, 108, 0.0421707) 86.75%, rgba(118, 118, 118, 0) 93.49%)"
              ></Grid>
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

              <Grid
                position="absolute"
                bottom="0"
                padding="0 16px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                height="60px"
              >
                <Text color="#fff" size="0.875rem">
                  {o.type ? o.type : "트리플 역세권 사무실"}
                </Text>
                <Text color="#fff" size="0.875rem">
                  <Span>월세</Span> {o.rent_fee ? o.rent_fee : 200}만
                  <Span>보증금</Span> {o.deposit ? o.deposit : "3000만"}
                </Text>
              </Grid>
            </Grid>
          );
        })}
        </Outter>
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