import $ from 'jquery';
import { SHORT_TIME } from '../value';

const form = document.querySelector('.edit-profile form');
const profilePhoto = document.querySelector('.profile-photo');
const box = profilePhoto.querySelector('.box');
const loadingElement = document.querySelector('ul.loading');
const profilePhotoChangeBtn = profilePhoto.querySelector('.change-btn');
const successIcon = document.querySelector('.success-icon');

// changeBtn classname, value 변경 method
export function ChangeBtn(className) {
  this.changeBtn = form.querySelector(`.${className} .change-btn`);
}
ChangeBtn.prototype.changeStatus = function(status, text) {
  if (text) {
    this.changeBtn.textContent = text;
  }
  const preStatus = this.changeBtn.className
    .split(' ')
    .find(className => className.search('btn-') !== -1);
  this.changeBtn.classList.replace(preStatus, status);
  setTimeout(() => {
    this.changeBtn.classList.replace(status, 'btn-primary');
    this.changeBtn.textContent = 'change';
  }, SHORT_TIME);
};

export default {
  handleClick(e) {
    const formData = new FormData(form);
    const changeBtn = new ChangeBtn('profile-photo');
    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      url: '/user/editProfile',
      data: formData,
      processData: false,
      contentType: false,
      success(data) {
        changeBtn.changeStatus('btn-success', 'success');
        successIcon.classList.replace('hide', 'show');
        setTimeout(() => {
          successIcon.classList.replace('show', 'hide');
        }, SHORT_TIME);
      },
      error(error) {
        changeBtn.changeStatus('btn-danger', 'failure');
      },
      beforeSend(e) {
        box.after(successIcon);
        box.after(loadingElement);
        loadingElement.classList.replace('hide', 'show');
      },
    }).always(() => {
      loadingElement.classList.replace('show', 'hide');
    });
  },
  handleMouseEnter() {
    profilePhotoChangeBtn.classList.add('focused');
  },
  handleMouseLeave() {
    profilePhotoChangeBtn.classList.remove('focused');
  },
  init() {
    profilePhotoChangeBtn.addEventListener('click', this.handleClick);
    profilePhotoChangeBtn.addEventListener('mouseenter', this.handleMouseEnter);
    profilePhotoChangeBtn.addEventListener('mouseleave', this.handleMouseLeave);
  },
};
