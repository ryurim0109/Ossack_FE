import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/search.svg";

function SearchBar({ onAddKeyword, activeTab }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const handleEnter = (e) => {
    if (keyword && e.keyCode === 13) {
      onAddKeyword(keyword);
    }
  };

  const Entercheck = (e) => {
    if (keyword && e.key === "Enter") {
      if (!activeTab) {
        navigate(`/map/office?query=${keyword}`);
      } else {
        navigate(`/map/shareoffice?query=${keyword}`);
      }
    }
  };

  const handleClearKeyword = () => {
    setKeyword("");
  };

  const hasKeyword = !!keyword;

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
