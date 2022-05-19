import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../../elements/index";

import { actionCreators as officeActions } from "../../redux/modules/office";
import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../shared/css/dot.css";

const OfficeTellLike = (props) => {
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

  const OfficeTellLikeList = useSelector((state) => state.office.like_list);

  useEffect(() => {
    dispatch(officeActions.getOfficeLikeDB(tabTitle[1]));
  }, [dispatch, tabTitle]);

  return (
    <React.Fragment>
      {OfficeTellLikeList &&
        OfficeTellLikeList.map((office, idx) => {
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
                  <Button
                    //is_like
                    position="absolute"
                    right="8px"
                    top="8px"
                    color="#FF679E"
                    fill_like
                  />
                </Grid>
              </Grid>
              <Grid
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                height="40px"
              >
                <Text color="#000000" size="14px">
                  {office.type ? office.type : "트리플 역세권 사무실"}
                </Text>
                <Text color="#000000" size="14px">
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
  font-size: 10px;
`;

export default OfficeTellLike;
