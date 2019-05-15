import $ from 'jquery';
import { ChangeBtn } from './ChangeProfile';

const form = document.querySelector('.edit-profile form');
const username = form.querySelector('.username');
const usernameInput = username.querySelector('input');
const usernameInputValue = usernameInput.value;
const usernameChangeBtn = username.querySelector('.change-btn');

export default {
  handleInputClick(e) {
    e.target.classList.replace('form-control-plaintext', 'form-control');
    e.target.removeAttribute('readonly');
  },
  handleBlur(e) {
    e.target.classList.replace('form-control', 'form-control-plaintext');
    e.target.setAttribute('readonly', true);
  },
  handleKeyUp(e) {
    if (usernameInputValue !== e.target.value) {
      usernameChangeBtn.removeAttribute('disabled');
    } else {
      usernameChangeBtn.setAttribute('disabled', 'true');
    }
  },
  handleBtnClick(e) {
    const changeBtn = new ChangeBtn('username');
    $.post({
      url: '/user/editUsername',
      // contentType: 'application/json'
      data: { username: usernameInput.value },
      success: data => {
        changeBtn.changeStatus('btn-success', 'success');
      },
      error: error => {
        console.log('error');
        console.log(error);
        // changeBtn.changeStatus('btn-danger', 'failure');
      },
    });
  },
  init() {
    usernameInput.addEventListener('click', this.handleInputClick);
    usernameInput.addEventListener('blur', this.handleBlur);
    usernameInput.addEventListener('keyup', this.handleKeyUp);
    usernameChangeBtn.addEventListener('click', this.handleBtnClick);
  },
};
