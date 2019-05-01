export const makeTextDanger = opts => {
  const textDanger = document.createElement('small');
  textDanger.classList.add('form-text', 'text-danger');
  if (Array.isArray(opts.id)) {
    opts.id.forEach(name => {
      textDanger.setAttribute('id', id);
    });
  }
  if (Array.isArray(opts.class)) {
    opts.class.forEach(name => {
      textDanger.classList.add(_class);
    });
  }
  textDanger.setAttribute('id', opts.id);
  textDanger.classList.add(opts.class);
  textDanger.append(opts.text);
  return textDanger;
};
