import React from "react";
import { Grid, Text } from "../../elements/index";

const Overlay = (props) => {
  const { position } = props;
  // console.log(position?.estate[0]?.type, "????")
  return (
    <React.Fragment>
      <Grid
        width="54px"
        height="65px"
        borderRadius="8px"
        bg="#000"
        color="#fff"
        position="relative"
      >
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="10px 0"
        >
          <Text bold size="10px">
            {position?.title}
          </Text>
          <Text bold size="14px">
            999만
          </Text>
        </Grid>

        <Grid
          width="27px"
          height="16px"
          position="absolute"
          top="-5px"
          right="-10px"
          bg="#fff"
          borderRadius="27px"
          border="1px solid #ccc"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#000" size="8px">
            999
          </Text>
        </Grid>
        <Grid
          width="54px"
          height="20px"
          position="absolute"
          bottom="0"
          bg="#fff"
          borderRadius="0 0 8px 8px"
          border="1px solid #000"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#000" size="10px">
            999
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Overlay;
