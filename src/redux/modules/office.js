import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";
import { RESP } from "../../response";

const GET_MAIN_OFFICE = "SET_MAIN_OFFICE";

const getMainOffice = createAction(GET_MAIN_OFFICE, (list)=> ({list}));

const initialState = {
    list: []
}

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

export default handleActions ({
    [GET_MAIN_OFFICE]: (state, action) =>
    produce(state, (draft) => {
        draft.list=action.payload.list;
    }),
},
initialState
);

const actionCreators = { 
    getMainOfficeDB,
}

export {actionCreators}