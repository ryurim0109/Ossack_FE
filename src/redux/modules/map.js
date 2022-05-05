import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { instance } from "../../shared/api";
import { RESP } from "../../response";

const SET_MAP = "SET_MAP";
const SET_OFFICE_LIST = "SET_OFFICE_LIST";
const ADD_MARKER = "ADD_MARKER";
// Action Creator
const setMap = createAction(SET_MAP, (map) => ({ map }));
const setOfficeList = createAction(SET_OFFICE_LIST, (office_list) => ({
  office_list,
}));
const addMarker = createAction(ADD_MARKER, (marker, overlay) => ({
  marker,
  overlay,
}));
const initialState = {
  list: {
    map: null,
    office_list: [],
    marker: [],
    overlay: [],
  },
};
const getOfficeData = (pos,level) => {
  //console.log("pos : ", pos,  "level : ",level);
  // const SWlat=pos.swLatLng.lat;
  // const SWlng=pos.swLatLng.lng;
  // const NElat=pos.neLatLng.lat;
  // const NElng=pos.neLatLng.lng;
  return async function (dispatch, getState, { history }) {
    try {
      // const response = await instance.post(
      //   "http://54.180.96.119/api/${level}/map?SWlat=${pos.SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}"
      //  
      //   {},
      //   {
      //     headers: {
      //       Authorization: `BEARER ${localStorage.getItem("token")}`,
      //     },
      //   }
      // // );
    //   const response = await instance
    // .post(`/api/${level}/map?SWlat=${SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}`)
      const response = RESP.GETOFFICE;
      console.log("지도 위도,경도 response : ", response);
      dispatch(setOfficeList(response));
    } catch (err) {
      console.log("에러발생", err);
      alert("로그인 여부 확인에 문제가 생겼습니다.");
    }
  };
};
export default handleActions(
  {
    [SET_MAP]: (state, action) =>
      produce(state, (draft) => {
        draft.map = action.payload.map;
      }),
    [SET_OFFICE_LIST]: (state, action) =>
      produce(state, (draft) => {
        console.log("action : ", action);
        draft.office_list = action.payload.office_list;
      }),
    [ADD_MARKER]: (state, action) =>
      produce(state, (draft) => {
        draft.marker = action.payload.marker;
        draft.overlay = action.payload.overlay;
      }),
  },
  initialState
);

const actionCreators = {
  setMap,
  setOfficeList,
  addMarker,
  getOfficeData,
};

export { actionCreators };
