/*global kakao*/
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import onePin from "../../static/images/onePin.svg";
const { kakao } = window;
const KakaoMap = (props) => {
  const list = useSelector((state) => state?.office?.one_office);

  const firstY = list?.coordinateResponseDto?.lat;
  const firstX = list?.coordinateResponseDto?.lng;

  useEffect(() => {
    let container = document.getElementById("map");
    container.style.width = "100%";
    container.style.height = "100%";
    var options = {
      center: new kakao.maps.LatLng(firstY, firstX),
      level: 1,
    };

    let imageSrc = onePin, // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    let markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let map = new kakao.maps.Map(container, options);

    new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(firstY, firstX),
      image: markerImage,
      zIndex: 1,
    });
  }, [firstY, firstX]);

  return (
    <React.Fragment>
      <MapWrap id="map" />
    </React.Fragment>
  );
};

const MapWrap = styled.div`
  width: 100%;
  height: 180px;
`;

export default KakaoMap;
