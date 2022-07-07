import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../../elements/index";
import { RootState, useAppDispatch } from "../../redux/configStore";
import { getShareLikeDB,unlikeShareDB } from "../../redux/modules/favorite";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SlickSlider, ImageCnt } from "../shared/home";
import ossack from "../../assets/ossack02.jpg";

const OfficeTellLike = () => {
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const ShareLikeList = useSelector((state:RootState) => state.favorite.share_like_list);

  useEffect(() => {
    appDispatch(getShareLikeDB());
  }, []);

  if (ShareLikeList?.length === 0) {
    return (
      <React.Fragment>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid display="flex" justifyContent="center" padding="91px 0 13px 0">
            <Image src={ossack} size="117" />
          </Grid>
          <Text size="14px" color="#808080">
            찜한 공유 오피스가 없네요 !
          </Text>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {ShareLikeList &&
          ShareLikeList.map((office, idx) => {
            return (
              <Grid key={idx}>
                <Grid
                  width="100%"
                  margin="16px 0"
                  height="235px"
                  bg="#999"
                  borderRadius="8px"
                  position="relative"
                  overflow="hidden"
                >
                  <Grid>
                    <SlickSlider>
                      {office.imageList &&
                        office.imageList.map((image:string, idx:number) => {
                          return (
                            <Grid
                              cursor="pointer"
                              key={idx}
                              _onClick={() => {
                                navigate(
                                  `/detail/share/${office.shareofficeid}?query=${office.address}`
                                );
                              }}
                            >
                              <Image
                                padding="235px"
                                bottom="0"
                                src={image}
                                shape="rectangle"
                                position="absolute"
                                radius="8px"
                              />
                            </Grid>
                          );
                        })}
                    </SlickSlider>
                    <Grid
                      width="33px"
                      height="22px"
                      position="absolute"
                      right="8px"
                      bottom="8px"
                    >
                      <ImageCnt>{office?.imageList.length}</ImageCnt>
                    </Grid>
                    <Button
                      position="absolute"
                      right="8px"
                      top="8px"
                      color="#FF679E"
                      fill_like
                      _onClick={() => {
                        appDispatch(
                          unlikeShareDB(office.shareofficeid)
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  height="40px"
                  _onClick={() => {
                    navigate(
                      `/detail/share/${office.shareofficeid}?query=${office.address}`
                    );
                  }}
                >
                  <Text bold size="14px" cursor="pointer">
                    {office.name}
                  </Text>
                  <Text bold size="14px" cursor="pointer">
                    <Span>최소 금액</Span> {office.price ? office.price : 200}
                  </Text>
                </Grid>
              </Grid>
            );
          })}
      </React.Fragment>
    );
  }
};

const Span = styled.span`
  font-size: 10px;
  font-weight: normal;
`;

export default OfficeTellLike;
