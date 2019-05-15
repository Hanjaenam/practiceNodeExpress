export const createTextDanger = opts => {
  const textDanger = document.createElement('small');
  Object.keys(opts).forEach(attribute => {
    if (attribute === 'text') return;
    textDanger.setAttribute(
      attribute,
      Array.isArray(opts[attribute]) === true ? opts[attribute].join(' ') : opts[attribute]
    );
  });
  textDanger.classList.add('form-text', 'text-danger');
  textDanger.append(opts.text);
  return textDanger;
};

export const createInput = (opts, css) => {
  const button = document.createElement('input');
  Object.keys(opts).forEach(attribute => {
    button.setAttribute(
      `${attribute}`,
      Array.isArray(attribute) === true ? opts[attribute].join(' ') : opts[attribute]
    );
  });
  Object.keys(css).forEach(attribute => {
    button.style.attribute = css[attribute];
  });
  button.type = opts.type ? opts.type : 'button';
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.style.textTransform = 'uppercase';
  return button;
};
