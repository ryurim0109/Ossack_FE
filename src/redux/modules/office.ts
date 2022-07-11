import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { instance } from "../../shared/api";


  export interface SearchItemDataParams {
    totalpage: number;
    presentpage: number;
    keyword: string;
    estateResponseDtoList: Array<string>;
    mylike?:boolean;
    estateid?:number;
    
  }
  export interface ShareItemDataParams {
    totalpage: number;
    presentpage: number;
    keyword: string;
    sharedOfficeResponseDtos: Array<string>;
    mylike?:boolean;
    shareofficeid?:number;
  }
  export interface LikeParams{
    mylike:boolean;
    agent:string | null;
    personIncharge:string | null;
    phoneNumber:string| null;
    area: string | null;
    capacity: any;
    management_fee: any;
    type: string | null;
    toilet: any;
    buildingFloor: any;
    roomFloor: any;
    parking: any;
    monthly: string | null;
    rent_fee: string | null;
    deposit :string | null;
    subwayInfo: any;
    buildingDetail:string | null;
    buildingInfo: string |null;
    images: Array<string>;
    number:any;
    time?:string | null;
    minimum_days?:string | null;
    floor?:string | null;
    name?:string | null;
    price?: string | null;
    detail?:string |null;
    address?:string | null;
    imageList?:Array<string>
  }
  export interface officeType {
    list: Array<SearchItemDataParams>;
    main_list: Array<any>;
    hot_list: Array<any>;
    share_list: Array<ShareItemDataParams>;
    is_loaded: boolean;
    one_office: LikeParams;
    one_share_office: LikeParams;
    mylike:boolean;
  } 
const initialState:officeType = {
  list: [],
  main_list: [],
  hot_list: [],
  share_list: [],
  is_loaded: false,
  one_office: {
    mylike: false,
    agent: null,
    personIncharge:null,
    phoneNumber:null,
    area: null,
    capacity: null,
    management_fee: null,
    type:null,
    toilet: null,
    buildingFloor: null,
    roomFloor: null,
    monthly:null,
    parking: null,
    rent_fee: null,
    deposit :null,
    subwayInfo: null,
    buildingDetail:null,
    buildingInfo:null,
    images:[],
    number:null,

  },
  one_share_office: {
    mylike: false,
    agent: null,
    personIncharge:null,
    phoneNumber:null,
    area: null,
    capacity: null,
    management_fee: null,
    type:null,
    toilet: null,
    buildingFloor: null,
    roomFloor: null,
    parking: null,
    monthly:null,
    rent_fee: null,
    deposit :null,
    subwayInfo: null,
    buildingDetail:null,
    buildingInfo:null,
    images:[],
    number:null,
    time:null,
    minimum_days:null,
    floor:null,
    name:null,
    price:null,
    detail:null,
    address: null,
    imageList:[],

  },
  mylike:false,
};

