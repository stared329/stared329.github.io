const addButtonEl = document.querySelector('#add-button');
const toDoInputEl = document.querySelector('#todo-input');
const toDoDiv = document.querySelector('.list-wrap');

addButtonEl.addEventListener('click', addBtnEvent);
addButtonEl.addEventListener('keyDown', addBtnEvent);
toDoInputEl.addEventListener('keyDown', addBtnEvent);

function addCompleteEvent(e) {
  if ((e.type === "keydown" && (e.key === "Enter" || e.key === "Space")) || e === "click") {
    const item = e.target;
    if (item.classList.contains('complete')) {
      item.classList.remove('complete');
    } else {
      item.classList.add('complete');
    }
  }
}

function addBtnEvent(e) {
  e.preventDefault();
  const todoTextArr = toDoInputEl.value.split(';');
  if (todoTextArr.length === 0) return;
  if ((e.type === "keydown" && e.key === "Enter") || e) {
    for (let item of todoTextArr) {
      if (item.length === 0) continue;

      toDoInputEl.value = "";
      const newDiv = document.createElement('div');
      const delBtn = document.createElement('button');
      newDiv.textContent = item;
      newDiv.setAttribute('tabindex', 0);
      delBtn.className = 'btn-remove';
      delBtn.textContent = 'x';
      delBtn.addEventListener('click', e => {
        const node = e.target.parentNode;
        node.parentNode.removeChild(node);
      });
      newDiv.addEventListener('click', addCompleteEvent);
      newDiv.addEventListener('focus', e => {
        document.addEventListener('keydown', e => {
          if (e.target === newDiv) {
            addCompleteEvent(e);
          }
        });
      });
      newDiv.appendChild(delBtn);
      toDoDiv.appendChild(newDiv);
    }
  }
}