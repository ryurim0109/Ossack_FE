import axios from "axios";

//1. axios 인터셉터 생성
export const instance = axios.create({


  //baseURL: "http://15.165.160.109",


 
  //다빈님 최신 54.180.80.167
  
  //15.165.158.5 민우님



  baseURL: 'http://54.180.80.167:8080',
  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json",
  },
  withCredentials: false,
});

//2. 요청 인터셉터
instance.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const Token = localStorage.getItem("token");
    if (Token === "") {
      window.alert("로그인을 먼저 해주세요!");
      return config;
    }
    // const tokens = Token.split('=')[1];
    config.headers = {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json",
      Authorization: `Bearer ${Token}`,
    };
    return config;
  },
  //에러 전 호출
  (err) => {
    console.log(err);
  }
);

//3. 응답 인터셉터
instance.interceptors.response.use(
  (success) => {
    const response = success.data;

    if (
      response.statusCode === 200 &&
      response.responseMessage === "조회 성공"
    ) {
      return response.posts;
    }

    return success;
  },
  (error) => {
    console.log(error);

    if (
      error.response.status === 403 &&
      error.response.responseMessage === "권한이 없습니다."
    ) {
      window.alert("권한이 없습니다.");
    }

    if (
      error.response.status === 404 &&
      error.response.responseMessage === "게시글을 찾을 수 없습니다."
    ) {
      window.alert("게시글을 찾을 수 없습니다.");
    }

    if (
      error.response.data.statusCode === 403 &&
      error.response.data.responseMessage === "권한이 없습니다."
    ) {
      return window.alert("권한이 없습니다.");
    }

    return error;
  }
);

export const TokenCheck = localStorage.getItem("token") ? true : false;
