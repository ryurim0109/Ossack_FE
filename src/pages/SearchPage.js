import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";

//** 최근 검색 기능 추가 - pts20220505 */
import SearchHistory from "../components/search/SearchHistory";
import SearchBar from "../components/search/SearchBar";
import { actionCreators as officeActions } from "../redux/modules/office";
import { Bar } from "../components/shared/home";

import { useDispatch } from "react-redux";

import Tabs from "@material-ui/core/Tabs";
import MapOfficeList from "./MapOfficeList";
import MapShareList from "./MapShareList";
import { Grid, Text } from "../elements/index";

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

    dispatch(officeActions.getSOListDB(newKeyword.text));
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

  const tabTitle = ["오피스", "공유오피스"];
  const tab = {
    0: <MapOfficeList tabTitle={tabTitle} />,
    1: <MapShareList tabTitle={tabTitle} />,
  };
  const [activeTab, setActiveTab] = useState(0);

  const onClickTab = (idx) => {
    setActiveTab(idx);
  };

  return (
    <React.Fragment>
      <Outter>
        <MyHeader>검색</MyHeader>
        <Tabs
          value={activeTab}
          textColor="primary"
          TabIndicatorProps={{ style: { background: "#3E00FF", top: "0px" } }}
        >
          {/* tab 메뉴 */}
          {tabTitle.map((title, idx) => {
            return (
              <Grid
                key={idx}
                width="100%"
                height="50px"
                textAlign="center"
                fontWeight="bold"
                fontSize="14px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _onClick={() => onClickTab(idx)}
                color={activeTab === idx ? "#3E00FF" : "#E5E5EC"}
              >
                <Text bold cursor="pointer">
                  {title}
                </Text>
              </Grid>
            );
          })}
        </Tabs>

        <InputContainer>
          <SearchBar onAddKeyword={handleAddKeyword}></SearchBar>
        </InputContainer>
        <SearchHistory
          keywords={keywords}
          onClearKeywords={handleClearKeywords}
          onRemoveKeyword={handleRemoveKeyword}
        />
      </Outter>
      <Bar />
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
