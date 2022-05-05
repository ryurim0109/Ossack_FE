import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { MyHeader } from "../components/my/index";
import { Input } from "../elements/index";

//** 최근 검색 기능 추가 - pts20220505 */
import SearchHistory from "./SearchHistory";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  // Keyword에 변화가 일어날때만 렌더링
  useEffect(() => {
    // array 타입을 string 형태로 바꾸기 위해 json.stringfy를 사용
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  //검색어 추가
  const handleAddKeyword = (text) => {
    console.log("text : ", text);
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  // 검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  // 검색어 전체 삭제
  const handleClearKeyword = (id) => {
    setKeywords([]);
  };
  //   const onChangeData = (e) => {
  //     setKeyword(e.currentTarget.value);
  //   };

  return (
    <React.Fragment>
      <Outter>
        <MyHeader>검색</MyHeader>

        <InputContainer>
          <Input
            margin="16px 0"
            padding="10px"
            placeholder="지역, 역, 등록번호로 찾아보세요."
            border="1px solid #000"
            onAddKeyword={handleAddKeyword}
          />
          <SearchHistory
            keywords={keywords}
            onClearKeyword={handleClearKeyword}
            onRemoveKeyword={handleRemoveKeyword}
          />
          <RemoveIcon />
        </InputContainer>
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  padding-bottom: 68px;
`;

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid #0bde8b;
  background-color: #fff;
  padding: 20px 60px;
  box-sizing: border-box;
`;

//라우터의 Link 스타일을 입히는거임(페이지이동하는 버튼)
//horizontalCenter 스타일 컴포넌트를 믹스인하여 속성값 전달
//홈으로 가기 위한 뒤로가기 버튼입니다
const ArrowIcon = styled(Link)`
  ${horizontalCenter}
  left: 18px;
  display: block;
  width: 21px;
  height: 18px;
  background-position: -164px -343px;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const SearchIcon = styled.span`
  ${horizontalCenter}
  right: 18px;
  width: 24px;
  height: 24px;
  background-position: -356px -260px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: middle;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
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

export default SearchPage;
