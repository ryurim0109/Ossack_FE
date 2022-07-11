import React from "react";
import styled from "styled-components";
import { Text } from "../../elements/index";
import { ReactComponent as Img } from "../../assets/img.svg";
interface ImageCntProps {
  children: React.ReactNode | JSX.Element;
}
const ImageCnt = (props:ImageCntProps) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Div>
        <Img />
        <Text size="12px" color="#fff">
          {children}
        </Text>
      </Div>
    </React.Fragment>
  );
};

ImageCnt.defaultProps = {
  children: null,
};
const Div = styled.div`
  width: 33px;
  height: 22px;
  background: rgba(17, 17, 17, 0.6);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default ImageCnt;
