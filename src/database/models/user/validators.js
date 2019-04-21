export const email = {
  validator(value) {
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(value);
  },
  message(props) {
    return `${props.value} is not email Type`;
  },
};

export const password = {
  validator() {
    const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return regex.test(this._password);
  },
  message() {
    return `password is not matched regular expression`;
  },
};

export const phoneNumber = {
  validator(value) {
    const regex = /[0-9]{10,12}/i;
    return regex.test(value);
  },
  message(props) {
    return `${props.value}`;
  },
};
