export const makeTextDanger = (text, opts) => {
  const textDanger = document.createElement('small');
  textDanger.classList.add('form-text', 'text-danger');
  if (opts) {
    for (const attribute in opts) {
      textDanger.setAttribute(attribute, opts[attribute]);
    }
  }
  textDanger.setAttribute('id', opts.id);
  textDanger.classList.add(opts.class);
  textDanger.append(text);
  return textDanger;
};

export const makeBtn = (text, opts) => {
  const button = document.createElement('button');
  if (opts) {
    for (const attribute in opts) {
      button.setAttribute(attribute, opts[attribute]);
    }
  }
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.append(text);
  return button;
};