export const  getMainOfficeDB= createAsyncThunk(
    "GET_MAIN_OFFICE",
    async (dong:string, thunkAPI) => {
      try{
        const response = await instance.get(`/estates?query=${dong}`)
          thunkAPI.dispatch(getMainOffice(response.data));
      }catch (err){
        return;
      }
    }
  )
  export const  mainClickLikeDB= createAsyncThunk(
    "MAIN_CLICK_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
          await instance.post(`/estates/${estateId}/like`)
          thunkAPI.dispatch(mainClickLike(estateId));
      }catch (err){
        return;
      }
    }
  )
  export const  mainDeleteLikeDB= createAsyncThunk(
    "MAIN_DELETE_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
        await instance.post(`/estates/${estateId}/unlike`)
        thunkAPI.dispatch(mainDeleteLike(estateId));
      }catch (err){
        return;
      }
    }
  )
  export const  clickLikeDB= createAsyncThunk(
    "CLICK_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
        await instance.post(`/estates/${estateId}/like`)
          thunkAPI.dispatch(clickLike(estateId));
      }catch (err){
        return;
      }
    }
  )
  export const  deleteLikeDB= createAsyncThunk(
    "DELETE_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
        await instance.post(`/estates/${estateId}/unlike`)
        thunkAPI.dispatch(deleteLike(estateId));
      }catch (err){
        return;
      }
    }
  )
  export const  shareClickLikeDB= createAsyncThunk(
    "SHARE_CLICK_LIKE",
    async (shareofficeid:number, thunkAPI) => {
      try{
        await instance.post(`/estates/${shareofficeid}/like`)
        thunkAPI.dispatch(shareClickLike(shareofficeid));
      }catch (err){
        return;
      }
    }
  )
  export const  shareDeleteLikeDB = createAsyncThunk(
    "SHARE_DELETE_LIKE",
    async (shareofficeid:number, thunkAPI) => {
      try{
        await instance.post(`/estates/${shareofficeid}/unlike`)
        thunkAPI.dispatch(shareDeleteLike(shareofficeid));
      }catch (err){
        return;
      }
    }
  )
  export const  oneClickLikeDB= createAsyncThunk(
    "ONE_CLICK_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
        const response=await instance.post(`/estates/${estateId}/like`)
          thunkAPI.dispatch(oneClickLike(response.data));
      }catch (err){
        return;
      }
    }
  )
  export const  oneDeleteLikeDB = createAsyncThunk(
    "ONE_DELETE_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
        const response= await instance.post(`/estates/${estateId}/unlike`)
        thunkAPI.dispatch(oneDeleteLike(response.data));
      }catch (err){
        return;
      }
    }
  )
  interface DataType {
    data: SearchItemDataParams ;
  }
  interface ShareType {
    data:ShareItemDataParams;
  }
  export const  getSOListDB= createAsyncThunk(
    "GET_MAIN_OFFICE",
    
    async (searchInfo: { keyword: string; pageno: number |1; monthly:number | undefined; depositlimit:number |undefined;feelimit:number|undefined; } ,thunkAPI) => {
      try{
        thunkAPI.dispatch(is_loaded(false));
        const responce: DataType = await instance.get(`/estates/${searchInfo.pageno}?query=${searchInfo.keyword}&depositlimit=${searchInfo.depositlimit}&feelimit=${searchInfo.feelimit}&monthly=${searchInfo.monthly}`)
          thunkAPI.dispatch(
            getSOList({
              totalpage: responce.data.totalpage,
              presentpage: responce.data.presentpage,
              keyword: responce.data.keyword,
              estateResponseDtoList: responce.data.estateResponseDtoList,
            })
          );
      }catch (err){
        return;
      }
    }
  )
  export const  getShareListDB= createAsyncThunk(
    "GET_SEARCH_SHARE_LIST",
    
    async (shareInfo: { keyword: string; pageno: number; } ,thunkAPI) => {
      try{
        thunkAPI.dispatch(is_loaded(false));
        const responce: ShareType = await instance.get(`/sharedoffices?query=${shareInfo.keyword}&pagenum=${shareInfo.pageno}`)
          thunkAPI.dispatch(
            getShareList({
              totalpage: responce.data.totalpage,
              presentpage: responce.data.presentpage,
              keyword: responce.data.keyword,
              sharedOfficeResponseDtos: responce.data.sharedOfficeResponseDtos,
            })
          );
      }catch (err){
        return;
      }
    }
  )
  export const officeSlice = createSlice({
    name: 'officeReducer',
    initialState,
    reducers: {
        getMainOffice: (state, action: PayloadAction<any>) => {
        state.main_list = action.payload.main_list;
        return;
      },
      mainClickLike: (state, action: PayloadAction<any>) => {
        let numArr :Array<any> = [];
        state.main_list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
          return false;
        });
        state.main_list[numArr[0]].mylike = true;
        return;
      },
      mainDeleteLike: (state, action: PayloadAction<any>) => {
        let numArr :Array<any> = [];
        state.main_list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
          return false;
        });
        state.main_list[numArr[0]].mylike = false;
        return;
      },
      clickLike: (state, action: PayloadAction<any>) => {
        let numArr :Array<any> = [];
        state.list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
          return false;
        });
        state.list[numArr[0]].mylike = true;
        return;
      },
      deleteLike: (state, action: PayloadAction<any>) => {
        let numArr :Array<any> = [];
        state.list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
          return false;
        });
        state.list[numArr[0]].mylike = false;
        return;
      },
      shareClickLike: (state, action: PayloadAction<any>) => {
        let numArr :Array<any> = [];
        state.share_list.filter((val, idx) => {
          if (val.shareofficeid === action.payload.shareofficeid) {
            return numArr.push(idx);
          }
          return false;
        });
        state.share_list[numArr[0]].mylike = true;
        return;
      },
      shareDeleteLike: (state, action: PayloadAction<any>) => {
        let numArr :Array<any> = [];
        state.share_list.filter((val, idx) => {
          if (val.shareofficeid === action.payload.shareofficeid) {
            return numArr.push(idx);
          }
          return false;
        });
        state.share_list[numArr[0]].mylike = false;
        return;
      },
      oneClickLike: (state, action: PayloadAction<any>) => {
        state.one_office.mylike = true;
        return;
      },
      oneDeleteLike: (state, action: PayloadAction<any>) => {
        state.one_office.mylike = false;
        return;
      },
      getSOList: (state, { payload }:PayloadAction<SearchItemDataParams>) => {
        const new_searchList = [
          ...state.list,
          {
            totalpage: payload.totalpage,
            presentpage: payload.presentpage,
            keyword: payload.keyword,
            estateResponseDtoList: payload.estateResponseDtoList,
          },
        ];
        return { ...state, list: new_searchList };
      },
      getShareList: (state, { payload }:PayloadAction<ShareItemDataParams>) => {
        const new_shardList = [
          ...state.share_list,
          {
            totalpage: payload.totalpage,
            presentpage: payload.presentpage,
            keyword: payload.keyword,
            sharedOfficeResponseDtos: payload.sharedOfficeResponseDtos,
          },
        ];
        return { ...state, share_list: new_shardList };
      },
      is_loaded:(state, action: PayloadAction<any>)=>{
        state.is_loaded =true;
        return
      }
    },
    extraReducers: () => {
      //
    },
  });
  export default officeSlice;
  
  export const { 
    getMainOffice,
    mainClickLike,
    mainDeleteLike,
    clickLike,
    deleteLike,
    shareClickLike,
    shareDeleteLike,
    oneClickLike,
    oneDeleteLike,
    getSOList,
    is_loaded,
    getShareList,
 } = officeSlice.actions;
    
  const officeActionsCreators = {
    getMainOfficeDB,
    mainClickLikeDB,
    mainDeleteLikeDB,
    clickLikeDB,
    deleteLikeDB,
    shareClickLikeDB,
    shareDeleteLikeDB,
    oneClickLikeDB,
    oneDeleteLikeDB,
    getSOListDB,
    getShareListDB,
    // getOneOfficeDB,
    // getShareListDB,
    // getOneShareOfficeDB,
  };
  
  export { officeActionsCreators };
