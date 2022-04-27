import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Map, MapMarker,ZoomControl,MapTypeControl } from "react-kakao-maps-sdk"

const MainMap = (props)=> {
  
  const { kakao } = window;

  const [state, setState] = useState({
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
  }, [])

  const sendLoca = () => {
    const loca=state.center
    props.defaultLoca(loca)
  }

  return (
    <React.Fragment>
    <MainContent>
      <Map center={state.center} onCreate={sendLoca} style={{width: "100%", height: "inherit"}}
        level={3} 
        // draggable={draggable} zoomable={zoomable}
        >
        {!state.isLoading && (
          <MapMarker position={state.center}></MapMarker>
        )}
          <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
          <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT}/>
      </Map>
      
    </MainContent>
    </React.Fragment>
  )
}

export default MainMap

const MainContent = styled.div`
  height: inherit;
`