import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { instance } from "../../shared/api";

// export interface ListItemDataParams {
//     office_list: Array<any>;
//     share_list: Array<any>;
//   }
export interface MapType {
    office_list: any;
    share_list: any;
    is_loaded: boolean;
  }

  const initialState: MapType = {
            office_list: [],
            share_list: [],
          is_loaded: false,
  };

  export interface PosType {
    SWlat : any;
    SWlng : any;
    NElat : any;
    NElng : any;
    swLatLng: object | any;
    lat: any;
    lng: any;
    neLatLng : any;
  }

  export interface PositionDataType {
    pos:PosType;
    level: number;
    router?: any;
    monthly?: any| null;
  }

  export const  getOfficeData= createAsyncThunk(
    "SET_OFFICE_LIST",
    //pos, level, router, monthly
    async (data:PositionDataType , thunkAPI) => {
      try{

        console.log(data)
            // const SWlat = data.pos.swLatLng.lat;
            // const SWlng = data.pos.swLatLng.lng;
            // const NElat = data.pos.neLatLng.lat;
            // const NElng = data.pos.neLatLng.lng;
      //const response = await instance.get(`/map?level=${level}&SWlat=${SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}&depositlimit=${depositlimit}&feelimit=${feelimit}&monthly=${monthly}`)
       
       
      }catch (err){
        return;
      }
    }
  )

  export const mapSlice = createSlice({
    name: 'mapReducer',
    initialState,
    reducers: {
        setOfficeList: (state, action: PayloadAction<any>) => {
        state.office_list = action.payload.office_list;
        state.is_loaded = true;
        return;
      },
    },
    extraReducers: () => {
      //
    },
  });

  export default mapSlice;

  export const { setOfficeList} = mapSlice.actions;
  
const mapActionsCreators = {
    getOfficeData
};

export { mapActionsCreators };
// import { createAction, handleActions } from "redux-actions";
// import produce from "immer";
// import { instance } from "../../shared/api";

// // Action type
// const SET_OFFICE_LIST = "SET_OFFICE_LIST";
// const SET_SHARE_LIST = "SET_SHARE_LIST";
// const LOADED = "LOADED";

// // Action Creator
// const setOfficeList = createAction(SET_OFFICE_LIST, (office_list) => ({
//   office_list,
// }));
// const setShareList = createAction(SET_SHARE_LIST, (share_list) => ({
//   share_list,
// }));
// const isLoaded = createAction(LOADED, (loaded) => ({ loaded }));
// const initialState = {
//   list: {
//     office_list: [],
//     share_list: [],
//   },
//   is_loaded: false,
// };

// // middleWares
// const getOfficeData = (pos, level, router, monthly) => {
//   const SWlat = pos.swLatLng.lat;
//   const SWlng = pos.swLatLng.lng;
//   const NElat = pos.neLatLng.lat;
//   const NElng = pos.neLatLng.lng;
//   const depositlimit = router?.split("&")[0]?.split("=")[1];
//   const feelimit = router?.split("&")[1]?.split("=")[1];
//   return function (dispatch) {
//     dispatch(isLoaded(false));
//     instance
//       .get(
//         `/map?level=${level}&SWlat=${SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}&depositlimit=${depositlimit}&feelimit=${feelimit}&monthly=${monthly}`
//       )
//       .then((res) => {
//         dispatch(setOfficeList(res.data));
//       })
//       .catch((err) => {
//         console.log(err.response, "나는 지도 오피스 DB 오류");
//         console.log(err, "나는 지도 오피스 DB 오류");
//       });
//   };
// };
// const getShareData = (pos, level) => {
//   const SWlat = pos.swLatLng.lat;
//   const SWlng = pos.swLatLng.lng;
//   const NElat = pos.neLatLng.lat;
//   const NElng = pos.neLatLng.lng;
//   return function (dispatch) {
//     dispatch(isLoaded(false));
//     instance
//       .get(
//         `/map/sharedoffice?level=${level}&SWlat=${SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}`
//       )
//       .then((res) => {
//         dispatch(setShareList(res.data));
//       })
//       .catch((err) => {
//         console.log(err.response, "나는 공유 오피스 DB 오류");
//         console.log(err, "나는 공유 오피스 DB 오류");
//       });
//   };
// };
// // reducer
// export default handleActions(
//   {
//     [SET_OFFICE_LIST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.office_list = action.payload.office_list;
//         draft.is_loaded = true;
//       }),
//     [SET_SHARE_LIST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.share_list = action.payload.share_list;
//         draft.is_loaded = true;
//       }),
//     [LOADED]: (state, action) =>
//       produce(state, (draft) => {
//         draft.is_loaded = action.payload.is_loaded;
//       }),
//   },
//   initialState
// );

// const actionCreators = {
//   setOfficeList,
//   getOfficeData,
//   getShareData,
// };

// export { actionCreators };
