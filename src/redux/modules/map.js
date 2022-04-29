import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SET_MAP="SET_MAP";

const setMap = createAction(SET_MAP, (map) => ({ map }));

const initialState = {
    map: null,
}
export default handleActions ({
    [SET_MAP]: (state, action) =>
    produce(state, (draft) => {
        draft.map=action.payload.map
    }),
},
initialState
);
    
  const actionCreators = {
    setMap,
  };
  
  export { actionCreators };