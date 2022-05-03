import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators as mapActions } from "../../redux/modules/map";

const Position = (props) => {
  const { kakao } = window;
  const dispatch = useDispatch();

  const { pos, map,_level } = props;
  console.log(pos,map,_level )
  let kakaoMap = map;
 


  useEffect(() => {
    // console.log(pos)
    dispatch(mapActions.getOfficeData(pos,_level));
  }, [pos]);

  return <React.Fragment></React.Fragment>;
};

export default Position;
