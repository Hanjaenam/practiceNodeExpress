import 'assets/scss/pages/user/editProfile.scss';

const profilePhoto = document.querySelector('.profile-photo');
if (profilePhoto) {
  const reader = new FileReader();
  const inputFile = profilePhoto.querySelector('.box #profile-photo_input');
  const imgThumbnail = profilePhoto.querySelector('.thumbnail');

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
  };
  inputFile.addEventListener('change', handleChange);
  reader.addEventListener('load', handleLoad);
}
