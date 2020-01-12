/* eslint-disable */

export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};
// type = 'success' or 'error'
export const showAlert = (type, msz) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msz}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, 5000);
};
