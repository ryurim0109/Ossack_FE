import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Grid, Text } from "../../elements/index";

import styled from "styled-components";

const CommentInfo = () => {
  const getOneOffice = useSelector((state) => state.office.one_office);
  const contentRef = useRef(null);
  const divBoxRef = useRef(null);
  const BtnRef = useRef(null);

  const onClick = (e) => {
    contentRef.current.classList.add("show");
    e.currentTarget.classList.add("hide");
    divBoxRef.current.classList.add("hide");
  };
  const onClose = (e) => {
    contentRef.current.classList.remove("show");
    e.currentTarget.classList.add("hide");
    BtnRef.current.classList.remove("hide");
    divBoxRef.current.classList.remove("hide");
  };

  return (
    <React.Fragment>
      <Grid height="auto" bg="#fff" margin="0 0 10px 0" padding="0 0 20px 0">
        <Grid
          bottom="0"
          padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="auto"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="16px 0"
            height="84px"
          >
            <Bp>중개사 코멘트</Bp>
          </Grid>
          <Grid display="flex" flexDirection="column" justifyContent="center">
            <Grid height="60px">
              <Text size="16px" color="#111">
                {getOneOffice?.subwayInfo ? getOneOffice?.subwayInfo : null}
              </Text>
              <Ssp>
                {getOneOffice?.buildingInfo ? getOneOffice?.buildingInfo : null}
              </Ssp>
            </Grid>
            <Grid height="40px">
              <Text size="16px" color="#111">
                ◎해당 사무소는 공인중개사 자격증을 갖춘 인원으로만 구성되어
                있습니다.
              </Text>
            </Grid>
            <Grid height="40px">
              <Text size="16px" color="#111">
                ◎직접 방문 후 촬영한 100% 실매물 현장사진
              </Text>
            </Grid>

            <Grid>
              <Text>
                {/* {" "} */}
                <Ellipsis ref={contentRef}>
                  {getOneOffice?.buildingDetail
                    ?.split("\n")
                    .map((line, idx) => {
                      return (
                        <div key={idx}>
                          {line} <br />
                          <CloseBtn onClick={onClose}>
                            <Text size="16px" color="#3E00FF">
                              접기
                            </Text>
                          </CloseBtn>
                        </div>
                      );
                    })}{" "}
                  <Div ref={divBoxRef} />
                  <Btn onClick={onClick} ref={BtnRef}>
                    <Text size="16px" color="#3E00FF">
                      더보기
                    </Text>
                  </Btn>
                </Ellipsis>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Bp = styled.p`
  font-weight: bold;
  width: 60%;
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const Ssp = styled.p`
  padding: 5px 0;
  width: 90%;
  color: #999;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Ellipsis = styled.div`
  position: relative;
  display: -webkit-box;
  max-height: 55rem;
  line-height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  padding-bottom: 60px;
  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }
`;
const Div = styled.div`
  width: 100%;
  height: 111px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  &.hide {
    display: none;
  }
`;
const Btn = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  //max-height: 2rem;
  background-color: #fff;
  line-height: 48px;
  /* background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 18%
  ); */
  &.hide {
    display: none;
  }
`;
const CloseBtn = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fff;
  line-height: 48px;
  &.hide {
    display: none;
  }
`;

export default CommentInfo;
