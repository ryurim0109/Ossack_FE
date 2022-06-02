# <img src="https://avatars.githubusercontent.com/u/104211703?s=200&v=4" align=left width=50 >오싹 소개

![logo](https://velog.velcdn.com/images/ryurim0109/post/617aad8d-f4d4-45a9-9efc-eb23f73b55de/image.jpg)
<br>
👻 **[오싹 서비스 바로가기](https://ossack.shop/)**

## 💻 프로젝트 소개

> 오싹은 지도로 오피스 매물과 공유 오피스 매물을 찾아볼 수 있는 모바일 웹입니다.

## ⚙️ 아키텍쳐

![아키텍처](https://velog.velcdn.com/images/ryurim0109/post/94c8fd2f-7ea2-44da-b425-fac874853c5c/image.jpg)

## 😇‍ 프론트엔드 팀원

<table>
  <tr>
    <td align="center"><a href="https://github.com/ryurim0109"><img src="https://avatars.githubusercontent.com/u/96809979?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/devkevinsoon"><img src="https://avatars.githubusercontent.com/u/83892403?v=4" width="100px" /></a></td>
   
  </tr>
  <tr>
    <td align="center"><b>김유림</b></td>
    <td align="center"><b>박태순</b></td>
    
  </tr>
  <tr>
    <td align="center"><b>🤩 Frontend 🤩 </b></td>
    <td align="center"><b>🤩 Frontend 🤩 </b></td>
   
  </tr>
</table>

### ✅ 커밋 종류

> 수정한 종류에 따라 커밋 메시지를 선택

| 메시지명 | 설명                                                     |
| -------- | -------------------------------------------------------- |
| feat     | 새로운 기능 추가 관련                                    |
| fix      | 버그 수정                                                |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가                   |
| refactor | 코드 리팩토링(기능향상)                                  |
| chore    | 빌드 업무 수정, 패키지 매니저 수정                       |
| docs     | 문서 수정(md, git관련 파일, 이미지파일 수정)             |
| style    | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |

## ⚛️ 개인 역할

<code>김유림</code> 메인, 지도, 필터 , 검색 리스트, 프로필 페이지, 좋아요 기능, 무한스크롤, 스플래쉬, 시작하기 페이지, https배포, 무중단 배포

<code>박태순</code> 로그인, 회원가입, 검색, 상세페이지 , 핫한 오피스 페이지, 찜목록 페이지 ,무한스크롤, 찜한 매물 불러오기, 최근 검색어 기능, 무중단 배포

## 🔨 Trouble Shooting

<details markdown="1">
<summary>지도 페이지에 로딩 스피너 연결 하던 중 발생한 문제</summary>
  
### ✅ 문제상황

> 지도페이지 들어오면, 매물들을 못 불러와서 로딩 스피너만 계속 뜨는 문제 발생
> onDragend이벤트가 발생할 시에만 매물들이 불러와져서 이러한 문제가 발생하는 것이라고 판단

### ✅ 해결

> 카카오 map안에 내장되어있는 지도 영역을 호출하는 메소드를 사용하여  
> map이 있을 때만 dispatch를 1번 실행하여 해결함

### ✅ 해결코드

```
const _position = {

    swLatLng: {
      lat: map?.getBounds().getSouthWest().getLat(),
      lng: map?.getBounds().getSouthWest().getLng(),
    },
    neLatLng: {
      lat: map?.getBounds().getNorthEast().getLat(),
      lng: map?.getBounds().getNorthEast().getLng(),
    },};

useEffect(() => {
if (map && name === "office") {
dispatch(mapActions.getOfficeData(_position, level, router));
} else if (map && name === "share") {
dispatch(mapActions.getShareData(_position, level));
}
}, [map]);
```

</details>
<details markdown="1">
<summary>최근 검색어 기능 작동 시 검색어가 저장되지 않고 페이지 이동</summary>
  
### ✅ 문제상황

> 키워드가 저장되기 전에 페이지가 이동하여 키워드가  
>  localstorage에 저장되지 않는 문제라 판단

### ✅ 해결

> 조건을 추가하여 e.key가 enter이고, 키워드가 있는 두가지 조건을 만족할 때
> 페이지가 이동하도록 코드 수정

### ✅ 해결코드

```
  const Entercheck = (e) => {
    if (keyword && e.key === "Enter") {
      if (!activeTab) {
        history.push(`/map/office?query=${keyword}`);
      } else {
        history.push(`/map/shareoffice?query=${keyword}`);
      }
    }
  };
```

<br/>
</details>
<details markdown="1">
<summary>https 배포 후 소셜 로그인 (카카오톡, 구글) 오류</summary>
  
### ✅ 문제상황

> 404에러가 발생했지만, 소셜 로그인 이외의 일반 로그인은 되는 상황으로
> 버킷 경로지정에는 문제가 없다고 판단

### ✅ 해결

> Html파일 최상단에 <base href=“/” /> 코드 추가 <br/>
> base 태그의 href 속성은
> 페이지 내의 모든 상대 주소(relative URL)들의 기본 URL을 명시.
> 리액트는 싱글페이지로 기본 url을 명시해줄 필요가 있다는 판단하에
> 다음과 같은 코드를 작성하여 해결

### ✅ 해결코드

```
 <base href="/" />
```

</details>
<br/>

### 👀 사용 라이브러리 👀

<div>
<img src="https://img.shields.io/badge/react-1496FF?style=flat&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/create react app-1496FF?style=flat&logo=create-react-app&logoColor=white">
<img src="https://img.shields.io/badge/axios-yellow?style=flat&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=EF2D5E">
<img src="https://img.shields.io/badge/immer-106ece?style=flat&logo=immer&logoColor=immer">
<img src="https://img.shields.io/badge/GreenSock-88ce02?style=flat&logo=GreenSock&logoColor=ffffff">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styledcomponents&logoColor=white">
<img src='https://img.shields.io/badge/yarn-v1.22.17-yellow?logo=yarn'/>
  <img src='https://img.shields.io/badge/AWS-Amazon AWS-yellow?logo=Amazon AWS'/>
   <img src='https://img.shields.io/badge/Amazon S3-569A31?logo=Amazon S3&logoColor=white'/>
  <img src='https://img.shields.io/badge/CLOUDFRONT-1261FE?logo=cloudfront'/>
   <img src='https://img.shields.io/badge/GithubActions-fff?logo=GithubActions'/>
</div>
