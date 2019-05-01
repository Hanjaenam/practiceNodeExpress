import { makeTextDanger } from 'assets/js/utils';

const loginForm = document.querySelector('.login-form form');
const email = loginForm.querySelector('input#email');
const password = loginForm.querySelector('input#password');
const submitInput = loginForm.querySelector('input[type="submit"]');

const isValid = () => {
  if (email.value === '') {
    if (loginForm.querySelector('.text-danger.email-required')) return false;
    const textDanger = makeTextDanger({
      id: 'email-error',
      text: 'email is required',
    });
    email.after(textDanger);
    return false;
  }
  if (password.value === '') {
    if (loginForm.querySelector('.text-danger.password-required')) return false;
    const textDanger = makeTextDanger({
      id: 'password-error',
      text: 'password is required',
    });
    password.after(textDanger);
    return false;
  }
  return true;
};
const handleSubmit = e => {
  e.preventDefault();
  if (!isValid()) return;
  loginForm.submit();
};
submitInput.addEventListener('click', handleSubmit);
