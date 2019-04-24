import 'bootstrap';
import '../scss/styles.scss';

import './loading';
// split 할 것
// page view - editProfile 에서만 사용하는 js인데, main에다 모두 때려 박게 되면
// 모든 view에서 해당 view에 필요도 없는 js까지 include하게 된다.
// --> 즉 트래픽 저하 발생
// split 할 것. ( webpack )
import './pages/editProfile';
