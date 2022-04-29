import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  actionCreators as  mapActions  } from "../../redux/modules/map";

const { kakao } = window;

const KakaoMap = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    

    dispatch(mapActions.setMap(map), [map]);
  }, [dispatch])

  return <div id="map" style={{ height: "100%" }}>
  </div>
}

export default KakaoMap;