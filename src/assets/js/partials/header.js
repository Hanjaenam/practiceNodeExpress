import $ from 'jquery';

const navItem = document.querySelectorAll('ul.nav:not(.menu) li.nav-item');
const mouseEnter = e => {
  e.target.classList.add('bg-secondary');
};
const mouseLeave = e => {
  e.target.classList.remove('bg-secondary');
};
$(navItem).hover(mouseEnter, mouseLeave);
