import React from "react";

import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { useParams } from "react-router-dom";
import { Grid, Image, Text, Button } from "../elements/index";
import { history } from "../redux/configStore";

import Bar from "../components/shared/Bar";
import img01 from "../assets/articlefst_1.png";
import img02 from "../assets/articlefst_2.png";
import img03 from "../assets/articlefst_3.png";
import img04 from "../assets/articlefst_4.png";

const HotPlaceArticle = () => {
  const name = useParams().name;

  //   const List = () => {
  //     const keyword = "을지로";
  //     history.push(`/map/office?query=${keyword}`);
  //   };

  const List = (keyword) => {
    //const keyword = "을지로";
    history.push(`/map/office?query=${keyword}`);
  };

  if (name === "articlefst") {
    return (
      <React.Fragment>
        <MyHeader>지금 가장 HOT한 지역 🔥</MyHeader>
        <Grid bg="#fff" minHeight="1170px" paddingBottom="90px">
          <Grid height="255px" bg="#fff" margin="0 0 10px 0">
            {/* Image*/}
            <Grid>
              <Image
                padding="251px"
                bottom="0"
                src={img01}
                shape="rectangle"
                position="absolute"
              />
            </Grid>
          </Grid>
          <Grid height="90px" bg="#fff" padding="16px 0">
            <Grid height="25px" bg="#fff" padding="0 16px">
              <Text color="#111" size="1.5rem">
                <Span>힙한 직장인들의 성지</Span>
              </Text>
            </Grid>
            <Grid height="30px" bg="#fff" padding="0 16px">
              <Text color="#111" size="1.5rem">
                <Span>힙지로라 불리는 오피스 을지로 🍻</Span>
              </Text>
            </Grid>
          </Grid>
          <Grid height="150px" bg="#fff" padding="0 16px" margin="25px 0">
            <P>
              과거에 경공업 공장, 인쇄소 등으로 붐볐던 을지로 을지로 지역은
              도심업무권역 CBD 중심지구인데다가 서울의 중심 중의 중심에 위치해
              있기 때문에 꾸준히 인기 있었던 지역입니다. 서울 전 지역 어디든
              오가기 편해 접근성과 풍부한 주변 인프라는 말할 것도 없습니다.
            </P>
          </Grid>
          <Grid height="271px" bg="#fff" margin="25px 0" padding="16px 0">
            {/* Image*/}
            <Grid>
              <Image
                padding="251px"
                src={img02}
                shape="rectangle"
                position="absolute"
              />
            </Grid>
          </Grid>
          <Grid height="137px" bg="#fff" padding="0 16px">
            <Grid height="100px" bg="#fff" margin="17px 0">
              <P>
                그런데 최근에는 ‘힙지로'리 불릴 만큼 MZ 세대의 새로운
                문화공간으로 거듭나고 있어 직장인들이 일과 생활의 균형, 워라벨을
                즐길 수 있는 지역으로 거듭나는 중입니다.
              </P>
            </Grid>
          </Grid>
          <Grid height="46px" bg="#fff" padding="0 16px">
            <a href="https://m.blog.naver.com/fast_five_/222648180619">
              <Sp>출처 https://m.blog.naver.com/fast_five_/222648180619</Sp>
            </a>
          </Grid>
          <Grid height="50px" bg="#fff" padding="0 16px">
            <Button
              width="100%"
              height="48px"
              backgroundColor="#3E00FF"
              borderRadius="8px"
              color="#FFFFFF"
              _onClick={() => {
                List("을지로");
              }}
            >
              을지로 매물 보러 가기
            </Button>
          </Grid>
        </Grid>
        {/* menu bar */}
        <Bar />
      </React.Fragment>
    );
  } else if (name === "articlesec") {
    return (
      <React.Fragment>
        <MyHeader>지금 가장 HOT한 지역 🔥</MyHeader>
        <Grid bg="#fff" minHeight="1430px" paddingBottom="90px">
          <Grid height="255px" bg="#fff" margin="0 0 10px 0">
            {/* Image*/}
            <Grid>
              <Image
                padding="251px"
                bottom="0"
                src={img03}
                shape="rectangle"
                position="absolute"
              />
            </Grid>
          </Grid>
          <Grid height="90px" bg="#fff" padding="16px 0">
            <Grid height="25px" bg="#fff" padding="0 16px">
              <Text color="#111" size="1.5rem">
                <Span>요즘 스타트업 사이에서</Span>
              </Text>
            </Grid>
            <Grid height="30px" bg="#fff" padding="0 16px">
              <Text color="#111" size="1.5rem">
                <Span> 가장 핫한 오피스 성수동🌿</Span>
              </Text>
            </Grid>
          </Grid>
          <Grid height="78px" bg="#fff" padding="0 16px" margin="25px 0">
            <P>
              ‘성수동' 하면 맛집, 카페 등 수많은 핫플이 떠오르죠, 그런데 이제는
              성수가 핫플 성지를 넘어 ‘ 오피스 핫플' 까지 넘보고 있습니다.
            </P>
          </Grid>
          <Grid height="102px" bg="#fff" padding="0 16px" margin="25px 0">
            <P>
              최근 다수의 IT 기업이 성수에 새롭게 둥지를 틀었는 데요. 이렇게
              여러 기업이 한 장소에 모이게 되면 노동 력 확보, 시장 판매 시 이점
              등 경제적 이익을 취할 수 있는 집적 효과가 나타납니다.
            </P>
          </Grid>
          <Grid height="78px" bg="#fff" padding="0 16px" margin="25px 0">
            <P>
              특히 성수는 지하철 2호선, 분당선이 있어 간마권, 시 청, 을지로,
              종로 일대로 이동하기 쉬워 교통이 편리 하다는 장점이 있는데요.
            </P>
          </Grid>
          <Grid height="271px" bg="#fff" margin="25px 0" padding="16px 0">
            {/* Image*/}
            <Grid>
              <Image
                padding="251px"
                src={img04}
                shape="rectangle"
                position="absolute"
              />
            </Grid>
          </Grid>
          <Grid
            height="236px"
            bg="#fff"
            padding="0 16px"
            // margin="25px 0"
          >
            <Grid height="80px" bg="#fff" margin="17px 0">
              <P>
                또, MZ 세대가 선호하는 상권이 형성돼 있는 점도 대 표님들의
                마음을 사로잡았습니다.
              </P>
            </Grid>
            <Grid height="100px" bg="#fff" margin="17px 0">
              <P>
                서울숲과 주변 개발도 이뤄지면서 구매력 높은 젊은 층이
                모여들었습니다. 최근 SM엔터테인먼트, 무신 사, 쏘카가 성수동에
                입주하고, 크래프톤이 입주를 준 비하며 ‘포스트 판교’로도 불리고
                있습니다.
              </P>
            </Grid>
          </Grid>
          <Grid height="46px" bg="#fff" padding="0 16px">
            <a href="https://m.blog.naver.com/fast_five_/222648180619">
              <Sp>출처 https://m.blog.naver.com/fast_five_/222648180619</Sp>
            </a>
          </Grid>
          <Grid height="50px" bg="#fff" padding="0 16px">
            <Button
              width="100%"
              height="48px"
              backgroundColor="#3E00FF"
              borderRadius="8px"
              color="#FFFFFF"
              _onClick={() => {
                List("성수동");
              }}
            >
              성수동 매물 보러 가기
            </Button>
          </Grid>
        </Grid>
        {/* menu bar */}
        <Bar />
      </React.Fragment>
    );
  }
};

const Span = styled.span`
  //font-size: 0.625rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: justify;
  line-height: 25px;
`;

const Sp = styled.p`
  //font-size: 0.975rem;
  color: ${({ theme }) => theme.colors.darkgray1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: justify;
`;
export default HotPlaceArticle;
