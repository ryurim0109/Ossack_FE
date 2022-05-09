import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { MyHeader } from "../components/my/index";
import { Input } from "../elements/index";
import { Grid, Button, Text, Image } from "../elements/index";

//** 최근 검색 기능 추가 - pts20220505 */
import SearchHistory from "../components/search/SearchHistory";
import SearchBar from "../components/search/SearchBar";
import { actionCreators as officeActions } from "../redux/modules/office";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../shared/css/dot.css";

const SearchPage = () => {
  const dispatch = useDispatch();
  const OfficeSearchList = useSelector((state) => state.office.office_list);

  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  };

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

    //history.push("/map");
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
        {OfficeSearchList &&
          OfficeSearchList.map((office, idx) => {
            return (
              <Grid key={idx}>
                <Grid
                  width="100%"
                  margin="16px 0"
                  height="235px"
                  bg="#999"
                  borderRadius="8px"
                  position="relative"
                  overflow="hidden"
                >
                  <Grid>
                    <StyledSlider {...settings} dotsClass="test-css">
                      {office.images &&
                        office.images.map((image, idx) => {
                          return (
                            <Image
                              key={idx}
                              padding="235px"
                              bottom="0"
                              src={image}
                              shape="rectangle"
                              position="absolute"
                            />
                          );
                        })}
                    </StyledSlider>
                    <Button
                      //is_like
                      position="absolute"
                      right="8px"
                      top="8px"
                      color="#FF679E"
                      fill_like
                    />
                  </Grid>
                </Grid>
                <Grid
                  bottom="0"
                  padding="0 16px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  height="40px"
                >
                  <Text color="#000000" size="0.875rem">
                    {office.type ? office.type : "트리플 역세권 사무실"}
                  </Text>
                  <Text color="#000000" size="0.875rem">
                    <Span>월세</Span> {office.rent_fee ? office.rent_fee : 200}
                    만{""}
                    <Span>보증금</Span>{" "}
                    {office.deposit ? office.deposit : "3,000만"}
                  </Text>
                </Grid>
              </Grid>
            );
          })}
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

const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
`;

const Span = styled.span`
  font-size: 0.625rem;
`;

export default SearchPage;
