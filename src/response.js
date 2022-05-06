export const RESP = {
  USERSIGNUPPOST: {
    status: 200,
    data: "회원가입에 성공하였습니다",
  },
  USERLOGINPOST: {
    status: 200,
    data: "로그인에 성공하였습니다",
  },
  OFFICE:[
    {
    estateid:12323,
    type:"중소형사무실",
    monthly:"월세",
    deposit:"1억",
    rent_fee:300,
    buildingFloor:3,
    roomFloor:2,
    buildingInfo:"깔끔합니다",
    area:"120/105㎡(전용률 88%)",
    images:["https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg"],
    subways:[{station:"홍대입구"}],
      mylike:true
  },
  {
    estateid:12323,
    type:"중소형사무실",
    monthly:"월세",
    deposit:"1억",
    rent_fee:300,
    buildingFloor:3,
    roomFloor:2,
    buildingInfo:"깔끔합니다",
    area:"120/105㎡(전용률 88%)",
    images:[],
    subways:[{station:"홍대입구"}],
      mylike:true
  },
],

  GETOFFICE: [
    {
      level:2,
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
      level:3,
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
      level:5,
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
      level:3,
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
