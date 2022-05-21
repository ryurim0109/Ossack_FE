import React from "react";
import styled from "styled-components";
import { ReactComponent as Down } from "../../assets/arrowbottom.svg";
import { ReactComponent as Top } from "../../assets/arrowtop.svg";

function Accordion(props) {
  const parentRef = React.useRef(null);
  const childRef = React.useRef(null);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleButtonClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "#fff";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "#FAFAFA";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? <Down /> : <Top />;

  return (
    <Container>
      <Header onClick={handleButtonClick}>
        {props.title}
        <Button>{buttonText}</Button>
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>{props.contents}</Contents>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkgray4};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 52px;
  margin: 0 32px 0 8px;
`;

const Button = styled.div`
  right: 0px;
  font-size: 14px;
  position: absolute;
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  padding: 0 8px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  padding: 32px 16px;
  text-align: justify;
`;

export default React.memo(Accordion);
