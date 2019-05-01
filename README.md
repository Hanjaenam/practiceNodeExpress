# Community Site Project ( user, table(+text, +photo) )

## TO DO

### important

- &#9744; logout 기능
- &#9744; user update 끝낼 것
- &#9744; bootstrap codeSplitting (scss mixin사용할 때 중첩으로 빌드되는 bootstrap 라이브러리 -> 불필요한 중복 빌드)
- &#9744; DB - tabel colletion

### append

- &#9744; block curl
- &#9744; api ( + authorization header )

<hr>

## 19/5/1

- passport login 이후 username, email(필수 정보) 입력 페이지
- login, 필수정보 입력페이지 input value 공백 submit 차단 javacsript

<hr>

## April - what is completed

- &#9745; fix css <br>
- &#9745; finish login, register (flash, check before save(regex)) <br>
- &#9745; check mongoose API (path, virtual, method, static) <br>
- &#9745; passport serialize, deserialize 확인할 것 <br>
- &#9745; append facebook, Google, naver auth <br>
  - &#9745; naver
  - &#9745; Google
  - &#9745; Facebook
- &#9745; webpack setting (error)
- &#9745; loginForm email, password 공백 시 submit 차단
- &#9745; passport login 이후 username, email(필수 정보) 입력 페이지

<hr>

## 19/4/29

- finish passport naver, google, facebook
- loginForm.js : loginForm form check before submit
- webpack multiple entry error!!
  - to do fix!

## 19/4/28

- finish naver passport
  - add email, nickname API
- modify directory structure

<hr>

## 19/4/26

- scss mixin
  - socialLoginBtn 작성
- pug mixin
  - socialLoginBtn 작성
- Directory structure 한 번 확인해볼 것
  - 더 나은 방향으로 수정

<hr>

## 19/4/25

- setting webpack
  - js 파일 통째로 하나로 빼내지 않고 각각 page마다 사용되는 js 만 빼내게끔 설정
  - css 도 마찬가지
  - ex) A Page 는 common Js, Css와 자기 페이지에서만 사용되는 A Js, A Css만 가져온다
  - 트래픽 감소 효과?

<hr>

## 19/4/23

- naver passport
- process.nextTick 알아볼 것.

<hr>

## 19/4/22

- fix css ( responsive register, login form width )
- finish login, register (register : passport/ check regex/ flash message)
- add jsconfig.json

<hr>

## 19/4/21

- regex

<hr>

## 19/4/20

- multer
  - bootstrap scss
  - modify css
  - flash ( connect-flash )

<hr>
