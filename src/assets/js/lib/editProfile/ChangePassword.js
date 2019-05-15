import $ from 'jquery';
import { SHORT_TIME } from '../value';

const DEV_MODE = true;

const MSG = {
  ERROR: {
    BLANK: {
      PRE_PWD: '이전 비밀번호를 입력해주세요',
      CHANGE_PWD: '변경할 비밀번호를 입력해주세요',
      CHANGE_PWD_CONFIRM: '변경할 비밀번호를 확인해주세요',
    },
    CHANGE_PWD: '최소 8~15글자 내, 1개 이상의 특수문자로 입력해주세요',
    CHANGE_PWD_CONFIRM: '변경하려는 두 개의 비밀번호가 일치하지 않습니다.',
  },
  SUCCESS: 'success',
  CHANGE: 'change',
};
const modalContent = document.querySelector('.modal-content');
const modalBody = document.querySelector('.password-modal .modal-body');
const loadingElement = document.querySelector('ul.loading');
const successIcon = document.querySelector('.success-icon');

function processAfterSuccess(data) {
  const passwordModalBtn = document.querySelector(
    '.password-modal .modal-footer .change-password-btn'
  );
  passwordModalBtn.classList.replace('btn-primary', 'btn-success');
  passwordModalBtn.textContent = MSG.SUCCESS;
  successIcon.classList.replace('hide', 'show');
  successIcon.addEventListener('click', e => {
    modalContent.querySelector('button.close').click();
  });
}

function processAfterError(error) {
  const prePassword = modalBody.querySelector('.pre-password');
  const changePassword = modalBody.querySelector('.change-password');
  if (error.status === 400) {
    if (error.responseJson.regex) {
      changePassword.querySelector('input').classList.add('border-danger');
      changePassword.querySelector('small').textContent = error.responseJson.regex;
      changePassword.querySelector('small').style.display = 'inline';
    }
  } else if (error.status === 403) {
    prePassword.querySelector('input').classList.add('border-danger');
    prePassword.querySelector('small').textContent = error.responseText;
    prePassword.querySelector('small').style.display = 'inline';
  }
}
function isValid() {
  const prePassword = modalBody.querySelector('.pre-password input');
  const changePassword = modalBody.querySelector('.change-password input');
  const changePasswordConfirm = modalBody.querySelector('.change-password-confirm input');
  if (!prePassword.getAttribute('isValid')) {
    const small = modalBody.querySelector('.pre-password small');
    if (prePassword.value === '') {
      small.textContent = MSG.ERROR.BLANK.PRE_PWD;
    }
    prePassword.classList.add('border-danger');
    small.style.display = 'inline';
    prePassword.focus();
    return false;
  }
  if (!changePassword.getAttribute('isValid')) {
    const small = modalBody.querySelector('.change-password small');
    if (changePassword.value === '') {
      small.textContent = MSG.ERROR.BLANK.CHANGE_PWD;
    } else {
      small.textContent = MSG.ERROR.CHANGE_PWD;
    }
    changePassword.classList.add('border-danger');
    small.style.display = 'inline';
    changePassword.focus();
    return false;
  }
  if (!changePasswordConfirm.getAttribute('isValid')) {
    const small = modalBody.querySelector('.change-password-confirm small');
    if (changePasswordConfirm.value === '') {
      small.textContent = MSG.ERROR.BLANK.CHANGE_PWD_CONFIRM;
    } else {
      small.textContent = MSG.ERROR.CHANGE_PWD_CONFIRM;
    }
    changePasswordConfirm.classList.add('border-danger');
    small.style.display = 'inline';
    changePasswordConfirm.focus();
    return false;
  }
  return true;
}
function passwordModalBtnClickEvt(e) {
  const prePassword = modalBody.querySelector('.pre-password input');
  const changePasswordConfirm = modalBody.querySelector('.change-password-confirm input');
  if (DEV_MODE !== true && !isValid()) return;
  $.post({
    url: '/user/editPassword',
    data: { prePassword: prePassword.value, changePassword: changePasswordConfirm.value },
    success: processAfterSuccess,
    error: processAfterError,
    beforeSend(e) {
      modalContent.append(loadingElement);
      modalContent.append(successIcon);
      loadingElement.classList.replace('hide', 'show');
    },
  }).always(() => {
    loadingElement.classList.replace('show', 'hide');
  });
}
const keyup = {
  changePassword: e => {
    const small = modalBody.querySelector('.change-password small');
    const input = modalBody.querySelector('.change-password input');
    const passwordRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (!passwordRegex.test(e.target.value)) {
      small.textContent = MSG.ERROR.CHANGE_PWD;
      small.style.display = 'inline';
      input.classList.add('border-danger');
    } else {
      small.style.display = 'none';
      input.setAttribute('isValid', true);
      input.classList.replace('border-danger', 'border-success');
    }
  },
  changePasswordConfirm: e => {
    const small = modalBody.querySelector('.change-password-confirm small');
    const changePassword = modalBody.querySelector('.change-password input');
    const input = modalBody.querySelector('.change-password-confirm input');
    if (changePassword.value !== e.target.value) {
      small.textContent = MSG.ERROR.CHANGE_PWD_CONFIRM;
      small.style.display = 'inline';
      input.classList.add('border-danger');
    } else {
      small.style.display = 'none';
      input.setAttribute('isValid', true);
      input.classList.replace('border-danger', 'border-success');
    }
    if (e.keyCode === 13) {
      passwordModalBtnClickEvt(e);
    }
  },
  prePassword: e => {
    const small = modalBody.querySelector('.pre-password small');
    if (e.target.value !== '') {
      e.target.classList.remove('border-danger');
      small.style.display = 'none';
      e.target.setAttribute('isValid', true);
    } else {
      e.target.classList.add('border-danger');
      small.style.display = 'inline';
      e.taregt.setAttribute('isValid', false);
    }
  },
};
export default function() {
  const password = document.querySelector('.password');
  if (password) {
    const prePassword = modalBody.querySelector('.pre-password input');
    const changePassword = modalBody.querySelector('.change-password input');
    const changePasswordConfirm = modalBody.querySelector('.change-password-confirm input');
    const passwordModalBtn = document.querySelector(
      '.password-modal .modal-footer .change-password-btn'
    );
    prePassword.addEventListener('keyup', keyup.prePassword);
    changePassword.addEventListener('keyup', keyup.changePassword);
    changePasswordConfirm.addEventListener('keyup', keyup.changePasswordConfirm);
    passwordModalBtn.addEventListener('click', passwordModalBtnClickEvt);
  }
}
