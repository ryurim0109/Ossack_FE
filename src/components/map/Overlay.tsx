import React from "react";
import { Grid, Text } from "../../elements/index";
interface OverlaynProps {
  position: any;
  name:string;
}
const Overlay = (props:OverlaynProps) => {
  const { position, name } = props;

  return (
    <React.Fragment>
      <Grid
        width="54px"
        height="49px"
        borderRadius="8px"
        bg={name === "share" ? "#FF5151" : "#3E00FF"}
        color="#fff"
        position="relative"
      >
        {name === "share" ? (
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="10px 0"
          >
            <Text color="#fff" bold size="14px">
              {position?.title ? position?.title : "서울시"}
            </Text>
          </Grid>
        ) : (
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="10px 0"
          >
            <Text color="#fff" bold size="10px">
              {position?.title ? position?.title : "서울시"}
            </Text>
            <Text color="#fff" bold size="14px">
              {position?.average}만원
            </Text>
          </Grid>
        )}

        <Grid
          width="27px"
          height="16px"
          position="absolute"
          top="-5px"
          right="-10px"
          bg="#fff"
          borderRadius="27px"
          border={name === "share" ? "1px solid #FF2727" : "1px solid #0055FF"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#000" size="8px">
            {position?.estate_cnt}
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Overlay;
