import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";

import Swal from "sweetalert2";

const GET_LIKE = "GET_LIKE"; // 찜한 오피스 조회
const GET_SHARE_LIKE = "GET_SHARE_LIKE"; // 찜한 공유오피스 조회

const getOfficeLike = createAction(GET_LIKE, (like_list) => ({ like_list }));
const getShareLike = createAction(GET_SHARE_LIKE, (share_like_list) => ({
  share_like_list,
}));

const initialState = {
  like_list: [],
  share_like_list: [],
};
/* 찜한 오피스 조회 */
const getOfficeLikeDB = () => {
  return (dispatch) => {
    instance
      .get(`/api/list/favorite`)
      .then((res) => {
        console.log("res : ", res);
        dispatch(getOfficeLike(res.data));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
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

export default handleActions(
  {
    [GET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list = action.payload.like_list;
      }),
    [GET_SHARE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.share_like_list = action.payload.share_like_list;
      }),
  },
  initialState
);

const actionCreators = {
  getOfficeLikeDB,
  getShareLikeDB,
};
export { actionCreators };
