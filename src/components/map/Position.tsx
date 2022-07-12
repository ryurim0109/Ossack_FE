import React, { useEffect } from "react";
import {getOfficeData } from "../../redux/modules/map";
import { useAppDispatch } from "../../redux/configStore";

interface PositionProps {
  pos: any;
  name:string;
  router:string;
  level:any;
}
const Position = (props:PositionProps) => {
  const appDispatch = useAppDispatch();

  const { pos, level, name, router } = props;

  // useEffect(() => {
  //   if (name === "share") {
  //     dispatch(getShareData(pos, level));
  //   } else {
  //     dispatch(getOfficeData(pos, level, router));
  //   }
  // }, [pos, level]);
 /*  useEffect(()=>{
    appDispatch(getOfficeData(pos, level, router));
  }) */

  return <React.Fragment></React.Fragment>;
};

export default Position;
