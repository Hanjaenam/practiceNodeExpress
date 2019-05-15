const profilePhoto = document.querySelector('.profile-photo');
const box = profilePhoto.querySelector('.box');

export default {
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
