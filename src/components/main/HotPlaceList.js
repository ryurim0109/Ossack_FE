import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../elements/index";
import { history } from "../../redux/configStore";
import img01 from "../../assets/hotImg01.jpg";
import img02 from "../../assets/hotImg02.jpg";
const PlaceList = () => {
  const hotOfficeClick = (name) => {
    history.push(`/hotplacearticle/${name}`);
  };
  return (
    <React.Fragment>
      <Grid overflow="hidden" width="100%">
        <FlexBox>
          <Grid
            width="165px"
            height="180px"
            borderRadius="8px"
            position="relative"
            overflow="hidden"
            margin="0 7.5px 0 0"
          >
            <Image
              padding="180px"
              src={img01}
              shape="rectangle"
              position="absolute"
            />
            <Grid
              position="absolute"
              bottom="0"
              width="100%"
              height="68px"
              bg="rgba(0, 0, 0, 0.35)"
              padding="8px 16px 16px"
              _onClick={() => {
                hotOfficeClick("articlefst");
              }}
            >
              <Grid
                width="42px"
                height="20px"
                bg="#fff"
                borderRadius="42px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text size="10px">을지로</Text>
              </Grid>
              <Grid fontSize="10px" padding="4px">
                <Text color="#fff" bold>
                  힙한 직장인들의 성지 힙지로라 불리는 을지로 오피스
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            width="165px"
            height="180px"
            borderRadius="8px"
            position="relative"
            overflow="hidden"
          >
            <Image
              padding="180px"
              src={img02}
              shape="rectangle"
              position="absolute"
            />
            <Grid
              position="absolute"
              bottom="0"
              width="100%"
              height="68px"
              bg="rgba(0, 0, 0, 0.35)"
              padding="8px 16px 16px"
              _onClick={() => {
                hotOfficeClick("articlesec");
              }}
            >
              <Grid
                width="42px"
                height="20px"
                bg="#fff"
                borderRadius="42px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text size="10px">성수동</Text>
              </Grid>
              <Grid fontSize="10px" padding="4px">
                <Text color="#fff" bold>
                  요즘 스타트업 사이에서 가장 핫한 오피스 성수동
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </FlexBox>
      </Grid>
    </React.Fragment>
  );
};
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
export default PlaceList;
