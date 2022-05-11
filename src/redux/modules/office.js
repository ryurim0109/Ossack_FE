import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";
import { RESP } from "../../response";

import Swal from "sweetalert2";

// Action type
const GET_MAIN_OFFICE = "GET_MAIN_OFFICE";// 메인페이지 리스트 조회
const GET_HOT = "GET_HOT"; // 핫한 지역
const CLICK_LIKE = "CLICK_LIKE"; //좋아요
const DELETE_LIKE = "DELETE_LIKE"; //좋아요 취소
const GET_LIKE = "GET_LIKE"; // 찜한 매물 조회
const GET_SEARCH_OFFICE_LIST = "GET_SEARCH_OFFICE_LIST"; //검색 리스트 조회
const LOADING ="LOADING"; //무한스크롤 로딩

// Action Creator
const getMainOffice = createAction(GET_MAIN_OFFICE, (list) => ({ list }));
const getHot = createAction(GET_HOT, (hot_list) => ({ hot_list }));
const clickLike = createAction(CLICK_LIKE, (estate_id) => ({ estate_id }));
const deleteLike = createAction(DELETE_LIKE, (estate_id) => ({ estate_id }));
const getOfficeLike = createAction(GET_LIKE, (like_list) => ({ like_list }));
const getSOList = createAction(GET_SEARCH_OFFICE_LIST, (list) => ({
  list,
}));
const loading =createAction(LOADING,(is_loading)=>({is_loading}));

const initialState = {
  list: [],
  hot_list: [],
  is_loading: false,
};
/* 맛집근처 역근처 */
const getMainOfficeDB = (dong) => {
  console.log(dong);
  return (dispatch) => {
    instance
      .get(`/api/list?query=${dong}`)

      // const res=RESP.OFFICE
      // dispatch(getMainOffice(res));
      .then((res) => {
        console.log(res.data, "나는 메인 오피스 DB");
        console.log(res, "나는 메인 오피스 res");
        dispatch(getMainOffice(res.data));
      })
      .catch((err) => {
        console.log(err.response, "나는 메인 오피스 DB 오류");
        console.log(err, "나는 메인 오피스 DB 오류");
      });
  };
};
/* 핫한 오피스 조회 */
const getHotDB = () => {
  return (dispatch) => {
    instance
      .get(`/api/list/hot`)

      // const res=RESP.HOT
      // dispatch(getHot(res));
      .then((res) => {
        console.log(res.data, "나는 핫한 오피스 DB");
        dispatch(getHot(res.data));
      })
      .catch((err) => {
        console.log(err.response, "나는 핫한 오피스 DB 오류");
        console.log(err, "나는 핫한 오피스 DB 오류");
      });
  };
};

/* 좋아요 조회 */
const clickLikeDB = (estateid) => {
  console.log("estateId", estateid);
  return (dispatch) => {
    instance
      .post(`/api/favorite/${estateid}`)
      .then((res) => {
        console.log("res : ", res);
        Swal.fire("좋아요를 누르셨습니다.");
        dispatch(clickLike(estateid));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

/* 좋아요 취소 */
const deleteLikeDB = (estateId) => {
  console.log("estateId", estateId);
  return (dispatch) => {
    instance
      .delete(`/api/favorite/${estateId}`)
      .then((res) => {
        console.log("res : ", res);

        Swal.fire("좋아요를 취소하셨습니다.");
        dispatch(deleteLike(estateId));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

/* 찜한 매물 조회 */
const getOfficeLikeDB = (type) => {
  console.log("type : ", type);
  return (dispatch) => {
    instance
      .get(`/api/list/favorite?query=${type}`)
      .then((res) => {
        console.log("res : ", res);
        dispatch(getOfficeLike(res.data));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

/* 검색 리스트 조회 */
const getSOListDB = (keyword) => {
  console.log("keyword : ", keyword);
  return (dispatch,getState) => {
    const officeList = getState().office?.list?.estateResponseDtoList?.length;
    dispatch(loading(true))
    instance
      // .get(`/api/list/search/${officeList}?query=${keyword}`)
      .get(`/api/list/search/0?query=${keyword}`)
      .then((res) => {
        console.log("res : ", res);
        dispatch(getSOList(res.data.estateResponseDtoList));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

// Reducer
export default handleActions(
  {
    [GET_MAIN_OFFICE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [GET_HOT]: (state, action) =>
      produce(state, (draft) => {
        draft.hot_list = action.payload.hot_list;
      }),
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
        });
        draft.list[numArr[0]].mylike = true;
      }),
    [DELETE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
        });
        draft.list[numArr[0]].mylike = false;
      }),
    [GET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list = action.payload.like_list;
      }),

    [GET_SEARCH_OFFICE_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        draft.is_loading =false;
       //무한스크롤 draft.list.push(...action.payload.list);
      //  draft.list = draft.list.reduce((acc, cur) => {
      //   if (acc.findIndex((a) => a.postid === cur.postid) === -1) {
      //     return [...acc, cur];
      //   } else {
      //     acc[acc.findIndex((a) => a.postid === cur.postid)] = cur;
      //     return acc;
      //   }
      // }, []);
      }),
  },
  initialState
);

const actionCreators = {
  getMainOfficeDB,
  getHotDB,
  clickLikeDB,
  deleteLikeDB,
  getOfficeLikeDB,
  getSOListDB,
};

export { actionCreators };
