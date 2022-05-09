import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { instance } from "../../shared/api";
import { RESP } from "../../response";

// Action type
const SET_MAP = "SET_MAP";
const SET_OFFICE_LIST = "SET_OFFICE_LIST";
const ADD_MARKER = "ADD_MARKER";
const LOADED = "LOADED";

// Action Creator
const setMap = createAction(SET_MAP, (map) => ({ map }));
const setOfficeList = createAction(SET_OFFICE_LIST, (office_list) => ({
  office_list,
}));
const addMarker = createAction(ADD_MARKER, (marker, overlay) => ({
  marker,
  overlay,
}));
const isLoaded = createAction(LOADED, (loaded) => ({ loaded }));
const initialState = {
  list: {
    map: null,
    office_list: [],
    marker: [],
    overlay: [],
  },
  is_loaded: false,
};

// middleWares
const getOfficeData = (pos, level) => {
  //console.log("pos : ", pos,  "level : ",level);
  const SWlat = pos.swLatLng.lat;
  const SWlng = pos.swLatLng.lng;
  const NElat = pos.neLatLng.lat;
  const NElng = pos.neLatLng.lng;

  return function (dispatch, getState, { history }) {
    dispatch(isLoaded(false));

    instance
      .get(
        `/api/${level}/map?SWlat=${SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}`
      )

      // const res=RESP.OFFICE
      // dispatch(getMainOffice(res));
      .then((res) => {
        console.log(res.data, "나는 메인 오피스 DB");
        dispatch(setOfficeList(res.data));
      })
      .catch((err) => {
        console.log(err.response, "나는 메인 오피스 DB 오류");
        console.log(err, "나는 메인 오피스 DB 오류");
      });
  };
};

// seachGetOffice
const seachGetOffice = (keyword) => {
  console.log("keyword : ", keyword);

  return function (dispatch, getState, { history }) {
    dispatch(isLoaded(false));

    //instance.get(`/api/map/search?query=${keyword}`)

    const res = RESP.GETOFFICE;
    dispatch(setOfficeList(res));
    //     .then((res) => {

    //       console.log(res.data,"나는 검색 오피스 DB");
    //       dispatch(setOfficeList(res.data));
    //     })
    //     .catch((err) => {
    //       console.log(err.response,"나는 검색 오피스 DB 오류");
    //       console.log(err,"나는 검색 오피스 DB 오류");
    //     });
  };
};

// reducer
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
        draft.is_loaded = true;
      }),
    [ADD_MARKER]: (state, action) =>
      produce(state, (draft) => {
        draft.marker = action.payload.marker;
        draft.overlay = action.payload.overlay;
      }),
    [LOADED]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loaded = action.payload.is_loaded;
      }),
  },
  initialState
);

const actionCreators = {
  setMap,
  setOfficeList,
  addMarker,
  getOfficeData,
  seachGetOffice,
};

export { actionCreators };
