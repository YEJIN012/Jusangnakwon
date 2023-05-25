# JUSANGNAKWON - 사용자 취향 기반 주류 추천 플랫폼
SSAFY 8기 2학기 특화 프로젝트(빅데이터 추천)

### 프로젝트 진행 기간

2023.02.20 ~ 2023.04.07 (7주)

## 프로젝트 소개

2030, MZ세대, 위스키 최근 뉴스에 함께 등장하는 키워드이다. 흔히 "아재술"로 불리는 위스키를 찾는 2030 세대가 늘어났다는 뉴스이다. 위스키를 사기 위해 편의점으로 오픈런을 하기도 한다. 젊은 세대의 주류 소비 트렌드 변화와 증가하는 홈술족을 위한 서비스를 기획해 보았다.
술을 좋아하는 사람들과 술을 잘 모르지만 알고 싶은 사람들을 위한 사용자 취향 기반 주류 추천 플랫폼 "주상낙원"이다.

## 사용한 데이터 셋

-   와인 : [WINE21 크롤링](https://www.wine21.com/13_search/wine_list.html)
-   위스키 : [Kaggle Whisky Dataset](https://www.kaggle.com/datasets/koki25ando/scotch-whisky-dataset)
-   전통주 : [네이버 전통주 지식백과 크롤링](https://github.com/learning-human/traditional-liquor-RS/blob/main/traditional_liquor_df_final.csv)
-   칵테일 : [Cocktail Wheel Dataset](http://dachang.github.io/CocktailViz/cocktailWheel.JSON)
-   맥주 : [BeerRate](https://github.com/quipu1/Bear-Recommendation)
-   커스텀 칵테일 : [만개의 레시피 무료 레시피 Dataset](https://kadx.co.kr/product/detail/0c5ec800-4fc2-11eb-8b6e-e776ccea3964)

## 데이터 전처리

-   Data에서 필요한 feature를 추출 진행
    -   기존 Dataset에 없는 사진이나 가격 정보 등을 추가로 Python을 이용해 크롤링 하여 수집
    -   추천 시스템을 위해 맛 별 데이터를 수집
-   추천 시스템 구축
    -   주종별 다양한 맛 column을 기준으로 Contents Based Filtering을 위해 Python으로 코사인 유사도를 계산하여 가장 맛이 비슷한 상위 5개의 술을 저장
    -   유저가 높은 평점을 매긴 술을 기준으로 맛의 유사도가 높은 술들을 모아서 제공
    -   평점을 매긴 적이 없는 유저라면 회원가입 시 진행되는 취향 설문을 통해 선호하는 맛에 따른 주류를 추천하여 cold start 문제를 해결

## 프로젝트 기능 설명

1. **술 추천**

-   다양한 주종별(와인,맥주,위스키,칵테일,전통주) 술 정보, 인기 순위 제공
-   사용자 취향을 기반으로 Contents Based Filtering 을 이용한 술 추천 시스템
-   사용자 커스텀 칵테일 신규 등록 및 추천 기능
-   기상청 공공 API를 이용한 재미있는 날씨별 술 추천

1. **커뮤니티**

-   게시글, 댓글을 이용한 다른 사용자들과의 소통

1. **주류 정보 제공**

-   주종별 입문자 가이드로 유저가 낯선 주종에도 쉽게 유입될 수 있도록 함

1. **유저 기능**

-   카카오, 구글 간편 소셜로그인 기능
-   캘린더에서 유저의 리뷰를 분석해 날짜마다 마신 술을 달력에 이모지로 보여줌

## Member

|  이름  |   포지션    | 역할                                                           |
| :----: | :---------: | :------------------------------------------------------------- |
| 김호정 |     FE      | UI/UX 개발<br>마이페이지                                       |
| 이예진 |     FE      | UI/UX 개발<br>홈 칵테일 페이지                                 |
| 조한이 |     FE      | UI/UX 개발<br>메인 페이지                                      |
| 남이랑 |     BE      | 추천 시스템<br>술 추천(날씨/취향) API 개발<br>사용자 인증/인가 |
| 양주연 |     BE      | 추천 시스템<br>피드 및 마이페이지 API 개발                     |
| 이상원 | BE<br>INFRA | 팀장<br>CI/CD 자동화<br>비로그인 술 추천 및 술 관련 API 개발   |

## 기술 스택

| POSITION | STACK           | VERSION  |
| :------: | :-------------- | :------- |
|  CLIENT  | React           | 18.2.0   |
|          | Typescript      | 4.9.3    |
|          | Vite            | 4.1.0    |
|          | Axios           | 1.3.4    |
|  SERVER  | Spring Boot     | 2.7.9    |
|          | OpenJDK         | 11.0     |
|          | Spring Security | 2.7.9    |
|          | Spring Data JPA | 2.7.9    |
|          | QueryDSL        | 1.0.10   |
| DATABASE | MYSQL           | 8.0      |
|          | REDIS           | 7.0      |
|  INFRA   | AWS             |          |
|          | GCP             |          |
|          | Docker          | 20.10.23 |
|          | Docker Compose  | 2.17.2   |
|          | Jenkins         | 2.387.1  |
|          | Nginx           | 1.18.0   |
| GENERAL  | Git             |          |
|          | Notion          |          |
|          | Jira            |          |
|          | Mattermost      |          |

## API 명세서

![API 명세서 ](https://user-images.githubusercontent.com/55802893/230756305-e7f6beec-47c6-47b5-9bda-6739756c2e9a.png)

## SCRUM

![scrum](https://user-images.githubusercontent.com/55802893/230756354-171f3bd4-7810-4b1e-9d0b-546066565553.png)

## 페이지 디자인

![페이지 디자인](https://user-images.githubusercontent.com/55802893/230756405-9c4326fe-51a4-485f-bfe2-501b6bd8c627.png)

## ERD

![erd](https://user-images.githubusercontent.com/55802893/230818218-ac0dae6a-84a4-447f-af27-1b2ea618a851.png)

## 서비스 아키텍처

![서비스 아키텍처](https://user-images.githubusercontent.com/55802893/230756439-2c761b6a-c260-4fe7-99c2-8149fa1846ad.png)

-   개발자가 develop 브랜치에 MR 요청 후 승인하게 되면 develop 브랜치 담당 Jenkins job 실행
-   develop jenkins job은 develop 브랜치 clone, 프론트, 백 폴더의 dockerfile을 사용해 이미지 빌드
-   빌드된 이미지를 dockerhub로 올리고 docker 내 사용하지 않는 모든 이미지 삭제
-   docker compose file로 docker hub에 올린 이미지 pull 하여 개발 서버 실행
-   develop jenkins job의 빌드 마지막 단계에서 main 브랜치로 MR 생성
-   개발 서버 테스트 후 발생하는 오류 수정 후 main 브랜치로 요청 된 MR 승인
-   main 브랜치로 MR 승인 시 production jenkins job 실행
-   develop jenkins job과 동일하게 동작 (프론트 프로젝트 빌드 같이 진행)

## 사이트 기능 설명

|                                                            page                                                             | description                                                                                                                                                                                                            |
| :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ![main-nologin](https://user-images.githubusercontent.com/55802893/230857415-ba025d16-a710-4e62-986a-564102085b95.png)    | - 로그인 하지 않은 사용자에게 랭킹순 추천<br>- 패이지 상단 기상청 날씨 api 정보를 통한 술, 안주 추천<br>- 커스텀 칵테일 랜덤 추천                                                                                      |
| ![login-recomm-list](https://user-images.githubusercontent.com/55802893/230857701-6d269101-a3a5-431a-bdcf-7be0942e9c63.png) | - 로그인한 사용자에게 사용자 취향 기반 주류추천<br>- 평점을 부여하지 않은 주종에 대해서 취향 설문 기반 추천<br>- 평점을 남긴 주종에 대해서 평점 높은 술과 유사한 술 추천<br>- 전체 주류확인 가능<br>- 주류 스크랩 기능 |
|    ![guide-login](https://user-images.githubusercontent.com/55802893/230858007-cdf56e8a-88e8-4276-9223-59fb70003860.png)    | - 주종별 술을 즐기는 방법에 대한 설명<br>- google, kakao social login                                                                                                                                                  |
|     ![feed-list](https://user-images.githubusercontent.com/55802893/230858364-05d1753a-2f75-4688-ad6d-f025144d1f18.png)     | - 사용자들의 리뷰, 레시피, 질문글 리스트와 상세보기                                                                                                                                                                    |
|       ![feed](https://user-images.githubusercontent.com/55802893/230858774-9dbc7fca-458d-4c38-a394-25cf7e5e8509.png)        | - 세 가지 글 작성 기능<br>- 사진 추가 및 데이터베이스 내 주류 검색 기능<br>- 술에 대한 평점 부여<br>- 글 공개, 비공개 선택 기능                                                                                        |
|      ![receipe](https://user-images.githubusercontent.com/55802893/230859248-a75be3fb-9b88-4220-b5d0-64816314454c.png)      | - 커스텀 칵테일 레시피 작성 기능<br>- 재료 입력, 칵테일에 대한 주관적인 맛 평가<br>- 레시피 작성                                                                                                                       |
|    ![hometender](https://user-images.githubusercontent.com/55802893/230859825-59055e17-cbff-46bd-b7e8-689cc39dcc2f.png)     | - 커스텀 칵테일 리스트<br>- 랭킹순 및 취향 기반 커스텀 칵테일 추천<br>- 커스텀 칵테일 리스트 확인 기능                                                                                                                 |
|      ![mypage](https://user-images.githubusercontent.com/55802893/230860348-a7910172-bd02-46ab-85a0-598c87e209e3.png)       | - mypage 확인 기능<br>- 캘린더에서 본인이 리뷰한 날짜에 주류 스탬프 찍기 기능<br>- 스크랩한 술 확인 기능<br>- 본인이 쓴 글 모아보기 기능                                                                               |
