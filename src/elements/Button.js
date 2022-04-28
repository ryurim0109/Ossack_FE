import React from "react";
import styled from "styled-components";



const Button =(props) =>{
    const {color,
        _onClick,
        children,
        margin,
        width,
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
        is_S,
        fontSize,
        _disabled} =props;
        

    const styles={
        margin,
        width,
        padding,
        backgroundColor,
        color,
        height,
        borderRadius,
        top,
        bottom,
        left,
        right,
        hover,
        display,
        fontSize,

    }
    if(is_S){
        return (
            <React.Fragment>
                <EditBox onClick={_onClick}>
                   
                </ EditBox>
            </React.Fragment>
        )
    }
    

   
    return(
        <React.Fragment>
            <ButtonBox {...styles} onClick={_onClick} disabled={_disabled}>
                {children}
            </ButtonBox>
        </React.Fragment>
    );
};

Button.defaultProps ={
  position: false,
  children: null,
  _onClick: () => {},
  isFloat: false,
  margin: 'auto',
  width: '100%',
  padding: '12px 0px',
  color: 'white',
  height: '50px',
  top: null,
  bottom: null,
  left: null,
  right: null,
  hover: null,
  display: null, 
  fontSize:null,
};

const ButtonBox = styled.button`
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  position: ${props => props.position};
  ${(props) =>
    props.backgroundColor
      ? `background-color:${props.backgroundColor}`
      : 'background-color: #1b74e4'};
  box-sizing: border-box;
  font-weight: bold;
  border: none;
  ${(props) =>
    props.borderRadius
      ? `border-radius:${props.borderRadius}`
      : 'border-radius: 0px'};
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
  display: ${props => props.display};
`;
const EditBox=styled.button`
    width:41px;
    height:41px;
    background:#F5F6F7;
    border-radius:25px;
    border:none;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        background:#e0e0e0;
    }
`;





export default Button;