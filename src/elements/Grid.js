import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    _onClick,
    id,
    margin,
    padding,
    width,
    height,
    bg,
    color,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    textAlign,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    overflow,
    overflowX,
    overflowY,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    boxShadow,
    lineHeight,
    boxSizing,
    position,
    textIn,
    top,
    bottom,
    left,
    right,
    hover,
    cursor,
    fontSize,
  } = props;

  const styles = {
    id,
    margin,
    padding,
    width,
    height,
    bg,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    textAlign,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    overflow,
    overflowX,
    overflowY,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    boxShadow,
    lineHeight,
    color,
    boxSizing,
    position,
    top,
    bottom,
    left,
    right,
    hover,
    textIn,
    cursor,
    fontSize,
  };
  return (
    <GridBox {...styles} onClick={_onClick} id={id}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  children: null,
  id: null,
  fontSize: null,
  margin: null,
  padding: null,
  width: "100%",
  height: "100%",
  bg: null,
  cursor: null,
  display: null,
  justifyContent: null,
  gap: null,
  alignItems: false,
  flexDirection: false,
  flexWrap: null,
  textAlign: false,
  border: null,
  borderRadius: false,
  borderTop: null,
  borderBottom: null,
  borderLeft: null,
  borderRight: null,
  overflow: null,
  overflowX: null,
  overflowY: null,
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  boxShadow: null,
  potision: null,
  top: null,
  bottom: null,
  left: null,
  right: null,
  hover: null,
  lh: null,
  color: null,
  textIn: null,
  _onClick: () => {},
};

const GridBox = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  display: ${(props) => props.display};
  ${(props) =>
    props.flexDirection ? `flex-direction:${props.flexDirection}` : ""};
  flex-wrap: ${(props) => props.flexWrap};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : "")};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  border: ${(props) => props.border};
  gap: ${(props) => props.gap};
  border-top: ${(props) => props.borderTop};
  border-radius: ${(props) => props.borderRadius};
  border-bottom: ${(props) => props.borderBottom};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  overflow: ${(props) => props.overflow};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  background-color: ${(props) => props.bg};
  box-sizing: border-box;
  cursor: ${(props) => props.cursor};
  text-indent: ${(props) => props.textIn};
  box-shadow: ${(props) => props.boxShadow};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};

  :hover {
    ${(props) =>
      props.hover
        ? `background-color:${props.hover};
  cursor: pointer;`
        : ""}
    ${(props) => (props.hover_font ? `color : ${props.hover_font}` : null)}
  }
  .safari_only {
    overflow: ${(props) => props.overflow};
  }
`;

export default Grid;
