import React from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../elements/index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../shared/css/dot.css";

const OfficeLike = () => {
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

  return (
    <React.Fragment>
      <Grid>
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
              <Image
                padding="235px"
                bottom="0"
                src="https://velog.velcdn.com/images/ryurim0109/post/aa1c2d4c-3f28-4549-9c63-b1aeb96073a6/image.jpg"
                shape="rectangle"
                position="absolute"
              />
              <Image
                padding="235px"
                bottom="0"
                src="https://velog.velcdn.com/images/ryurim0109/post/47929a13-bcc8-4e8a-a8a6-312c9db12651/image.jpg"
                shape="rectangle"
                position="absolute"
              />
              <Image
                padding="235px"
                bottom="0"
                src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg"
                shape="rectangle"
                position="absolute"
              />
            </StyledSlider>
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
          <Text color="#000000" size="14px">
            트리플 역세권 사무실
          </Text>
          <Text color="#000000" size="14px">
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
          <Text color="#000000" size="14px">
            트리플 역세권 사무실
          </Text>
          <Text color="#000000" size="14px">
            <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
          </Text>
        </Grid>
      </Grid>
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

export default OfficeLike;
