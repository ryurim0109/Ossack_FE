import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Text } from "../../elements/index";
import styled from "styled-components";
import banner01 from "../../assets/banner01.png";
import banner02 from "../../assets/banner02.png";

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
        {/* 배너1번 */}
        <Grid
          height="151px"
          display="flex"
          alignItems="center"
          position="relative"
        >
          <BannerBlue>
            <Div>
              <P>설문 참여하고</P>
              <P>
                <Text color="#2759F5" bold>
                  기프티콘
                </Text>{" "}
                받아가세요.
              </P>
            </Div>
          </BannerBlue>
          <Grid width="142px" height="102px" position="absolute" right="45px">
            <img src={banner01} alt="배너" />
          </Grid>
        </Grid>
        {/* 배너2번 */}
        <Grid
          height="151px"
          display="flex"
          alignItems="center"
          position="relative"
        >
          <BannerGreen>
            <Div>
              <SP>오싹을 통해 첫 매물 내 놓으면</SP>
              <P>중개 수수료</P>
              <P>
                <Text color="#FF6868" bold>
                  최대40%{" "}
                </Text>
                지원!
              </P>
            </Div>
          </BannerGreen>
          <Grid width="190px" height="151px" position="absolute" right="5px">
            <img src={banner02} alt="배너" />
          </Grid>
        </Grid>
      </StyledSlider>
    </React.Fragment>
  );
};
const StyledSlider = styled(Slider)`
  height: 151px;
  width: 100%;
  position: relative;
`;
const BannerBlue = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.blueBanner};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BannerGreen = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.subYellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  width: 100%;
`;
const SP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  width: 100%;
`;
const Div = styled.div`
  width: 50%;
  height: 58px;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Banner;
