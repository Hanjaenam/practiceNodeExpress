import passport from 'passport';

// 로그인이 성공하면 이 메서드를 이용하여 사용자정보를 session에 저장합니다.
// Browser -> Client
passport.serializeUser(function(user, done) {
  console.log('serializer');
  done(null, user); // session에 저장할 정보를 두 번째 파라미터(user)로 넘깁니다.
});

// node.js의 모든 페이지에서 접근할 때, 로그인이 되어 있을 경우 모든 사용자 페이지를 접근할 경우
// deserializeUser가 발생 serializerUser에서 session에 저장된 값을 이용해서 HTTP Request에 리턴
// Client -> Browser
passport.deserializeUser(function(user, done) {
  console.log('deserializer');
  done(null, user);
});
