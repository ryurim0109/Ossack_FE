import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { MyHeader } from "../components/my/index";
import { Input } from "../elements/index";

//** 최근 검색 기능 추가 - pts20220505 */
import SearchHistory from "../components/search/SearchHistory";
import SearchBar from "../components/search/SearchBar";
import { actionCreators as mapActions } from "../redux/modules/map";

import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";

const SearchPage = () => {
  const dispatch = useDispatch();

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

    dispatch(mapActions.seachGetOffice(newKeyword));

    history.push("/map");
  };

  // 검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  // 검색어 전체 삭제
  const handleClearKeywords = (id) => {
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
          <SearchBar onAddKeyword={handleAddKeyword}></SearchBar>
        </InputContainer>
        <SearchHistory
          keywords={keywords}
          onClearKeywords={handleClearKeywords}
          onRemoveKeyword={handleRemoveKeyword}
        />
      </Outter>
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  padding-bottom: 68px;
`;

const InputContainer = styled.div`
  position: relative;
`;

export default SearchPage;
