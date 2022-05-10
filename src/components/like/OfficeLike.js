import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../../elements/index";
import { actionCreators as officeActions } from "../../redux/modules/office";
import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../shared/css/dot.css";

const OfficeLike = (props) => {
  const dispatch = useDispatch();
  const { tabTitle } = props;
  console.log("props : ", props);

  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  };

  const OfficeLikeList = useSelector((state) => state.office.like_list);

  useEffect(() => {
    dispatch(officeActions.getOfficeLikeDB(tabTitle[0]));
  }, [dispatch, tabTitle]);

  return (
    <React.Fragment>
      {OfficeLikeList &&
        OfficeLikeList.map((office, idx) => {
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
                  <StyledSlider {...settings} dotsClass="test-css">
                    {office.images &&
                      office.images.map((image, idx) => {
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
                  </StyledSlider>
                  {office.mylike ? (
                    <Button
                      fill_like
                      position="absolute"
                      right="8px"
                      top="8px"
                      color="#FF0000"
                      _onClick={() =>
                        dispatch(officeActions.deleteLikeDB(office.estateid))
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
                        dispatch(officeActions.clickLikeDB(office.estateid))
                      }
                    />
                  )}
                </Grid>
              </Grid>
              <Grid
                bottom="0"
                padding="0 16px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                height="40px"
              >
                <Text color="#000000" size="0.875rem">
                  {office.type ? office.type : "트리플 역세권 사무실"}
                </Text>
                <Text color="#000000" size="0.875rem">
                  <Span>월세</Span> {office.rent_fee ? office.rent_fee : 200}만
                  {""}
                  <Span>보증금</Span>{" "}
                  {office.deposit ? office.deposit : "3,000만"}
                </Text>
              </Grid>
            </Grid>
          );
        })}
    </React.Fragment>
  );
};

const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
`;

const Span = styled.span`
  font-size: 0.625rem;
`;

export default OfficeLike;
