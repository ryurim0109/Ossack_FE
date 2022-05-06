import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators as mapActions } from "../../redux/modules/map";

const Position = (props) => {
  const { kakao } = window;
  const dispatch = useDispatch();

  const { pos, map,level } = props;
  console.log(pos,map,level )
  let kakaoMap = map;
 


  useEffect(() => {
    // console.log(pos)
    dispatch(mapActions.getOfficeData(pos,level));
  }, [pos]);

  return <React.Fragment></React.Fragment>;
};

export default Position;
