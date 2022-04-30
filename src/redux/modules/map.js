import { createAction, handleActions } from "redux-actions";
import produce from "immer";

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
const getOfficeData = (pos) => {
  console.log("pos : ", pos);
  return async function (dispatch, getState, { history }) {
    try {
      // const response = await axios.post(
      //   "http://54.180.96.119/api/login",
      //   {},
      //   {
      //     headers: {
      //       Authorization: `BEARER ${localStorage.getItem("token")}`,
      //     },
      //   }
      // // );
      // const response = RESP.GETOFFICE;
      // console.log(response.data);
      // dispatch(setOfficeList({}));
    } catch (err) {
      console.log("에러발생", err);
      alert("로그인 여부 확인에 문제가 생겼습니다.");
    }
  };
};
export default handleActions ({
    [SET_MAP]: (state, action) =>
    produce(state, (draft) => {
        draft.list.map=action.payload.list.map
    }),
    [SET_OFFICE_LIST]: (state, action) =>
    produce(state, (draft) => {
        draft.list.office_list=action.payload.list.office_list;
    }),
    [ADD_MARKER]: (state, action) =>
    produce(state, (draft) => {
        draft.list.marker=action.payload.list.marker
        draft.list.overlay=action.payload.list.overlay
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