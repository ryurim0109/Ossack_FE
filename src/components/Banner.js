import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Grid} from "../elements";
import styled from 'styled-components';

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
    }
    return (
      <React.Fragment>
        <StyledSlider {...settings} >
          <Grid  height="250px" bg="green">
            <h3>1</h3>
          </Grid >
          <Grid height="250px" bg="red">
            <h3>2</h3>
          </Grid>
          <Grid  height="250px" bg="yellow">
            <h3>3</h3>
          </Grid>
        </StyledSlider>
      </React.Fragment>
    );
  
}
const StyledSlider = styled(Slider)`
   height: 250px; 
   width: 100vw;
   position:relative;

}`
export default Banner;