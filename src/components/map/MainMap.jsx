/*global kakao*/
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as mapActions } from "../../redux/modules/map";
//아이콘
import Spinner from "../shared/Spinner";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";

import { history } from "../../redux/configStore";

import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import { ReactComponent as Location } from "../../assets/location.svg";
import { Position, Overlay } from "./index";

const MainMap = (props) => {
  const dispatch = useDispatch();
  const name = useParams().name;
  const getOffice = useSelector((state) => state.map.office_list);
  const shareOffice = useSelector((state) => state.map.share_list);
  const is_loaded = useSelector((state) => state.map.is_loaded);
  //console.log(is_loaded)
  //console.log("getOffice : ", getOffice);
  const OverLavel = getOffice?.level;

  const { kakao } = window;
  const [level, setLevel] = useState(3); //지도레벨
  const [map, setMap] = useState(); //지도
  const [pos, setPos] = useState(); //경도 위도

  const [state, setState] = useState({
    //기본 설정값
    center: {
      lat: 37.5173319258532,
      lng: 127.047377408384,
    },
  });
  const po = {
    swLatLng: {
      lat: map?.getBounds().getSouthWest().getLat(),
      lng: map?.getBounds().getSouthWest().getLng(),
    },
    neLatLng: {
      lat: map?.getBounds().getNorthEast().getLat(),
      lng: map?.getBounds().getNorthEast().getLng(),
    },
  };
  useEffect(() => {
    if (map && name === "office") {
      console.log("난 그냥 지도");
      dispatch(mapActions.getOfficeData(po, level));
    } else if (map && name === "share") {
      console.log("난 공유지도");
      dispatch(mapActions.getShareData(po, level));
    }
  }, [map]);

  const setLocation = () => {
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
  if (name === "office") {
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
            minLevel={5}
            maxLevel={10}
          >
            {is_loaded ? (
              <>
                {getOffice?.cityResponseDtoList?.length === 0
                  ? null
                  : getOffice?.cityResponseDtoList?.map((position, index) => {
                      return (
                        <CustomOverlayMap
                          key={`${position.title}-${position.coordinate}`}
                          position={position.coordinate} // 마커를 표시할 위치
                        >
                          <div
                            onClick={() =>
                              history.push(
                                `/map/office?query=${position.title}`
                              )
                            }
                          >
                            <Overlay position={position} />
                          </div>
                        </CustomOverlayMap>
                      );
                    })}
              </>
            ) : (
              <Spinner />
            )}
          </Map>
          <Lev>
            <Btn onClick={setLocation}>
              <Location />
            </Btn>
            <PlusBtn>
              <button onClick={() => (level > 5 ? setLevel(level - 1) : null)}>
                <Plus />
              </button>
              <button onClick={() => (level < 10 ? setLevel(level + 1) : null)}>
                <Minus />
              </button>
            </PlusBtn>
          </Lev>
          {pos && <Position pos={pos} level={level} name={name} />}
        </MainContent>
      </React.Fragment>
    );
  } else if (name === "share") {
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
            minLevel={5}
            maxLevel={10}
          >
            {is_loaded ? (
              <>
                {shareOffice?.cityResponseDtoList?.length === 0
                  ? null
                  : shareOffice?.cityResponseDtoList?.map((position, index) => {
                      return (
                        <CustomOverlayMap
                          key={`${position.title}-${position.coordinate}`}
                          position={position.coordinate} // 마커를 표시할 위치
                        >
                          <div
                            onClick={() =>
                              history.push(
                                `/map/shareoffice?query=${position.title}`
                              )
                            }
                          >
                            <Overlay position={position} name={name} />
                          </div>
                        </CustomOverlayMap>
                      );
                    })}
              </>
            ) : (
              <Spinner />
            )}
          </Map>
          <Lev>
            <Btn onClick={setLocation}>
              <Location />
            </Btn>
            <PlusBtn>
              <button onClick={() => (level > 5 ? setLevel(level - 1) : null)}>
                <Plus />
              </button>
              <button onClick={() => (level < 10 ? setLevel(level + 1) : null)}>
                <Minus />
              </button>
            </PlusBtn>
          </Lev>
          {pos && <Position pos={pos} level={level} name={name} />}
        </MainContent>
      </React.Fragment>
    );
  }
};
const MainContent = styled.div`
  height: inherit;
  position: relative;
`;

const Lev = styled.div`
  width: 40px;
  height: 125px;
  position: absolute;
  bottom: 150px;
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
