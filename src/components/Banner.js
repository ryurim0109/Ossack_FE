import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Grid } from "../elements";

const Banner = (props) => {
    
    const settings = {
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }
    return (
      <>
        <h2> 배너</h2>
        <Slider {...settings}>
          <Grid width="100%" height="250px" bg="green">
            <h3>1</h3>
          </Grid >
          <Grid width="100%" height="250px" bg="red">
            <h3>2</h3>
          </Grid>
          <Grid width="100%" height="250px" bg="yellow">
            <h3>3</h3>
          </Grid>
        </Slider>
      </>
    );
  
}
export default Banner;