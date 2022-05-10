import React from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { OneMap } from "../components/map/index";
import { Grid, Image, Text, Button } from "../elements/index";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { history } from "../redux/configStore";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../shared/css/dot.css";

const DetailOffice = () => {
  const estateid = useParams().estateId;
  //   const list = useSelector((state) => state.search.list);
  //   const officeData = list?.filter((a) => a.estateid === +estateid);

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
      <MyHeader>매물번호 {estateid}</MyHeader>
      <Grid bg="#F5F5F5">
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
            <Text color="#000000" size="0.875rem">
              트리플 역세권 사무실
            </Text>
            <Text color="#000000" size="0.875rem">
              <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
            </Text>
          </Grid>
          <Grid>
            <Text color="#000000" size="0.875rem">
              트리플 역세권 사무실
            </Text>
            <Text color="#000000" size="0.875rem">
              <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
            </Text>
          </Grid>
        </Grid>
      </Grid>

      {/* <OneMap estateid={estateid} /> */}
      <DetailWrap>
        {/* 맵돌리기 */}
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          _onClick={() => {
            history.push(`/detail/${estateid}/`);
          }}
        >
          <Grid
            width="25%"
            height="70px"
            margin="0 5% 0 0"
            overflow="hidden"
            borderRadius="8px"
          >
            <Image
              src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg"
              shape="rectangle"
            />
          </Grid>
          <Grid
            width="80%"
            height="70px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text bold size="0.625rem">
              초역세권 텍스트
            </Text>
            <Text bold size="0.875rem">
              트리플역세권사무실(광희동,장충동)
            </Text>
            <Text size="0.625rem">초역세권 텍스트</Text>
          </Grid>
        </Grid>
        {/* 맵돌리기 */}
      </DetailWrap>
    </React.Fragment>
  );
};
const DetailWrap = styled.div`
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  padding: 0 16px;
`;

const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
`;

const Span = styled.span`
  font-size: 0.625rem;
`;

export default DetailOffice;
