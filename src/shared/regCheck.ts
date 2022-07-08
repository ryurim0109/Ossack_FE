// 사용자 이름 체크 2자-6자이하
export const nickNameRegex = (nickname:string) => {
  var regNickName = /^[가-힣a-zA-Z]{2,10}$/;
  return regNickName.test(nickname);
};

// 검색어 체크 (1~20자리의 띄어쓰기 포함한 한글)
export const searchCheck = (search:string) => {
  var regSearch = /^[가-힣\s]{1,20}$/;
  return regSearch.test(search);
};

// Email 체크
export const emailRegex = (email:string) => {
  var regEmail =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return regEmail.test(email);
};

// password 체크
export const passwordRegex = (password:string) => {
  var regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  return regPassword.test(password);
};
