import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { instance } from "../../shared/api";

export interface favoriteType {
  like_list: Array<any>;
  share_like_list: Array<any>;
} 
const initialState: favoriteType = {
  like_list: [],
  share_like_list: [],
};

export const  getOfficeLikeDB= createAsyncThunk(
  "favoriteReducer/get",
  async (_, thunkAPI) => {
    try{
      await instance.get(`/estates/favorite`)
      .then((res)=>{
        thunkAPI.dispatch(getOfficeLike(res.data));
      });
    }catch (err){
      return;
    }
  }
)
export const  getShareLikeDB= createAsyncThunk(
  "favoriteReducer/get",
  async (_, thunkAPI) => {
    try{
      await instance.get(`/estates/favorite`)
      .then((res)=>{
        thunkAPI.dispatch(getShareLike(res.data));
      });
    }catch (err){
      return;
    }
  }
)
export const  unlikeOfficeDB= createAsyncThunk(
  "favoriteReducer/unlike",
  async (estateId:number,thunkAPI) => {
    try{
      await instance.post(`/estates/${estateId}/unlike`)
      .then((res)=>{
        thunkAPI.dispatch(unlikeOffice(estateId));
      });
    }catch (err){
      return;
    }
  }
)

export const  unlikeShareDB= createAsyncThunk(
  "favoriteReducer/unlike",
  async (shareofficeid:number,thunkAPI) => {
    try{
      await instance.post(`/estates/${shareofficeid}/unlike`)
      .then((res)=>{
        thunkAPI.dispatch(unlikeShare(shareofficeid));
      });
    }catch (err){
      return;
    }
  }
)
export const favoriteSlice = createSlice({
  name: 'favoriteReducer',
  initialState,
  reducers: {
    getOfficeLike: (state, action: PayloadAction<any>) => {
      state.like_list = action.payload.like_list;
      return;
    },
    getShareLike: (state, action: PayloadAction<any>) => {
      state.share_like_list = action.payload.share_like_list;
      return;
    },
    unlikeOffice:(state, action: PayloadAction<any>) => {
      let unlike_list = state.like_list.filter((val:any) => val.estateid !== action.payload.estateId);
                state.like_list = unlike_list;
      return;
    },
    unlikeShare:(state, action: PayloadAction<any>) => {
      let unlike_list = state.like_list.filter((val:any) => val.shareofficeid !== action.payload.shareofficeid);
                state.share_like_list = unlike_list;
      return;
    },
  },
  extraReducers: () => {
    //
  },
});
export default favoriteSlice;

export const { getOfficeLike, unlikeOffice, getShareLike,unlikeShare} = favoriteSlice.actions;
  
const favoriteActionsCreators = {
  getOfficeLikeDB,
  unlikeOfficeDB,
  getShareLikeDB,
  unlikeShareDB
};

export { favoriteActionsCreators };

