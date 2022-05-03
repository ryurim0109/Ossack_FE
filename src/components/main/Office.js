import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../../elements/index";

const Office = () => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        margin="16px 0"
        height="235px"
        bg="#999"
        borderRadius="8px"
        position="relative"
      >
        <Button
          is_like
          position="absolute"
          right="8px"
          top="8px"
          color="#fff"
        />
        <Grid
          position="absolute"
          bottom="0"
          padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="60px"
        >
          <Text color="#fff" size="0.875rem">
            트리플 역세권 사무실
          </Text>
          <Text color="#fff" size="0.875rem">
            <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
          </Text>
        </Grid>
      </Grid>
      <Grid
        width="100%"
        margin="16px 0"
        height="235px"
        bg="#999"
        borderRadius="8px"
        position="relative"
      >
        <Button
          is_like
          position="absolute"
          right="8px"
          top="8px"
          color="#fff"
        />
        <Grid
          position="absolute"
          bottom="0"
          padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="60px"
        >
          <Text color="#fff" size="0.875rem">
            트리플 역세권 사무실
          </Text>
          <Text color="#fff" size="0.875rem">
            <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
          </Text>
        </Grid>
      </Grid>
      <Button backgroundColor="none" fontSize="0.875rem">
        더보기
      </Button>
    </React.Fragment>
  );
};

const Span = styled.span`
  font-size: 0.625rem;
`;

export default Office;
