import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "../../elements/index";
import styled from "styled-components";

const Banner = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
  };
  return (
    <React.Fragment>
      <StyledSlider {...settings}>
        <Grid height="100px" bg="#ccc">
          <h3>1</h3>
        </Grid>
        <Grid height="100px" bg="#c4c4c4">
          <h3>2</h3>
        </Grid>
        <Grid height="100px" bg="#c2c2c2">
          <h3>3</h3>
        </Grid>
      </StyledSlider>
    </React.Fragment>
  );
};
const StyledSlider = styled(Slider)`
  height: 100px;
  width: 100%;
  position: relative;
`;
export default Banner;
