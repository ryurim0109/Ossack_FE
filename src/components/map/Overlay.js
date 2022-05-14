import React from "react";
import { Grid, Text } from "../../elements/index";
import pin from "../../assets/pin.svg";

const Overlay = (props) => {
  const { position, OverLavel } = props;
  //console.log(position?.estate[0]?.type, "????")
  //console.log(OverLavel, "나는 레벨인데????")
  if (OverLavel === 5) {
    return (
      <React.Fragment>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          position="relative"
          height="30px"
          bg="#6E2EF6"
          borderRadius="100px"
        >
          <Grid
            width="30px"
            justifyContent="center"
            display="flex"
            alignItems="center"
            left="0"
            height="30px"
            border="1px solid #6E2EF6"
            borderRadius="30px"
            position="absolute"
            bg="#fff"
          >
            <Text> {position?.estate_cnt}</Text>
          </Grid>
          <Text color="#fff" bold textIndent="28px" size="14px">
            {position?.title}
          </Text>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <img src={pin} alt="핀이미지" />
        </Grid>
      </React.Fragment>
    );
  } else
    return (
      <React.Fragment>
        <Grid
          width="54px"
          height="49px"
          borderRadius="8px"
          bg="#0373F3"
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
              {position?.title ? position?.title : "서울시"}
            </Text>
            <Text bold size="14px">
              {position?.average}만원
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
            border="1px solid #0055FF"
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
