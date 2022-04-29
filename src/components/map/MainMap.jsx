import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Map, MapMarker,ZoomControl,MapTypeControl } from "react-kakao-maps-sdk"

const MainMap = (props)=> {
  
  const { kakao } = window;
  const [level, setLevel] = useState(3); //지도레벨
  const [map, setMap] = useState(); //지도
  const [pos, setPos] = useState(); //경도 위도

  const [state, setState] = useState({ //기본 설정값
      center: {
        lat: 33.450701,
        lng: 126.570667,
      },
      errMsg: null,
      isLoading: true,
  })
  // const [draggable, setDraggable] = useState(true)
  // const [zoomable, setZoomable] = useState(false) 
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
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "현재 위치를 표시할 수 없어요.",
        isLoading: false,
      }))
    }
    //위도 경eh


  }, [])

  

  // const sendLoca = () => {
  //   const loca=state.center
  //   props.defaultLoca(loca)
  // }
  function setLocation() {
    console.log(`현재 지도레벨은 ${level}입니다`)
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				map.setCenter(new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude));
			});
		}
	}
	
  
  

  return (
    <React.Fragment>
    <MainContent>
      <Map center={state.center} onCreate={(map) => setMap(map)}
        onDragEnd={(map) => setPos({
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
        })}
      style={{width: "100%", height: "inherit"}}
        level={level} 
        // draggable={draggable} zoomable={zoomable}
        >
        {!state.isLoading && (
          <MapMarker position={state.center}></MapMarker>
        )}
          {/* <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} /> */}

          <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT}/>

          <Lev >
            <button
                    onClick={() =>
                      level > 1 ?
                       (setLevel(level - 1) ):(null)

                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      level < 15 ?
                      (setLevel(level + 1)):(null)
                    }
                  >
                    -
              </button>
              <button
                    onClick={setLocation}
                  >
                    🤩
              </button>
          </Lev>
         
      </Map>
      {pos && console.log('변경된 지도 중심좌표는 ' + pos.lat + ' 이고, 경도는 ' + pos.lng + ' 입니다', 
      '남서쪽' + pos.swLatLng.lat ,pos.swLatLng.lng, '북동쪽좌표' + pos.neLatLng.lat ,pos.neLatLng.lng)
      
      }
    </MainContent>
    </React.Fragment>
  )
}
const MainContent = styled.div`
  height: inherit;
  position:relative;


`
const Lev =styled.div`
  width:25px;
  height:50px;
  position:absolute;
  bottom:100px;
  left:0;
  z-index:99;
  display:flex;
  flex-direction:column;
  gap:5px;

  & button{
    width:25px;
    height:25px;
    background:pink;
    border:none;
  } 

`;
export default MainMap;

