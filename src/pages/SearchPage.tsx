import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";

//** 최근 검색 기능 추가 - pts20220505 */
import SearchHistory from "../components/search/SearchHistory";
import SearchBar from "../components/search/SearchBar";
import { getSOListDB } from "../redux/modules/office";
import { Bar, NotUser } from "../components/shared/home";
import {  useSelector } from "react-redux";
import { useAppDispatch,RootState } from "../redux/configStore";

import { Grid, Text } from "../elements/index";
import Tabs from "@material-ui/core/Tabs";

import { searchCheck } from "../shared/regCheck";
import Swal from "sweetalert2";

const SearchPage = () => {
  const appDispatch = useAppDispatch();
  //const login = useSelector((state:RootState) => state.user.is_login);
  //const is_session = localStorage.getItem("token");

  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);
  interface KeywordPropsType {
    id?: number;
    text:string;
  }
  //검색어 추가
  const handleAddKeyword = (text:string) => {
    const newKeyword: KeywordPropsType = {
      id: Date.now(),
      text: text,
    };
    // 검색 중복저장체크
    if (!localStorage.getItem("keywords")?.includes(text) && searchCheck(text)) {
      setKeywords([newKeyword, ...keywords]);
    }

    if (!searchCheck(text)) {
      Swal.fire({
        title: "한글로만 입력해주세요!",
        showCancelButton: false,
        confirmButtonText: "확인",
        confirmButtonColor: "#FF5151",
        allowEnterKey: false,
      });
      return false;
    } else {
      appDispatch(getSOListDB({
        keyword: newKeyword.text,
        pageno: 1,
        monthly: undefined,
        depositlimit:undefined,
        feelimit: undefined,
      }));
    }
  };

  // 검색어 삭제
  const handleRemoveKeyword = (id:number) => {
    const nextKeyword = keywords.filter((thisKeyword:KeywordPropsType) => {
      return thisKeyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  // 검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  const tabTitle = ["오피스", "공유오피스"];

  const [activeTab, setActiveTab] = useState(0);

  const onClickTab = (idx:number) => {
    setActiveTab(idx);
  };

/*   if (!login || !is_session) {
    return (
      <React.Fragment>
        <NotUser />
      </React.Fragment>
    );
  } else { */
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
                >
                  <Text
                    bold
                    cursor="pointer"
                    color={activeTab === idx ? "#3E00FF" : "#E5E5EC"}
                  >
                    {title}
                  </Text>
                </Grid>
              );
            })}
          </Tabs>

          <InputContainer>
            <SearchBar onAddKeyword={handleAddKeyword} activeTab={activeTab} />
          </InputContainer>
          <SearchHistory
            keywords={keywords}
            onClearKeywords={handleClearKeywords}
            onRemoveKeyword={handleRemoveKeyword}
            activeTab={activeTab}
          />
        </Outter>
        <Bar />
      </React.Fragment>
    );
 /*  } */
};
const Outter = styled.div`
  width: 100%;
  padding-bottom: 68px;
  position: relative;
  top: 62px;
`;

const InputContainer = styled.div`
  position: relative;
`;

export default SearchPage;
