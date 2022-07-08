import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { instance } from "../../shared/api";

export interface officeType {
    list: Array<any>;
    main_list: Array<any>;
    hot_list: Array<any>;
    share_list: Array<any>;
    is_loaded: boolean;
    one_office: Array<any>;
    one_share_office: Array<any>;
    mylike:boolean;
  } 
const initialState:officeType = {
  list: [],
  main_list: [],
  hot_list: [],
  share_list: [],
  is_loaded: false,
  one_office: [],
  mylike: false,
  one_share_office: [],
};

export const  getMainOfficeDB= createAsyncThunk(
    "GET_MAIN_OFFICE",
    async (dong:string, thunkAPI) => {
      try{
        await instance.get(`/estates?query=${dong}`)
        .then((res)=>{
          thunkAPI.dispatch(getMainOffice(res.data));
        });
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
        .then((res)=>{
          thunkAPI.dispatch(mainClickLike(estateId));
        });
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
        .then((res)=>{
          thunkAPI.dispatch(mainDeleteLike(estateId));
        });
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
        .then((res)=>{
          thunkAPI.dispatch(clickLike(estateId));
        });
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
        .then((res)=>{
          thunkAPI.dispatch(deleteLike(estateId));
        });
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
        .then((res)=>{
          thunkAPI.dispatch(shareClickLike(shareofficeid));
        });
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
        .then((res)=>{
          thunkAPI.dispatch(shareDeleteLike(shareofficeid));
        });
      }catch (err){
        return;
      }
    }
  )
  export const  oneClickLikeDB= createAsyncThunk(
    "ONE_CLICK_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
        await instance.post(`/estates/${estateId}/like`)
        .then((res)=>{
          thunkAPI.dispatch(oneClickLike(res.data));
        });
      }catch (err){
        return;
      }
    }
  )
  export const  oneDeleteLikeDB = createAsyncThunk(
    "ONE_DELETE_LIKE",
    async (estateId:number, thunkAPI) => {
      try{
        await instance.post(`/estates/${estateId}/unlike`)
        .then((res)=>{
          thunkAPI.dispatch(oneDeleteLike(res.data));
        });
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
        state.mylike = true;
        return;
      },
      oneDeleteLike: (state, action: PayloadAction<any>) => {
        state.mylike = false;
        return;
      },
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
    
    // getSOListDB,
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
