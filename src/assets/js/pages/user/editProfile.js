import 'assets/scss/pages/user/editProfile.scss';
import { makeBtn } from 'assets/js/utils/index';
import axios from 'axios';

const form = document.querySelector('.edit-profile form');
const profilePhoto = form.querySelector('.profile-photo');
const inputFile = profilePhoto.querySelector('.box #profile-photo_input');
const imgThumbnail = profilePhoto.querySelector('.thumbnail');
const changeBtn = makeBtn('Change', { class: 'change-btn' });
const reader = new FileReader();

const changeImg = imgToChange => {
  profilePhoto.removeChild(imgThumbnail);
  profilePhoto.prepend(imgToChange);
};
const handleChange = e => {
  reader.readAsDataURL(e.target.files[0]);
};
const handleLoad = e => {
  const image = new Image();
  image.src = e.target.result;
  image.style.width = `${imgThumbnail.width}px`;
  image.style.height = `${imgThumbnail.height}px`;
  image.classList = imgThumbnail.classList;
  image.classList.add('changed-profile-phto');
  changeImg(image);
  profilePhoto.append(changeBtn);
};
const handleClick = e => {
  const response = axios({
    url: ``,
  });
};
const previewPhoto = () => {
  inputFile.addEventListener('change', handleChange);
  reader.addEventListener('load', handleLoad);
};
const init = () => {
  previewPhoto();
};

init();
