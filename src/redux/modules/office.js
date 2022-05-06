import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";
import { RESP } from "../../response";

const GET_MAIN_OFFICE = "GET_MAIN_OFFICE";
const GET_HOT = "GET_HOT";

const getMainOffice = createAction(GET_MAIN_OFFICE, (list)=> ({list}));
const getHot = createAction(GET_HOT, (hot_list)=> ({hot_list}));

const initialState = {
    list: [],
    hot_list:[],
}
/* 맛집근처 역근처 */
const getMainOfficeDB = (dong)=>{
    console.log(dong)
    return (dispatch) => {
        // instance.get(`/api/list?query=${dong}`)
     
        const res=RESP.OFFICE
        dispatch(getMainOffice(res));
        //   .then((res) => {
            
        //     console.log(res.data,"나는 메인 오피스 DB");
        //     dispatch(getMainOffice(res.data));
        //   })
        //   .catch((err) => {
        //     console.log(err.response,"나는 메인 오피스 DB 오류");
        //     console.log(err,"나는 메인 오피스 DB 오류");
        //   });
      };
}
/* 핫한 오피스 조회 */
const getHotDB = ()=>{
    return (dispatch) => {
        // instance.get(`/api/list/hot`)
     
        const res=RESP.HOT
        dispatch(getHot(res));
        //   .then((res) => {
            
        //     console.log(res.data,"나는 메인 오피스 DB");
        //     dispatch(getHot(res.data));
        //   })
        //   .catch((err) => {
        //     console.log(err.response,"나는 핫한 오피스 DB 오류");
        //     console.log(err,"나는 핫한 오피스 DB 오류");
        //   });
      };
}
export default handleActions ({
    [GET_MAIN_OFFICE]: (state, action) =>
    produce(state, (draft) => {
        draft.list=action.payload.list;
    }),
    [GET_HOT]: (state, action) =>
    produce(state, (draft) => {
        draft.hot_list=action.payload.hot_list;
    }),
},
initialState
);

const actionCreators = { 
    getMainOfficeDB,
    getHotDB,
}

export {actionCreators}