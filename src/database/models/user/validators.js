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
    const checkArrayLength = value.length === 2; // [12][10]
    const checkIndexOne = value[0] > 0 && value[1] < 13;
    const checkIndexTwo = value[0] > 0 && value[1] < 32; // 윤년 계산할 것.
    return checkArrayLength && checkIndexOne && checkIndexTwo;
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
