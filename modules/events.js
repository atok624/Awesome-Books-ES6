const list = document.querySelector('.List');
const add = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const listLink = document.getElementById('l-link');
const addLink = document.getElementById('a-link');
const contactLink = document.getElementById('c-link');

listLink.addEventListener('click', () => {
  list.style.display = 'block';
  contact.style.display = 'none';
  add.style.display = 'none';
});
addLink.addEventListener('click', () => {
  add.style.display = 'block';
  contact.style.display = 'none';
  list.style.display = 'none';
});
contactLink.addEventListener('click', () => {
  add.style.display = 'none';
  contact.style.display = 'flex';
  list.style.display = 'none';
});