// // Action type
// const GET_MAIN_OFFICE = "GET_MAIN_OFFICE"; // 메인페이지 리스트 조회
// const MAIN_CLICK_LIKE = "MAIN_CLICK_LIKE"; //메인 좋아요
// const MAIN_DELETE_LIKE = "MAIN_DELETE_LIKE"; //메인 좋아요 취소
// const CLICK_LIKE = "CLICK_LIKE"; //오피스 좋아요
// const DELETE_LIKE = "DELETE_LIKE"; //오피스 좋아요 취소
// const GET_SEARCH_OFFICE_LIST = "GET_SEARCH_OFFICE_LIST"; // 오피스 검색 리스트
// const GET_ONE_OFFICE = "GET_ONE_OFFICE"; //오피스 상세 조회
// const ONE_CLICK_LIKE = "ONE_CLICK_LIKE"; //오피스 상세페이지 좋아요
// const ONE_DELETE_LIKE = "ONE_DELETE_LIKE"; //오피스 상세페이지 좋아요 취소
// const GET_SEARCH_SHARE_LIST = "GET_SEARCH_SHARE_LIST"; // 공유 오피스 검색 리스트
// const SHARE_CLICK_LIKE = "SHARE_CLICK_LIKE"; //공유 오피스 좋아요
// const SHARE_DELETE_LIKE = "SHARE_DELETE_LIKE"; //공유 오피스 좋아요 취소
// const GET_ONE_SHARE_OFFICE = "GET_ONE_SHARE_OFFICE"; //공유 오피스 상세조회
// const ONE_SHARE_CLICK_LIKE = "ONE_SHARE_CLICK_LIKE"; //오피스 상세페이지 좋아요
// const ONE_SHARE_DELETE_LIKE = "ONE_SHARE_DELETE_LIKE"; //오피스 상세페이지 좋아요 취소
// const LOADED = "LOADED";

