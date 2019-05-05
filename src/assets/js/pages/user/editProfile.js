import 'assets/scss/pages/user/editProfile.scss';
import { createInput } from 'assets/js/utils/index';
import $ from 'jquery';

const form = document.querySelector('.edit-profile form');
const profilePhoto = form.querySelector('.profile-photo');
const inputFile = profilePhoto.querySelector('.box #profile-photo_input');
const imgThumbnail = profilePhoto.querySelector('.thumbnail');
const loadingElement = document.querySelector('ul.loading');
const successIcon = profilePhoto.querySelector('.success-icon');
const changeBtn = profilePhoto.querySelector('.change-btn');
const reader = new FileReader();

const btnStatus = (value, beforeStatus, afterStatus) => {
  profilePhoto.querySelector('.change-btn').value = value;
  profilePhoto.querySelector('.change-btn').classList.replace(beforeStatus, afterStatus);
};
const previewImg = previewImgSrc => {
  imgThumbnail.src = previewImgSrc;
};
const handleChange = e => {
  reader.readAsDataURL(e.target.files[0]);
};
function BoxEvent() {
  this.box = profilePhoto.querySelector('.box');
  this.changeBtn = profilePhoto.querySelector('.change-btn');
}
BoxEvent.prototype.addMouseEnter = function() {
  this.box.addEventListener('mouseenter', e => {
    this.box.classList.add('focused');
  });
};
BoxEvent.prototype.addMouseLeave = function() {
  this.box.addEventListener('mouseleave', e => {
    setTimeout(() => {
      this.box.classList.remove('focused');
    }, 1000);
  });
};
BoxEvent.prototype.init = function() {
  this.addMouseEnter();
  this.addMouseLeave();
};
const initBoxElement = () => {
  const boxEvent = new BoxEvent();
  boxEvent.init();
};
function ChangeBtnEvent() {
  this.box = profilePhoto.querySelector('.box');
  this.changeBtn = profilePhoto.querySelector('.change-btn');
}
ChangeBtnEvent.prototype.addClick = function() {
  const handleClick = e => {
    const formData = new FormData(form);
    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      url: '/user/editProfile',
      data: formData,
      processData: false,
      contentType: false,
      success(data) {
        btnStatus('success', 'btn-primary', 'btn-success');
        successIcon.classList.replace('hide', 'show');
        setTimeout(() => {
          btnStatus('change', 'btn-success', 'btn-primary');
        }, 2000);
        setTimeout(() => {
          successIcon.classList.replace('show', 'hide');
        }, 2000);
      },
      error(error) {
        btnStatus('FAILURE', 'btn-primary', 'btn-danger');
        setTimeout(() => {
          btnStatus('change', 'btn-dange', 'btn-primary');
        }, 2000);
      },
      beforeSend(e) {
        loadingElement.classList.replace('hide', 'show');
      },
    }).always(() => {
      loadingElement.classList.replace('show', 'hide');
    });
  };
  this.changeBtn.addEventListener('click', handleClick);
};
ChangeBtnEvent.prototype.addMouseEnter = function() {
  const handleMouseEnter = e => {
    this.changeBtn.classList.add('focused');
  };
  this.changeBtn.addEventListener('mouseenter', handleMouseEnter);
};
ChangeBtnEvent.prototype.addMouseLeave = function() {
  const handleMouseLeave = e => {
    setTimeout(() => {
      this.changeBtn.classList.remove('focused');
    }, 1000);
  };
  this.changeBtn.addEventListener('mouseleave', handleMouseLeave);
};
ChangeBtnEvent.prototype.init = function() {
  this.addClick();
  this.addMouseEnter();
  this.addMouseLeave();
};
const initChangeBtn = () => {
  const changeBtnEvent = new ChangeBtnEvent();
  changeBtnEvent.init();
};
const handleLoad = e => {
  previewImg(e.target.result);
};
const previewPhoto = () => {
  inputFile.addEventListener('change', handleChange);
  reader.addEventListener('load', handleLoad);
};
const init = () => {
  previewPhoto();
  initChangeBtn();
  initBoxElement();
};

init();
