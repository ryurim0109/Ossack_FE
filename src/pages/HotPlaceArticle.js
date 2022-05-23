import React from "react";

import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { useParams } from "react-router-dom";
import { Grid, Image, Text } from "../elements/index";
import Bar from "../components/shared/Bar";

import img01 from "../assets/articlefst_1.png";
import img02 from "../assets/articlefst_2.png";
import img03 from "../assets/articlefst_3.png";
import img04 from "../assets/articlefst_4.png";

const HotPlaceArticle = () => {
  const name = useParams().name;

  if (name === "articlefst") {
    return (
      <React.Fragment>
        <MyHeader>지금 가장 HOT한 지역 🔥</MyHeader>
        <Grid
          bg="#F5F5F5"
          minHeight="1540px"
          paddingBottom="90px"
          border="2px solid red"
        >
          <Grid
            height="255px"
            bg="#fff"
            margin="0 0 10px 0"
            border="2px solid black"
          >
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
          <Grid
            height="200px"
            bg="#fff"
            margin="0 0 10px 0"
            border="2px solid green"
          >
            <Grid
              height="30px"
              bg="#fff"
              margin="0 0 10px 0"
              border="2px solid pink"
            >
              <Text color="#111" size="1.5rem">
                <Span>힙한 직장인들의 성지</Span>
              </Text>
            </Grid>
            <Grid>
              <Text color="#111" size="1.5rem">
                <Span>힙지로라 불리는 오피스 을지로 🍻</Span>
              </Text>
            </Grid>
          </Grid>
        </Grid>
        {/* menu bar */}
        <Bar />
      </React.Fragment>
    );
  } else if (name === "articlesec") {
  }
};

const Span = styled.span`
  //font-size: 0.625rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

export default HotPlaceArticle;