// // Action Creator
// const getMainOffice = createAction(GET_MAIN_OFFICE, (main_list) => ({
//   main_list,
// }));
// const clickLike = createAction(CLICK_LIKE, (estate_id) => ({
//   estate_id,
// }));
// const deleteLike = createAction(DELETE_LIKE, (estate_id) => ({
//   estate_id,
// }));
// const mainClickLike = createAction(MAIN_CLICK_LIKE, (estate_id) => ({
//   estate_id,
// }));
// const mainDeleteLike = createAction(MAIN_DELETE_LIKE, (estate_id) => ({
//   estate_id,
// }));
// const shareClickLike = createAction(SHARE_CLICK_LIKE, (shareofficeid) => ({
//   shareofficeid,
// }));
// const shareDeleteLike = createAction(SHARE_DELETE_LIKE, (shareofficeid) => ({
//   shareofficeid,
// }));
// const oneClickLike = createAction(ONE_CLICK_LIKE, (mylike) => ({
//   mylike,
// }));
// const oneDeleteLike = createAction(ONE_DELETE_LIKE, (mylike) => ({
//   mylike,
// }));
// const oneShareClickLike = createAction(ONE_SHARE_CLICK_LIKE, (mylike) => ({
//   mylike,
// }));
// const oneShareDeleteLike = createAction(ONE_SHARE_DELETE_LIKE, (mylike) => ({
//   mylike,
// }));
// const getSOList = createAction(
//   GET_SEARCH_OFFICE_LIST,
//   (list, page, keyword, presentpage) => ({
//     list,
//     page,
//     keyword,
//     presentpage,
//   })
// );
// const getShareList = createAction(
//   GET_SEARCH_SHARE_LIST,
//   (share_list, page, keyword, presentpage) => ({
//     share_list,
//     page,
//     keyword,
//     presentpage,
//   })
// );
// const getOneOffice = createAction(GET_ONE_OFFICE, (one_office) => ({
//   one_office,
// }));

// const getOneShareOffice = createAction(
//   GET_ONE_SHARE_OFFICE,
//   (one_share_office) => ({
//     one_share_office,
//   })
// );
// const isLoaded = createAction(LOADED, (loaded) => ({ loaded }));
// const initialState = {
//   list: [],
//   main_list: [],
//   hot_list: [],
//   share_list: [],
//   is_loaded: false,
//   one_office: [],
//   one_share_office: [],
// };
// /* 맛집근처 역근처 */
// const getMainOfficeDB = (dong) => {
//   return (dispatch) => {
//     instance
//       .get(`/estates?query=${dong}`)
//       .then((res) => {
//         dispatch(getMainOffice(res.data));
//       })
//       .catch((err) => {
//         console.log(err.response, "나는 메인 오피스 DB 오류");
//         console.log(err, "나는 메인 오피스 DB 오류");
//       });
//   };
// };
// /* 메인 좋아요 클릭 */
// const mainClickLikeDB = (estateId) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${estateId}/like`)
//       .then((res) => {
//         dispatch(mainClickLike(estateId));
//       })
//       .catch((err) => {
//         console.log("메인 좋아요 에러", err.message);
//       });
//   };
// };
// /*메인 좋아요 취소 */
// const mainDeleteLikeDB = (estateId) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${estateId}/unlike`)
//       .then((res) => {
//         dispatch(mainDeleteLike(estateId));
//       })
//       .catch((err) => {
//         console.log("메인 좋아요 취소 에러", err.message);
//       });
//   };
// };
// /* 오피스 좋아요 클릭 */
// const clickLikeDB = (estateId) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${estateId}/like`)
//       .then((res) => {
//         dispatch(clickLike(estateId, res.data));
//       })
//       .catch((err) => {
//         console.log("오피스좋아요 에러", err);
//       });
//   };
// };
// /* 오피스 좋아요 취소 */
// const deleteLikeDB = (estateId) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${estateId}/unlike`)
//       .then((res) => {
//         dispatch(deleteLike(estateId, res.data));
//       })
//       .catch((err) => {
//         console.log("오피스 좋아요 취소 에러", err);
//       });
//   };
// };
// /* 공유 오피스 좋아요 클릭 */
// const shareClickLikeDB = (shareofficeid) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${shareofficeid}/like`)
//       .then((res) => {
//         dispatch(shareClickLike(shareofficeid));
//       })
//       .catch((err) => {
//         console.log("공유오피스 좋아요 클릭 에러", err.message);
//       });
//   };
// };
// /* 공유오피스 좋아요 취소 */
// const shareDeleteLikeDB = (shareofficeid) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${shareofficeid}/unlike`)
//       .then((res) => {
//         dispatch(shareDeleteLike(shareofficeid));
//       })
//       .catch((err) => {
//         console.log("공유 오피스 좋아요 취소 에러", err.message);
//       });
//   };
// };
// /* 오피스 상세 좋아요 클릭 */
// const oneClickLikeDB = (estateId) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${estateId}/like`)
//       .then((res) => {
//         dispatch(oneClickLike(res.data));
//       })
//       .catch((err) => {
//         console.log("오피스좋아요 에러", err.message);
//       });
//   };
// };
// /* 오피스 상세 좋아요 취소 */
// const oneDeleteLikeDB = (estateId) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${estateId}/unlike`)
//       .then((res) => {
//         dispatch(oneDeleteLike(res.data));
//       })
//       .catch((err) => {
//         console.log("오피스 좋아요 취소 에러", err.message);
//       });
//   };
// };
// /* 공유 오피스 상세 좋아요 클릭 */
// const oneShareClickLikeDB = (shareofficeid) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${shareofficeid}/like`)
//       .then((res) => {
//         dispatch(oneShareClickLike(res.data));
//       })
//       .catch((err) => {
//         console.log("오피스좋아요 에러", err.message);
//       });
//   };
// };
// /* 공유 오피스 상세 좋아요 취소 */
// const oneShareDeleteLikeDB = (shareofficeid) => {
//   return (dispatch) => {
//     instance
//       .post(`/estates/${shareofficeid}/unlike`)
//       .then((res) => {
//         dispatch(oneShareDeleteLike(res.data));
//       })
//       .catch((err) => {
//         console.log("오피스 좋아요 취소 에러", err.message);
//       });
//   };
// };
// // 오피스 검색 리스트 조회
// const getSOListDB = (keyword, pageno, router, monthly) => {
//   const depositlimit = router?.split("&")[1]?.split("=")[1];
//   const feelimit = router?.split("&")[2]?.split("=")[1];

