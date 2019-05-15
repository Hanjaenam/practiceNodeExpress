import 'assets/scss/pages/auth/checkRequiredData.scss';
import { createTextDanger } from 'assets/js/lib/createElement';

const header = document.querySelector('body header');
const checkDataForm = document.querySelector('.checkData-form form');
const submitInput = checkDataForm.querySelector('input[type="submit"]');
const email = checkDataForm.querySelector('#email');
const username = checkDataForm.querySelector('#username');

const setAutoFocus = () => {
  if (email.value === '') {
    email.setAttribute('autoFocus', 'true');
  } else {
    username.setAttribute('autoFocus', 'true');
  }
};
const isValid = () => {
  if (email.value === '') {
    if (checkDataForm.querySelector('.text-danger.email-required')) return false;
    const textDanger = createTextDanger({
      id: 'email-error',
      class: 'email-required',
      text: 'email is required',
    });
    email.after(textDanger);
    return false;
  }
  if (username.value === '') {
    if (checkDataForm.querySelector('.text-danger.username-required')) return false;
    const textDanger = createTextDanger({
      id: 'username-error',
      class: 'username-required',
      text: 'username is required',
    });
    username.after(textDanger);
    return false;
  }
  return true;
};
const handleSubmit = e => {
  e.preventDefault();
  if (!isValid()) return;
  checkDataForm.submit();
};
const setDisabledHeaderBtn = () => {
  header.querySelectorAll('.btn').forEach(btn => btn.classList.add('disabled'));
};
const init = () => {
  setDisabledHeaderBtn();
  setAutoFocus();
  submitInput.addEventListener('click', handleSubmit);
};
init();
