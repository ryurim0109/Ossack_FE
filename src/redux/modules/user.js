import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { instance, instances } from "../../shared/api";
import Swal from "sweetalert2";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const USER_IMG = "USER_IMG";
const SET_USEREMAIL = "SET_USEREMAIL";

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
const user_img = createAction(USER_IMG, (userImage) => ({ userImage }));
const setUserEmail = createAction(SET_USEREMAIL, (userEmail, statusCode) => ({
  userEmail,
  statusCode,
}));

// middleWares
//회원가입
const signUpApi = (user) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await instance.post("/user/signup", {
        userEmail: user.userEmail,
        nickname: user.nickname,
        password: user.password,
      });
      // console.log("response : ", response);
      if (response.status === 200 && response.data.includes("회원가입 성공")) {
        Swal.fire("회원가입에 성공했습니다!");
        history.replace("/login");
      } else {
        Swal.fire("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      Swal.fire("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.log("에러발생", err);
    }
  };
};
//로그인
const loginApi = (userEmail, password) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await instance.post("/user/login", {
        userEmail: userEmail,
        password: password,
      });
      //const response = RESP.USERLOGINPOST;
      //console.log("로그인체크", response);

      if (response.status === 200) {
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
        Swal.fire("이메일과 패스워드를 다시 확인해주세요.");
      }
    } catch (err) {
      Swal.fire("이메일과 패스워드를 다시 확인해주세요.");
      console.log("에러발생", err);
    }
  };
};
//유저정보확인
const loginCheckApi = () => {
  return function (dispatch, { history }) {
    instance
      .get("/user/islogin")
      .then((res) => {
        dispatch(
          setUser({
            nickname: res.data.nickname,
            userEmail: res.data.userEmail,
            imageUrl: res.data.imageUrl,
          })
        );
      })
      .catch((err) => {
        console.log("체크에러다!!!!", err.response);
        Swal.fire(
          "로그인 여부 확인에 문제가 생겼습니다. 로그인을 다시 해주세요!"
        );
        window.location.replace("/start");
      });
  };
};

// 이메일 중복검사
const userEmailCheckDB = (userEmail) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await instance.post("/user/idcheck", {
        userEmail: userEmail,
      });
      //console.log("response : ", response);

      if (response.data === true) {
        // console.log("response.data : ", typeof response.data);
        dispatch(setUserEmail(userEmail, response.data));
        Swal.fire({
          title: "사용가능한 이메일입니다!",
          showCancelButton: false,
          confirmButtonText: "확인",
          confirmButtonColor: "#3E00FF",
        });
        return true;
      } else if (response.data === false) {
        dispatch(setUserEmail(userEmail, response.data));
        Swal.fire({
          title: "이미 사용 중인 이메일입니다!",
          showCancelButton: false,
          confirmButtonText: "확인",
          confirmButtonColor: "#FF5151",
        });
        return false;
      } else if (response.data.includes("이메일 형식이 맞지 않습니다.")) {
        Swal.fire({
          title: "이메일 형식이 맞지 않습니다",
          showCancelButton: false,
          confirmButtonText: "확인",
          confirmButtonColor: "#FF5151",
        });
        return false;
      }
    } catch (err) {
      console.log("아이디 중복", err);
      window.alert("아이디 중복확인에 문제가 생겼습니다!");
    }
  };
};

//로그아웃
const logOutApi = () => {
  return function (dispatch) {
    localStorage.removeItem("token");
    dispatch(logOut());
    window.location.replace("/start");
  };
};
//회원 탈퇴
const resignDB = () => {
  return function (dispatch) {
    instance
      .put(`/user/withdraw`)
      .then((res) => {
        Swal.fire("회원탈퇴가 완료되었습니다.");
        localStorage.removeItem("token");

        window.location.replace("/start");
      })
      .catch((err) => {
        console.log(err, "회원탈퇴 에러");
      });
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
        Swal.fire("로그인 성공 !");
        instance
          .get("/user/islogin")
          .then((res) => {
            dispatch(
              setUser({
                //유저정보를 다시 세팅
                nickname: res.data.nickname,
                imageUrl: res.data.imageUrl,
                userEmail: res.data.userEmail,
              })
            );
          })
          .catch((error) => console.log("유저정보저장오류", error));
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        Swal.fire("로그인 실패 !");
        history.replace("/start"); // 로그인 실패하면 처음화면으로 돌려보냄
      });
  };
};

//Google Login
const loginBygoogle = (code) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/user/google/callback?code=${code}`)
      .then((res) => {
        const token = res.headers.authorization.split("BEARER ");

        localStorage.setItem("token", token[1]);
        Swal.fire("로그인 성공!");
        history.push("/main"); // 토큰 받았고 로그인됐으니 화면 전환시켜줌(메인으로)
        // 바로 유저정보 저장하기

        instance
          .get("/user/islogin")
          .then((res) => {
            dispatch(
              setUser({
                //유저정보를 다시 세팅
                nickname: res.data.nickname,
                imageUrl: res.data.imageUrl,
                userEmail: res.data.userEmail,
              })
            );
          })
          .catch((error) => console.log("유저정보저장오류", error));
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        Swal.fire("로그인에 실패하였습니다.");
        history.replace("/start"); // 로그인 실패하면 처음화면으로 돌려보냄
      });
  };
};
//유저 프로필 변경
const editProfileDB = (nickname, image, userimg) => {
  const file = new FormData();
  if (image) {
    file.append("imageFile", image);
    file.append("nickname", nickname);
    file.append("profileImgUrl", userimg);
  } else if (!image) {
    file.append("imageFile", new File([], "", { type: "text/plane" }));
    file.append("nickname", nickname);
    file.append("profileImgUrl", userimg);
  }
  return function (dispatch, getState, { history }) {
    instances
      .put("/user/profile", file)
      .then((res) => {
        // console.log(res, "이미지 데이터 성공");
        Swal.fire("프로필 변경이 완료되었습니다.");
        history.push("/mypage");
        /* dispatch(user_img(res.data.data.imageUrl)); */
      })
      .catch((err) => {
        console.log("프로필 업로드 에러다!!!!", err.response);
      });
  };
};
//유저 프로필 삭제
const userImgDeleteDB = (nickname) => {
  const file = new FormData();
  file.append("imageFile", new File([], "", { type: "text/plane" }));
  file.append("nickname", nickname);
  file.append("profileImgUrl", "");

  return function (dispatch, getState, { history }) {
    instances
      .put("/user/profile", file)
      .then((res) => {
        //console.log(res, "이미지 삭제 성공");
        Swal.fire("이미지 제거가 완료되었습니다.");
        instance
          .get("/user/islogin")
          .then((res) => {
            //console.log(res, "나는 로그인체크 응답");
            dispatch(user_img(res.data.imageUrl));
            history.push("/mypage");
          })
          .catch((error) => console.log("유저정보저장오류", error));
      })
      .catch((err) => {
        console.log("프로필 업로드 에러다!!!!", err.response);
      });
  };
};
// reducer
export default handleActions(
  {
    [SET_USEREMAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.userEmail = action.payload.userEmail;
        draft.statusCode = action.payload.statusCode;
      }),
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
        draft.user = { ...state.user, imageUrl: action.payload.userImage };
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
  editProfileDB,
  resignDB,
  userEmailCheckDB,
  setUserEmail,
  userImgDeleteDB,
};

export { actionCreators };
