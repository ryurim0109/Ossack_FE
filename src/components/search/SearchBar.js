import React, { useState } from "react";
import styled, { css } from "styled-components";
import { history } from "../../redux/configStore";
import { ReactComponent as Search } from "../../assets/search.svg";

function SearchBar({ onAddKeyword, activeTab }) {
  //form을 관련 요소를 다룰때는 2-way 데이터 바인딩을 해줍니다! (input 의 value에 state를 넣는 것)

  // 1. 검색어를 state 로 다루도록 변경
  const [keyword, setKeyword] = useState("");

  // 2. 이벤트 연결
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const handleEnter = (e) => {
    if (keyword && e.keyCode === 13) {
      //엔터일때 부모의 addkeyword에 전달
      onAddKeyword(keyword);
    }
  };

  const Entercheck = (e) => {
    if (keyword && e.key === "Enter") {
      // activeTab===0 일 때
      if (!activeTab) {
        history.push(`/map/office?query=${keyword}`);
      } else {
        history.push(`/map/shareoffice?query=${keyword}`);
      }
      // const timeout = setTimeout(
      //   () => history.push(`/map/office?query=${keyword}`),
      //   200
      // );
      // return () => clearTimeout(timeout);
    }
  };

  const handleClearKeyword = () => {
    setKeyword("");
  };

  //느낌표로 키워드를 갖고있냐 없냐로 boolean 형태로 나옴
  //키워드를 가지고 있다면 active가 발생하여 padding이 발생함.
  // 패딩이 없으면 x 아이콘까지 글자가 침법하기 때문
  const hasKeyword = !!keyword;
  //keyword가 있으면 true, 없으면 false가 리턴이 되는 것을 확인 할 수 있다.ㄴ
  //console.log(!!keyword);

  return (
    <Container>
      <SearchIcon>
        <Search fill="none" stroke="#AFB4BE" />
      </SearchIcon>
      <InputContainer>
        <Input
          placeholder="시 ,구 ,동으로 검색어를 입력하세요."
          active={hasKeyword}
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={handleEnter}
          onKeyUp={Entercheck}
        />

        {keyword && <RemoveIcon onClick={handleClearKeyword} />}
      </InputContainer>
      <SearchIcon />
    </Container>
  );
}

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
  width: 92%;
  margin: 10px 4%;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 15px 40px;
  box-sizing: border-box;
`;

const SearchIcon = styled.span`
  ${horizontalCenter}
  position: absolute;
  left: 10px;
  right: 18px;
  width: 24px;
  height: 24px;
  background-position: -356px -260px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: middle;
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

//글자를 입력하면 RemoveIcon이 나오게 되고 누르면 input의 value값이 사라집니다
const RemoveIcon = styled.span`
  ${horizontalCenter}
  right: 0px;
  width: 20px;
  height: 20px;
  background-position: -389px -29px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  font-size: ${({ theme }) => theme.fontSizes.large};
  box-sizing: border-box;
  border: none;
  outline: none;
  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `}
`;

export default SearchBar;
