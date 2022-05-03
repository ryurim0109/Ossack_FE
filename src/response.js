export const RESP = {
  USERSIGNUPPOST: {
    status: 200,
    data: "회원가입에 성공하였습니다",
  },
  USERLOGINPOST: {
    status: 200,
    data: "로그인에 성공하였습니다",
  },
  GETOFFICE: [
    {
      title: "은평병원",
      coordinate: { lat: 37.592113779824636, lng: 126.92199098323738},
      estate: [{
        type: "중소형사무실",
        monthly: "월세",
        deposit: "1억",
        rent_fee:300,
        buildingFloor:3,
        roomFloor:2,
        buildingInfo:"깔끔",
        area: "120/105m2(전용률 88%)",

      }],
      subway:[{station:"홍대입구"}],
      mylike:true,
    },
    {
      title: "생태연못",
      coordinate: { lat:37.59251112267921, lng:126.92337479833523 },
      estate: [{
        type: "중소형사무실",
        monthly: "월세",
        deposit: "1억",
        rent_fee:300,
        buildingFloor:3,
        roomFloor:2,
        buildingInfo:"깔끔",
        area: "120/105m2(전용률 88%)",

      }],
      subway:[{station:"홍대입구"}],
      mylike:true,
    },
    {
      title: "텃밭",
      coordinate: { lat: 37.58555886656804, lng: 37.58555886656804 },
      estate: [{
        type: "중소형사무실",
        monthly: "월세",
        deposit: "1억",
        rent_fee:300,
        buildingFloor:3,
        roomFloor:2,
        buildingInfo:"깔끔",
        area: "120/105m2(전용률 88%)",

      }],
      subway:[{station:"홍대입구"}],
      mylike:true,
    },
    {
      title: "근린공원",
      coordinate: { lat: 37.597291805618035, lng: 126.92481083291669 },
      estate: [{
        type: "중소형사무실",
        monthly: "월세",
        deposit: "1억",
        rent_fee:300,
        buildingFloor:3,
        roomFloor:2,
        buildingInfo:"깔끔",
        area: "120/105m2(전용률 88%)",

      }],
      subway:[{station:"홍대입구"}],
      mylike:true,
    },
  ],
};
