const emailInput = document.querySelector('.login-form .email-input');
const passwordInput = document.querySelector('.login-form .password-input');
const submitInput = document.querySelector('.login-form input[type="submit"]');

const textDanger = document.createElement('small');
textDanger.classList.add('form-text', 'text-danter');

submitInput.addEventListener('submit', e => {
  if (emailInput === '') {
    textDanger.setAttribute('id', 'email-error');
    textDanger.appendChild('email is required');
    emailInput.after(textDanger);
    return;
  }
  if (passwordInput === '') {
    textDanger.setAttribute('id', 'password-error');
    textDanger.appendChild('password is required');
    passwordInput.after(textDanger);
    return;
  }
  submitInput.submit();
});
