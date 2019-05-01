export const age = {
  validator(value) {
    return value > 0 && value < 130;
  },
  message(props) {
    return `${props} should be setted between 1 and 130`;
  },
};
export const birthday = {
  validator(value) {
    const regex = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return regex.test(value);
  },
  messsage(props) {
    return `${props} is not properly birthday`;
  },
};
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
