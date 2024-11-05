const addBtn = document.querySelector('#addBtn');
const toggleBtn = document.querySelector('.toggleBtn');
const removeBtn = document.querySelector('.btn-remove');

addBtn.addEventListener('click', () => {
  const input = document.querySelector('input');
  const item = document.createElement('li');
  const list = document.querySelector('.lists ol');

  item.textContent = input.value;
  input.value = '';
  list.prepend(item);
});

toggleBtn.addEventListener('click', () => {
  const listItems = document.querySelector('.lists');

  if(listItems.style.display === 'none') {
    listItems.style.display = 'block';
    toggleBtn.textContent = 'Hide List';
  } else {
    listItems.style.display = 'none';
    toggleBtn.textContent = 'Show List';
  }
});

removeBtn.addEventListener('click', () => {
  const lastItem = document.querySelector('li:last-child');
  lastItem.remove();
});