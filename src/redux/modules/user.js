import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { instance } from "../../shared/api";
import Swal from 'sweetalert2';
//import { RESP } from "../../response";
//import { setCookie, deleteCookie } from "../../shared/cookie";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const USER_IMG = "USER_IMG";

// initialState
const initialState = {
  user: null,
  is_login: null,
};

// actionCreators
const setUser = createAction(SET_USER, (user, is_login) => ({
  user,
  is_login,
}));
const logOut = createAction(LOG_OUT, () => {});
const user_img = createAction(USER_IMG, (userImage) => ({userImage}));

// middleWares
const signUpApi = (user) => {
  console.log("user : ", user);
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.post("http://15.165.158.5:8080/user/signup", {
        userEmail: user.userEmail,
        nickname: user.nickname,
        password: user.password,
      });
      //const response = RESP.USERSIGNUPPOST;
      console.log("response : ", response);

      if (response.status === 200) {
        //   if (response.data === "회원가입에 성공하였습니다") {
        alert(`${user.nickname}님 ${response.data.message}`);
        history.replace("/login");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요!!");
      }
    } catch (err) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요~");
      console.log("에러발생", err);
    }
  };
};

const loginApi = (userEmail, password) => {
  console.log("userEmail : ", userEmail);
  console.log("password : ", password);
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.post("http://15.165.158.5:8080/user/login", {
        userEmail: userEmail,
        password: password,
      });
      //const response = RESP.USERLOGINPOST;
      console.log("response : ", response);

      if (response.status === 200) {
        Swal.fire('로그인 성공');
        history.replace("/main");

        const token = response.headers.authorization.split("BEARER ");
        localStorage.setItem("token", token[1]);

        dispatch(
          setUser({
            nickname: "",
            userEmail: userEmail,
          })
        );
      } else {
        Swal.fire('이메일과 패스워드를 다시 확인해주세요.');
      }
    } catch (err) {
      Swal.fire('이메일과 패스워드를 다시 확인해주세요.');
      console.log("에러발생", err);
    }
  };
};

const loginCheckApi = () => {
  return async function (dispatch, getState, { history }) {
  //   try {
  //     const check = await axios.get(
  //       // "http://15.165.160.109:8080/api/islogin",
  //       "http://15.165.158.5:8080/api/islogin",
  //       {},
  //       {
  //         headers: {
  //           Authorization: `BEARER ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     console.log(check)
  //     dispatch(
  //       setUser({
  //         nickname: check.data.nickname,
  //         userEmail: check.data.userEmail,
  //         imageUrl: check.data.imageUrl,
  //       })
  //     );
  //   } catch (err) {
  //     console.log("에러발생", err);
  //     Swal.fire('로그인 여부 확인에 문제가 생겼습니다. 로그인을 다시 해주세요!');
  //     history.replace('/')
  //   }
  // };
  instance.get(
    "/api/islogin"
    ).then((res)=>{
      console.log(res)
      dispatch(
        setUser(
         { 
          nickname: res.data.nickname,
          userEmail: res.data.userEmail,
          imageUrl: res.data.imageUrl,
        }
        )
      );
    }).catch((err) => {
      console.log("체크에러다!!!!", err.response);
      Swal.fire('로그인 여부 확인에 문제가 생겼습니다. 로그인을 다시 해주세요!');
    }); 
  }
};

const logOutApi = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    history.replace("/");
    Swal.fire('로그인 기간 만료!');
    dispatch(logOut());
  };
};

//카카오 로그인
const loginBykakao = (code) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/user/kakao/callback?code=${code}`)
      .then((res) => {
        const token = res.headers.authorization.split("BEARER ");
        localStorage.setItem("token", token[1]);
        history.push("/main"); // 토큰 받았고 로그인됐으니 화면 전환시켜줌(메인으로)
        // 바로 유저정보 저장하기
        Swal.fire('로그인 성공 !');
        instance
          .get("/api/islogin")
          .then((res) => {
            console.log(res, "나는 로그인체크 응답");
            dispatch(
              setUser({
                //유저정보를 다시 세팅
                nickname: res.data.nickname,
                username: res.data.username,
                imageUrl:res.data.imageUrl,
                email: res.data.email,
               
              })
            );
          })
          .catch((error) => console.log("유저정보저장오류", error));
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        Swal.fire('로그인 실패 !');
        history.replace("/"); // 로그인 실패하면 처음화면으로 돌려보냄
      });
  };
};

//Google Login
const loginBygoogle = (code) => {
  console.log("code : ", code);
  return function (dispatch, getState, { history }) {
    // axios.get(`http://15.165.160.109:8080/user/kakao/callback?code=${code}`)
    instance
      .get(`/user/google/callback?code=${code}`)
      .then((res) => {
        console.log("res : ", res);

        const token = res.headers.authorization.split("BEARER ");
        console.log("token : ", token);

        localStorage.setItem("token", token[1]);
        Swal.fire('로그인 성공!');
        history.push("/main"); // 토큰 받았고 로그인됐으니 화면 전환시켜줌(메인으로)
        // 바로 유저정보 저장하기
        
        instance
          .get("/api/islogin")
          .then((res) => {
            console.log(res, "나는 로그인체크 응답");

            dispatch(
              setUser({
                //유저정보를 다시 세팅
                nickname: res.data.nickname,
                username: res.data.username,
                //imageUrl:res.data.imageUrl,
                email: res.data.email,

              })
            );
          })
          .catch((error) => console.log("유저정보저장오류", error));
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        Swal.fire('로그인에 실패하였습니다.');
        history.replace("/"); // 로그인 실패하면 처음화면으로 돌려보냄
      });
  };
};
//유저 프로필 변경
const userImgDB = (image) => {
  console.log(image);
  const file = new FormData();
  file.append("imageFile", image);
  return function (dispatch, getState, { history }) {
    axios
      .put("http://15.165.158.5:8080/api/user/profile", file, {
        headers: {
          Authorization: `BEARER ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data, "이미지 데이터");
        Swal.fire('이미지 등록이 완료되었습니다.');
        dispatch(user_img(res.data.imageUrl));
      })
      .catch((err) => {
        console.log("프로필 업로드 에러다!!!!", err.response);
      });
  };
};
// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // setCookie("is_login", "success");
        draft.is_login = true;
        draft.user = action.payload.user;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        //deleteCookie("is_login");
        draft.is_login = false;
        draft.user = null;
        localStorage.clear();
      }),
    [USER_IMG]: (state, action) =>
      produce(state, (draft) => {
        console.log( action.payload.userImage)
          draft.user={...state.user, imageUrl : action.payload.userImage};

    }),
  },
  initialState
);

const actionCreators = {
  signUpApi,
  loginApi,
  loginCheckApi,
  logOutApi,
  loginBykakao,
  loginBygoogle,
  userImgDB,
};

export { actionCreators };
