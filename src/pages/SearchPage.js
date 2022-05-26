import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";

//** 최근 검색 기능 추가 - pts20220505 */
import SearchHistory from "../components/search/SearchHistory";
import SearchBar from "../components/search/SearchBar";
import { actionCreators as officeActions } from "../redux/modules/office";
import { Bar } from "../components/shared/home";
import { useDispatch } from "react-redux";
import { Grid, Text } from "../elements/index";
import Tabs from "@material-ui/core/Tabs";

import { searchCheck } from "../shared/regCheck";
import Swal from "sweetalert2";

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
    //console.log("text : ", text);
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    // 검색 중복저장체크
    if (!localStorage.getItem("keywords").includes(text) && searchCheck(text)) {
      setKeywords([newKeyword, ...keywords]);
      // console.log(localStorage.getItem("keywords").includes(text));
    }

    if (!searchCheck(text)) {
      // console.log("searchCheck : ", searchCheck(text));
      Swal.fire({
        title: "한글로만 입력해주세요!",
        showCancelButton: false,
        confirmButtonText: "확인",
        confirmButtonColor: "#FF5151",
        allowEnterKey: false,
      });
      return false;
    } else {
      dispatch(officeActions.getSOListDB(newKeyword.text));
    }
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
