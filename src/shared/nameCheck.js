// 사용자 이름 체크 2자-6자이하
export const checkName = (nickname) => {
  var regName = /^[가-힣a-zA-Z]{2,10}$/;
  return regName.test(nickname);
};
