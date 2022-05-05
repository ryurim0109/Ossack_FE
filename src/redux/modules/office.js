import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";

const GET_MAIN_OFFICE = "SET_MAIN_OFFICE";

const getMainOffice = createAction(GET_MAIN_OFFICE, (list)=> ({list}));

const initialState = {
    list: []
}

const getMainOfficeDB = (dong)=>{
    return (dispatch) => {
        instance.get(`/api/list?query=${dong}`)
          .then((res) => {
            
            console.log(res.data,"나는 메인 오피스 DB");
            //console.log(res.data.currentPage)
            dispatch(getMainOffice(res.data));
          })
          .catch((err) => {
            console.log(err.response,"나는 메인 오피스 DB 오류");
            console.log(err,"나는 메인 오피스 DB 오류");
          });
      };
}

export default handleActions ({
    [GET_MAIN_OFFICE]: (state, action) =>
    produce(state, (draft) => {
        draft.list=action.list;
    }),
},
initialState
);

const actionCreators = { 
    getMainOfficeDB,
}

export {actionCreators}