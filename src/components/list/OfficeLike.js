import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../../elements/index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfficeLike = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  };

  return (
    <React.Fragment>
      <Grid>
        <StyledSlider {...settings}>
          <Grid
            width="100%"
            margin="16px 0"
            height="235px"
            bg="#999"
            borderRadius="8px"
            position="relative"
          >
            <Grid>
              <Button
                is_like
                position="absolute"
                right="8px"
                top="8px"
                color="#fff"
              />
            </Grid>
          </Grid>
        </StyledSlider>

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
            트리플 역세권 사무실
          </Text>
          <Text color="#000000" size="0.875rem">
            <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
          </Text>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          width="100%"
          margin="16px 0"
          height="235px"
          bg="#999"
          borderRadius="8px"
          position="relative"
        >
          <Grid>
            <Button
              is_like
              position="absolute"
              right="8px"
              top="8px"
              color="#fff"
            />
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
            트리플 역세권 사무실
          </Text>
          <Text color="#000000" size="0.875rem">
            <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
          </Text>
        </Grid>
      </Grid>
      <Button backgroundColor="none" fontSize="0.875rem">
        더보기
      </Button>
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
