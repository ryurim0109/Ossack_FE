import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, radius, align, padding, border } = props;
  const styles = {
    src: src,
    size: size,
    radius: radius,
    align: align,
    padding: padding,
    border: border,
  };
  if (shape === "circle") {
    //프로필 이미지
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    //일반 이미지
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "",
  size: 40,
  radius: null,
  is_preview: false,
  align: false,
  children: null,
  ranking: false,
  padding: "100%",
  border: null,
};

const AspectOutter = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: ${(props) => (props.padding ? props.padding : "100%")};
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => props.radius};
  background-color: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 5.74%,
    rgba(108, 108, 108, 0.0421707) 86.75%,
    rgba(118, 118, 118, 0) 93.49%
  );
`;
const ImageCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  border: ${(props) => (props.border ? props.border : "")};
`;

export default Image;