//   return (dispatch) => {
//     dispatch(isLoaded(false));
//     instance
//       .get(
//         `/estates/${pageno}?query=${keyword}&depositlimit=${depositlimit}&feelimit=${feelimit}&monthly=${monthly}`
//       )
//       .then((res) => {
//         dispatch(
//           getSOList(
//             res.data.estateResponseDtoList,
//             res.data.totalpage,
//             res.data.keyword,
//             res.data.presentpage
//           )
//         );
//       })
//       .catch((err) => {
//         console.log("오피스 검색 리스트 조회 에러 ", err.message);
//       });
//   };
// };
// //공유오피스 검색 리스트 조회
// const getShareListDB = (keyword, pageno) => {
//   return (dispatch) => {
//     dispatch(isLoaded(false));
//     instance
//       .get(`/sharedoffices?query=${keyword}&pagenum=${pageno}`)
//       .then((res) => {
//         dispatch(
//           getShareList(
//             res.data.sharedOfficeResponseDtos,
//             res.data.totalpage,
//             res.data.keyword,
//             res.data.presentpage
//           )
//         );
//       })
//       .catch((err) => {
//         console.log("공유오피스 검색 리스트 조회 에러 ", err.message);
//       });
//   };
// };
// /* 오피스 상세 조회 */
// const getOneOfficeDB = (estateid) => {
//   return (dispatch) => {
//     dispatch(isLoaded(false));
//     instance
//       .get(`/estate/${estateid}`)
//       .then((res) => {
//         dispatch(getOneOffice(res.data));
//       })
//       .catch((err) => {
//         console.log("오피스 상세 조회 에러: ", err.message);
//       });
//   };
// };
// /* 공유오피스 상세 조회 */
// const getOneShareOfficeDB = (shareofficeid) => {
//   return (dispatch) => {
//     dispatch(isLoaded(false));
//     instance
//       .get(`/sharedoffice/${shareofficeid}`)
//       .then((res) => {
//         dispatch(getOneShareOffice(res.data));
//       })
//       .catch((err) => {
//         console.log("공유오피스 상세 조회: ", err.message);
//       });
//   };
// };

