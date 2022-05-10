import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../shared/css/dot.css";

const SlickSlider = (props) => {
    const {children} =props;
    
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
             <StyledSlider {...settings} dotsClass="test-css">
                   {children}
            </StyledSlider>
        </React.Fragment>
    );
};
const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
`;

export default SlickSlider;