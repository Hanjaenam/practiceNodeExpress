import passport from 'passport';
// 사용자 인증 성공 시 호출
// 사용자 정보를 이용해 세션을 만듦
// 로그인 이후에 들어오는 요청은 deserializeUser 메소드 안에서 이 세션을 확인할 수 있음
passport.serializeUser(function(user, done) {
  done(null, user); // 이 인증 콜백에서 넘겨주는 user 객체의 정보를 이용해 세션 생성
});

// 사용자 인증 이후 사용자 요청 시마다 호출
// user -> 사용자 인증 성공 시 serializeUser 메소드를 이용해 만들었던 세션 정보가 파라미터로 넘어온 것임
passport.deserializeUser(function(user, done) {
  done(null, user);
});
