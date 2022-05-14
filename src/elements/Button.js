import React from "react";
import styled from "styled-components";

import { TiHeart } from "react-icons/ti";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdClose,
} from "react-icons/md";

import pro_edit from "../assets/pro_edit.svg";
import bin_heart from "../assets/favourite.svg";

const Button = (props) => {
  const {
    color,
    _onClick,
    children,
    justifyContent,
    margin,
    width,
    is_right,
    padding,
    backgroundColor,
    height,
    borderRadius,
    top,
    bottom,
    left,
    right,
    hover,
    display,
    is_like,
    fontSize,
    position,
    is_back,
    is_edit,
    is_close,
    _disabled,
    fill_like,
    alignItems,
    border,
  } = props;

  const styles = {
    margin,
    width,
    padding,
    position,
    backgroundColor,
    color,
    height,
    borderRadius,
    justifyContent,
    top,
    bottom,
    left,
    right,
    hover,
    display,
    fontSize,
    alignItems,
    border,
  };
  if (is_like) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <img src={bin_heart} alt="하트아이콘" />
        </BtnBox>
      </React.Fragment>
    );
  }
  if (fill_like) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <FillHeart />
        </BtnBox>
      </React.Fragment>
    );
  }
  if (is_close) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <X />
        </BtnBox>
      </React.Fragment>
    );
  }
  if (is_right) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <Right />
        </BtnBox>
      </React.Fragment>
    );
  }
  if (is_back) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <Back />
        </BtnBox>
      </React.Fragment>
    );
  }

  if (is_edit) {
    return (
      <React.Fragment>
        <BBox onClick={_onClick} {...styles}>
          <img src={pro_edit} alt="수정 아이콘" />
        </BBox>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ButtonBox {...styles} onClick={_onClick} disabled={_disabled}>
        {children}
      </ButtonBox>
    </React.Fragment>
  );
};

Button.defaultProps = {
  position: null,
  children: null,
  _onClick: () => {},
  isFloat: false,
  margin: null,
  width: "100%",
  padding: null,
  color: "#3E00FF",
  height: "50px",
  top: null,
  bottom: null,
  left: null,
  right: null,
  hover: null,
  display: null,
  justifyContent: null,
  alignItems: false,
  fontSize: null,
  border: null,
};

const ButtonBox = styled.button`
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ""};
  ${(props) =>
    props.backgroundColor
      ? `background-color:${props.backgroundColor}`
      : "background-color: #ccc"};
  box-sizing: border-box;
  font-weight: bold;
  ${(props) => (props.border ? `border: ${props.border};` : "none")};
  ${(props) =>
    props.borderRadius
      ? `border-radius:${props.borderRadius}`
      : "border-radius: 0px"};
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background-color: ${(props) => props.hover};
  }
  vertical-align: middle;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  flex-shrink: 0;
  display: ${(props) => props.display};
`;

const BtnBox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.color};
`;
const BBox = styled.button`
  ${(props) =>
    props.backgroundColor
      ? `background-color:${props.backgroundColor}`
      : "background-color: #494949"};
  border: 2px solid #fff;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.color};
  width: 28px;
  height: 28px;
  border-radius: 14px;
`;
const Back = styled(MdKeyboardArrowLeft)`
  width: 24px;
  height: 24px;
`;
const Right = styled(MdKeyboardArrowRight)`
  width: 24px;
  height: 24px;
`;
const X = styled(MdClose)`
  width: 24px;
  height: 24px;
`;
const FillHeart = styled(TiHeart)`
  width: 24px;
  height: 24px;
  color: red;
`;
export default Button;
