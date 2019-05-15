import 'assets/scss/pages/user/editProfile.scss';
import previewThumbnail from '../../lib/editProfile/PreviewThumbnail';
import changeBtn from '../../lib/editProfile/ChangeProfile';
import box from '../../lib/editProfile/Box';
import username from '../../lib/editProfile/UserName';
import changePasswordInit from '../../lib/editProfile/ChangePassword';

// const setChangeStatusBtn = (element, textContent, beforeStatus, afterStatus) => {
//   element.textContent = textContent;
//   element.classList.replace(beforeStatus, afterStatus);
// };
const init = () => {
  previewThumbnail.init();
  changeBtn.init();
  box.init();
  username.init();
  changePasswordInit();
};

init();
