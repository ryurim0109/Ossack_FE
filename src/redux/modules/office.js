import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";
import { RESP } from "../../response";

import Swal from "sweetalert2";

// Action type
const GET_MAIN_OFFICE = "GET_MAIN_OFFICE"; // 메인페이지 리스트 조회
const GET_HOT = "GET_HOT"; // 핫한 지역
const CLICK_LIKE = "CLICK_LIKE"; //좋아요
const DELETE_LIKE = "DELETE_LIKE"; //좋아요 취소
const GET_LIKE = "GET_LIKE"; // 찜한 매물 조회
const GET_SEARCH_OFFICE_LIST = "GET_SEARCH_OFFICE_LIST";
const GET_ONE_OFFICE = "GET_ONE_OFFICE";

// Action Creator
const getMainOffice = createAction(GET_MAIN_OFFICE, (list) => ({ list }));
const getHot = createAction(GET_HOT, (hot_list) => ({ hot_list }));
const clickLike = createAction(CLICK_LIKE, (estate_id) => ({ estate_id }));
const deleteLike = createAction(DELETE_LIKE, (estate_id) => ({ estate_id }));
const getOfficeLike = createAction(GET_LIKE, (like_list) => ({ like_list }));
const getSOList = createAction(
  GET_SEARCH_OFFICE_LIST,
  (list, page, keyword) => ({
    list,
    page,
    keyword,
  })
);
const getOneOffice = createAction(GET_ONE_OFFICE, (one_office) => ({
  one_office,
}));

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
const clickLikeDB = (estateId) => {
  console.log("estateid", estateId);
  return (dispatch) => {
    instance
      .post(`/api/favorite/${estateId}`)
      .then((res) => {
        console.log("res : ", res);
        Swal.fire("좋아요를 누르셨습니다.");
        dispatch(clickLike(estateId));
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

const getSOListDB = (keyword, pageno) => {
  console.log("keyword : ", keyword);
  return (dispatch, getState) => {
    instance
      .get(`/api/list/search/${pageno}?query=${keyword}`)
      .then((res) => {
        console.log("res : ", res);
        const key = decodeURI(keyword);
        dispatch(
          getSOList(res.data.estateResponseDtoList, res.data.totalpage, key)
        );
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

/* 상세 조회 */
const getOneOfficeDB = (estateid) => {
  console.log("estateId : ", estateid);
  return (dispatch) => {
    instance
      .get(`/api/detail/${estateid}`)
      .then((res) => {
        console.log("res : ", res);
        dispatch(getOneOffice(res.data));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

// Reducer
export default handleActions(
  {
    [GET_ONE_OFFICE]: (state, action) =>
      produce(state, (draft) => {
        console.log("state : ", state);
        draft.one_office = action.payload.one_office;
        console.log("action.payload.one_office : ", action.payload.one_office);
      }),
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

        console.log("draft.list.length : ", draft.list.length);
        draft.list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
        });
        draft.list[numArr[0]].mylike = true;

        // draft.list.filter((val, idx) => {
        //   if (val.estateid === action.payload.estate_id) {
        //     return numArr.push(idx);
        //   }
        // });
        // draft.list[numArr[0]].mylike = true;
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
        if (
          action.payload.page > 1 &&
          action.payload.keyword === draft.keyword
        ) {
          draft.list.push(...action.payload.list);
        } else {
          draft.list = action.payload.list;
        }
        draft.page = action.payload.page;
        draft.keyword = action.payload.keyword;
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
  getOneOfficeDB,
};

export { actionCreators };
