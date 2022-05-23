import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Text } from "../../elements/index";
import { history } from "../../redux/configStore";
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
          _onClick={() => {
            history.push("/event");
          }}
        >
          <BannerBlue>
            <Div>
              <SP>오싹의 설문조사에 참여하시면,</SP>
              <P>
                <Text color="#2759F5" bold>
                  추첨
                </Text>
                을 통해
              </P>
              <P>
                <Text color="#2759F5" bold>
                  기프티콘을{" "}
                </Text>
                보내드려요!
              </P>
            </Div>
          </BannerBlue>
          <Grid width="142px" height="102px" position="absolute" right="13px">
            <img src={banner01} alt="설문조사 이미지" />
          </Grid>
        </Grid>
        {/* 배너2번 */}
        <Grid
          height="151px"
          display="flex"
          alignItems="center"
          position="relative"
          _onClick={() => {
            history.push("/event");
          }}
        >
          <BannerGreen>
            <Div>
              <SP>오싹의 숨은 버그를 찾아주시면,</SP>
              <P>
                선착순{" "}
                <Text color="#FF6868" bold>
                  3분
                </Text>
                에게
              </P>
              <P>
                <Text color="#FF6868" bold>
                  기프티콘{" "}
                </Text>
                보내드려요!
              </P>
            </Div>
          </BannerGreen>
          <Grid
            width="151px"
            height="133px"
            position="absolute"
            right="13px"
            bottom="20px"
          >
            <img src={banner02} alt="선물 이미지" />
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
  background-color: ${({ theme }) => theme.colors.banner};
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
