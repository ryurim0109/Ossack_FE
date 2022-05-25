// 사용자 이름 체크 2자-6자이하
export const checkName = (nickname) => {
  var regName = /^[가-힣a-zA-Z]{2,10}$/;
  return regName.test(nickname);
};

// 검색어 체크 (특수문자 제외)
export const searchCheck = (search) => {
  var regSearch = /^[가-힣\s]{1,20}$/;
  return regSearch.test(search);
};
