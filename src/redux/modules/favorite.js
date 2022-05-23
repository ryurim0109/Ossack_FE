import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";

import Swal from "sweetalert2";

const GET_LIKE = "GET_LIKE"; // 찜한 오피스 조회
const GET_SHARE_LIKE = "GET_SHARE_LIKE"; // 찜한 공유오피스 조회
const UNLIKE_OFFICE = "UNLIKE_OFFICE"; //오피스 좋아요 취소
const UNLIKE_SHARE = "UNLIKE_SHARE"; //공유 오피스 좋아요 취소

const getOfficeLike = createAction(GET_LIKE, (like_list) => ({ like_list }));
const unlikeOffice = createAction(UNLIKE_OFFICE, (estateId) => ({
  estateId,
}));
const getShareLike = createAction(GET_SHARE_LIKE, (share_like_list) => ({
  share_like_list,
}));
const unlikeShare = createAction(UNLIKE_SHARE, (shareofficeid) => ({
  shareofficeid,
}));
const initialState = {
  like_list: [],
  share_like_list: [],
};
/* 찜한 오피스 조회 */
const getOfficeLikeDB = () => {
  return (dispatch) => {
    instance
      .get(`/estates/favorite`)
      .then((res) => {
        console.log("res : ", res);
        dispatch(getOfficeLike(res.data));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};
/* 찜한 오피스 좋아요 취소 */
const unlikeOfficeDB = (estateId) => {
  return (dispatch) => {
    instance
      .post(`/estates/${estateId}/unlike`)
      .then((res) => {
        Swal.fire("좋아요를 취소하셨습니다.");
        dispatch(unlikeOffice(estateId));
      })
      .catch((err) => {
        console.log("오피스 좋아요 취소 에러", err.message);
      });
  };
};
/* 찜한 공유 오피스 조회 */
const getShareLikeDB = () => {
  return (dispatch) => {
    instance
      .get(`/sharedoffice/favorite`)
      .then((res) => {
        dispatch(getShareLike(res.data));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};
/* 찜한 공유 오피스 좋아요 취소 */
const unlikeShareDB = (shareofficeid) => {
  return (dispatch) => {
    instance
      .post(`/estates/${shareofficeid}/unlike`)
      .then((res) => {
        Swal.fire("좋아요를 취소하셨습니다.");
        dispatch(unlikeShare(shareofficeid));
      })
      .catch((err) => {
        console.log("오피스 좋아요 취소 에러", err.message);
      });
  };
};
export default handleActions(
  {
    [GET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list = action.payload.like_list;
      }),
    [UNLIKE_OFFICE]: (state, action) =>
      produce(state, (draft) => {
        let unlike_list = draft.like_list.filter(
          (val) => val.estateid !== action.payload.estateId
        );
        draft.like_list = unlike_list;
      }),
    [GET_SHARE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.share_like_list = action.payload.share_like_list;
      }),
    [UNLIKE_SHARE]: (state, action) =>
      produce(state, (draft) => {
        let unlikeShare_list = draft.share_like_list.filter(
          (val) => val.shareofficeid !== action.payload.shareofficeid
        );
        draft.share_like_list = unlikeShare_list;
      }),
  },
  initialState
);

const actionCreators = {
  getOfficeLikeDB,
  unlikeOfficeDB,
  getShareLikeDB,
  unlikeShareDB,
};
export { actionCreators };
