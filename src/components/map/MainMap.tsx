/*global kakao*/
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { getOfficeData } from "../../redux/modules/map";
import { RootState, useAppDispatch } from "../../redux/configStore";
//아이콘
import Spinner from "../shared/Spinner";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";

import { useNavigate, useParams } from "react-router-dom";

import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import { ReactComponent as Location } from "../../assets/location.svg";
import { Position, Overlay } from "./index";
import { jsx } from "@emotion/react";
declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;
const MainMap = (): React.ReactElement | null => {
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const name: string | undefined = useParams().name;

  //const router = useSelector((state) => state.router.location.search);
  // const depositlimit = router?.split("&")[0]?.split("=")[1];
  // const feelimit = router?.split("&")[1]?.split("=")[1];
  const getOffice = useSelector((state: RootState) => state.map.office_list);
  // const shareOffice = useSelector((state) => state.map.share_list);
  const is_loaded = useSelector((state: RootState) => state.map.is_loaded);

  const [level, setLevel] = useState(8); //지도레벨
  //const [map, setMap] = useState(); //지도
  const [pos, setPos] = useState(); //경도 위도

  /*   const [state, setState] = useState({
    //기본 설정값
    center: {
      lat: 37.5173319258532,
      lng: 127.047377408384,
    },
  }); */
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
      level: 8,
    };
    let map = new kakao.maps.Map(container, options);
  }, []);
  const setLocation = () => {
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
      level: 8,
    };
    let map = new kakao.maps.Map(container, options);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        let locPosition = new kakao.maps.LatLng(lat, lon);
        map.setCenter(locPosition);
      });
    }
  };
  const zoomIn = () => {
    // 현재 지도의 레벨을 얻어옵니다
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
      level: 8,
    };
    let map = new kakao.maps.Map(container, options);
    let level = map.getLevel();
    console.log(level);
    // 지도를 1레벨 내립니다 (지도가 확대됩니다)

    map.setLevel(level - 1);
  };

  const zoomOut = () => {
    // 현재 지도의 레벨을 얻어옵니다
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
      level: 8,
    };
    let map = new kakao.maps.Map(container, options);
    let level = map.getLevel();

    // 지도를 1레벨 올립니다 (지도가 축소됩니다)

    map.setLevel(level + 1);
  };
  if (name === "office") {
    return (
      <React.Fragment>
        <MapWrap id="map"></MapWrap>
        <MainContent>
          {is_loaded ? null : <Spinner />}
          <Lev>
            <Btn onClick={setLocation}>
              <Location />
            </Btn>
            <PlusBtn>
              <button onClick={zoomIn}>
                <Plus />
              </button>
              <button onClick={zoomOut}>
                <Minus />
              </button>
            </PlusBtn>
          </Lev>
        </MainContent>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <MapWrap id="map"></MapWrap>
        <MainContent>
          {is_loaded ? null : <Spinner />}
          <Lev>
            <Btn onClick={setLocation}>
              <Location />
            </Btn>
            <PlusBtn>
              <button onClick={zoomIn}>
                <Plus />
              </button>
              <button onClick={zoomOut}>
                <Minus />
              </button>
            </PlusBtn>
          </Lev>
        </MainContent>
      </React.Fragment>
    );
  }
};
const MapWrap = styled.div`
  width: 100%;
  height: 100vh;
`;
const MainContent = styled.div`
  height: inherit;
  position: absolute;
`;

const Lev = styled.div`
  width: 40px;
  height: 125px;
  position: absolute;
  bottom: 800px;
  left: 16px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Btn = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;
const PlusBtn = styled.div`
  width: 40px;
  height: 72px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.darkgray2};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  & button {
    background: none;
    border-radius: 0px;
    width: 30px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default MainMap;
