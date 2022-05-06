import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mapActions } from "../../redux/modules/map";
//아이콘
import { TiPlus, TiMinus } from "react-icons/ti";
import { MdMyLocation } from "react-icons/md";
import Spinner from "../shared/Spinner";

import {
  Map,
  MapMarker,
  CustomOverlayMap,
  MarkerClusterer,
} from "react-kakao-maps-sdk";
import { Position, Overlay } from "./index";

import Sheet from "react-modal-sheet";
import { Button, Grid, Text } from "../../elements/index";

const MainMap = (props) => {
  const dispatch = useDispatch();
  const getOffice = useSelector((state) => state.map.office_list);
  const is_loaded = useSelector((state) => state.map.is_loaded);
  console.log(is_loaded)
  console.log("getOffice : ", getOffice);
  const OverLavel=getOffice?.level;

  const { kakao } = window;
  const [level, setLevel] = useState(3); //지도레벨
  const [map, setMap] = useState(); //지도
  const [pos, setPos] = useState(); //경도 위도

  const [state, setState] = useState({
    //기본 설정값
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "현재 위치를 표시할 수 없어요.",
        isLoading: false,
      }));
    }
    //위도 경도
  }, []);
  const setLocation = () => {
    console.log(`현재 지도레벨은 ${level}입니다`);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        map.setCenter(
          new kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          )
        );
      });
    }
  };
  return (
    <React.Fragment>
      <MainContent>
        <Map
          center={state.center}
          onCreate={(map) => setMap(map)}
          onZoomChanged={(map) => setLevel(map.getLevel())}
          onDragEnd={(map) =>
            setPos({
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
              swLatLng: {
                lat: map.getBounds().getSouthWest().getLat(),
                lng: map.getBounds().getSouthWest().getLng(),
              },
              neLatLng: {
                lat: map.getBounds().getNorthEast().getLat(),
                lng: map.getBounds().getNorthEast().getLng(),
              },
            })
          }
          style={{ width: "100%", height: "inherit" }}
          level={level}
          minLevel={1}
          maxLevel={10}
        >
          {/* 커스텀 마커부분 */}
          <CustomOverlayMap position={state.center}>
            <Overlay />
            
          </CustomOverlayMap>
          {/* 커스텀 마커부분 */}
          {/* <MarkerClusterer
            averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel={10} // 클러스터 할 최소 지도 레벨
            styles={[
              {
                // calculator 각 사이 값 마다 적용될 스타일을 지정한다
                width: "30px",
                height: "30px",
                background: "#d80cf3",
                borderRadius: "15px",
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
                lineHeight: "31px",
              },
            ]}
          > */}
            {getOffice?.cityResponseDtoList?.map((position, index) => (
              <CustomOverlayMap
                key={`${position.title}-${position.coordinate}`}
                position={position.coordinate} // 마커를 표시할 위치
                title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              >
                
                <Overlay position={position} OverLavel={OverLavel} index={index} />
              </CustomOverlayMap>
            ))}
          {/* </MarkerClusterer> */}

          <Lev>
            <button onClick={setLocation}>
              <MdMyLocation size="24px" />
            </button>
            <button onClick={() => (level > 1 ? setLevel(level - 1) : null)}>
              <TiPlus size="21px" />
            </button>
            <button onClick={() => (level < 10 ? setLevel(level + 1) : null)}>
              <TiMinus size="21px" />
            </button>
          </Lev>
        </Map>

        {/* {pos && console.log('변경된 지도 중심좌표는 ' + pos.lat + ' 이고, 경도는 ' + pos.lng + ' 입니다', 
        '남서쪽' + pos.swLatLng.lat ,pos.swLatLng.lng, '북동쪽좌표' + pos.neLatLng.lat ,pos.neLatLng.lng)
        
        } */}
        {pos && <Position pos={pos} map={map} level={level} />}
      </MainContent>
    </React.Fragment>
  );
};
const MainContent = styled.div`
  height: inherit;
  position: relative;
`;

const Lev = styled.div`
  width: 40px;
  height: 205px;
  position: absolute;
  bottom: 96px;
  left: 16px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & button {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
export default MainMap;
