import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import onePin from '../../static/images/onePin.svg';


const KakaoMap = (props) => {
  const { kakao } = window;
  //const estateid = useParams().estateId;
  const {estateid} =props
  console.log(estateid)
  const list =[]
//   const list = useSelector((state) => state.search.list);
//   const officeData = list?.filter((a) => a.estateid === +estateid);
//   const firstY = officeData?.map((a) => a.coordinate.lat);
//   const firstX = officeData?.map((a) => a.coordinate.lng);
  const firstY = 37.592113779824636;
  const firstX = 126.92199098323738;

  useEffect(() => {
    let container = document.getElementById("map");
    container.style.width = "100%";
    container.style.height = "88vh";
    var options = {
      center: new kakao.maps.LatLng(firstY, firstX),
      level: 3,
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
    // list.forEach((a) => {
    //   // 마커를 생성합니다
    //   new kakao.maps.Marker({
    //     //마커가 표시 될 지도
    //     map: map,
    //     //마커가 표시 될 위치
    //     position: new kakao.maps.LatLng(firstY, firstX),
    //     image: a.storeId === +estateid ? markerImage : markerImage,
    //     title: a.title,
    //     zIndex: a.storeId === +estateid ? 1 : 0,
    //   });
    // });
    new kakao.maps.Marker({
        map: map,
        position:new kakao.maps.LatLng(firstY, firstX),
        image:markerImage,
        zIndex:1,
    })
  }, [firstY, firstX]);

  return (
    <React.Fragment>
      <MapWrap id="map" />
    </React.Fragment>
  );
};

const MapWrap = styled.div`
    width: 500px;
    height: 400px;
`;

export default KakaoMap;