import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid,Text } from "../../elements/index";
import styled from "styled-components";
import banner01 from '../../static/images/banner01.png';

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
        <Grid height="100px" bg="#B9EAFF" display="flex" alignItems="center" position="relative">
          <Div>
            <P>설문 참여하고</P> 
            <P><Text color="#2759F5" bold>기프티콘</Text> 받아가세요.</P> 
          </Div>
          <Grid width="40%" height="100px" position="absolute"left="60%"><img src={banner01} alt="배너"/></Grid>
        </Grid>
        <Grid height="100px" bg="#B9EAFF" display="flex" alignItems="center" position="relative">
          <Div>
            <P>설문 참여하고</P> 
            <P><Text color="#2759F5" bold>기프티콘</Text> 받아가세요.</P> 
          </Div>
          <Grid width="40%" height="100px" position="absolute"left="60%"><img src={banner01} alt="배너"/></Grid>
        </Grid>
        <Grid height="100px" bg="#B9EAFF" display="flex" alignItems="center" position="relative">
          <Div>
            <P>설문 참여하고</P> 
            <P><Text color="#2759F5" bold>기프티콘</Text> 받아가세요.</P> 
          </Div>
          <Grid width="40%" height="100px" position="absolute"left="60%"><img src={banner01} alt="배너"/></Grid>
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
const P=styled.p`
  font-size:1rem;
  font-weight:bold;
  width:100%;

`;
const Div=styled.div`
  width:50%;
  height:58px;
  padding-left:32px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`
export default Banner;
