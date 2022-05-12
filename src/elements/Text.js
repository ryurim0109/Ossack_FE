import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {
    children,
    color,
    size,
    bold,
    align,
    margin,
    padding,
    family,
    border,
    _onClick,
    cursor,
    lingH,
    textIndent,
    borderBottom,
  } = props;
  const styles = {
    color,
    size,
    bold,
    align,
    margin,
    padding,
    family,
    border,
    borderBottom,
    cursor,
    lingH,
    textIndent,
  };
  return (
    <ElText {...styles} onClick={_onClick}>
      {children}
    </ElText>
  );
};

Text.defaultProps = {
  children: null,
  color: null,
  size: null,
  bold: false,
  align: null,
  margin: false,
  padding: false,
  family: false, //폰트 타입
  border: null,
  textIndent:null,
  lingH:null,
  borderBottom:null,
  _onClick: () => {},
  cursor: null,
};

const ElText = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? 'bold' : '400')};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-indent: ${(props) => props.textIndent};
  family: ${(props) => props.family};
  border: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lingH};
  border-bottom: ${(props) => props.borderBottom};
`;

export default Text;