// // Reducer
// export default handleActions(
//   {
//     [GET_ONE_SHARE_OFFICE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_share_office = action.payload.one_share_office;
//         draft.is_loaded = true;
//       }),
//     [GET_ONE_OFFICE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_office = action.payload.one_office;
//         draft.is_loaded = true;
//       }),
//     [GET_MAIN_OFFICE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.main_list = action.payload.main_list;
//       }),
//     [CLICK_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         let numArr = [];
//         draft.list.filter((val, idx) => {
//           if (val.estateid === action.payload.estate_id) {
//             return numArr.push(idx);
//           }
//           return false;
//         });
//         draft.list[numArr[0]].mylike = true;
//       }),
//     [DELETE_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         let numArr = [];
//         draft.list.filter((val, idx) => {
//           if (val.estateid === action.payload.estate_id) {
//             return numArr.push(idx);
//           }
//           return false;
//         });
//         draft.list[numArr[0]].mylike = false;
//       }),
//     [MAIN_CLICK_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         let numArr = [];
//         draft.main_list.filter((val, idx) => {
//           if (val.estateid === action.payload.estate_id) {
//             return numArr.push(idx);
//           }
//           return false;
//         });
//         draft.main_list[numArr[0]].mylike = true;
//       }),
//     [MAIN_DELETE_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         let numArr = [];
//         draft.main_list.filter((val, idx) => {
//           if (val.estateid === action.payload.estate_id) {
//             return numArr.push(idx);
//           }
//           return false;
//         });
//         draft.main_list[numArr[0]].mylike = false;
//       }),
//     [SHARE_CLICK_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         let numArr = [];
//         draft.share_list.filter((val, idx) => {
//           if (val.shareofficeid === action.payload.shareofficeid) {
//             return numArr.push(idx);
//           }
//           return false;
//         });
//         draft.share_list[numArr[0]].mylike = true;
//       }),
//     [SHARE_DELETE_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         let numArr = [];
//         draft.share_list.filter((val, idx) => {
//           if (val.shareofficeid === action.payload.shareofficeid) {
//             return numArr.push(idx);
//           }
//           return false;
//         });
//         draft.share_list[numArr[0]].mylike = false;
//       }),
//     [ONE_CLICK_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_office.mylike = action.payload.mylike;
//       }),
//     [ONE_DELETE_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_office.mylike = action.payload.mylike;
//       }),
//     [ONE_SHARE_CLICK_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_share_office.mylike = action.payload.mylike;
//       }),
//     [ONE_SHARE_DELETE_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_share_office.mylike = action.payload.mylike;
//       }),
//     [GET_SEARCH_OFFICE_LIST]: (state, action) =>
//       produce(state, (draft) => {
//         if (
//           action.payload.presentpage > 1 &&
//           action.payload.keyword === draft.keyword
//         ) {
//           draft.list.push(...action.payload.list);
//         } else {
//           draft.list = action.payload.list;
//         }
//         draft.page = action.payload.page;
//         draft.presentpage = action.payload.presentpage;
//         draft.keyword = action.payload.keyword;
//         draft.is_loaded = true;
//       }),
//     [GET_SEARCH_SHARE_LIST]: (state, action) =>
//       produce(state, (draft) => {
//         if (
//           action.payload.presentpage > 1 &&
//           action.payload.keyword === draft.keyword
//         ) {
//           draft.share_list.push(...action.payload.share_list);
//         } else {
//           draft.share_list = action.payload.share_list;
//         }
//         draft.page = action.payload.page;
//         draft.keyword = action.payload.keyword;
//         draft.presentpage = action.payload.presentpage;
//         draft.is_loaded = true;
//       }),
//   },
//   initialState
// );

// const actionCreators = {
//   getMainOfficeDB,
//   clickLikeDB,
//   deleteLikeDB,
//   getSOListDB,
//   getOneOfficeDB,
//   getShareListDB,
//   getOneShareOfficeDB,
//   mainClickLikeDB,
//   mainDeleteLikeDB,
//   shareClickLikeDB,
//   shareDeleteLikeDB,
//   oneDeleteLikeDB,
//   oneClickLikeDB,
//   oneShareClickLikeDB,
//   oneShareDeleteLikeDB,
// };

// export { actionCreators };
