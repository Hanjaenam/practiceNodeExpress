const profilePhoto = document.querySelector('.profile-photo');
const imgThumbnail = profilePhoto.querySelector('.thumbnail');
const inputFile = profilePhoto.querySelector('.box #profile-photo_input');
const profilePhotoChangeBtn = profilePhoto.querySelector('.change-btn');
const box = profilePhoto.querySelector('.box');
const reader = new FileReader();

export default {
  handleLoad(e) {
    const setThumbnailImg = previewImgSrc => {
      imgThumbnail.src = previewImgSrc;
    };
    setThumbnailImg(e.target.result);
  },
  handleChange(e) {
    reader.readAsDataURL(e.target.files[0]);
    profilePhotoChangeBtn.removeAttribute('disabled');
    profilePhotoChangeBtn.classList.remove('disabled');
  },
  init() {
    inputFile.addEventListener('change', this.handleChange);
    reader.addEventListener('load', this.handleLoad);
  },
};
const boxEvent = {
  handleMouseEnter(e) {
    box.classList.add('focused');
  },
  handleMouseLeave(e) {
    box.classList.remove('focused');
  },
  init() {
    box.addEventListener('mouseenter', this.handleMouseEnter);
    box.addEventListener('mouseleave', this.handleMouseLeave);
  },
};
