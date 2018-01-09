const addButtonEl = document.querySelector('#add-button');
const toDoInputEl = document.querySelector('#todo-input');
const toDoDiv = document.querySelector('.list-wrap');
const provider = new firebase.auth.GoogleAuthProvider();
let path;
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNal18ye2Y7abPwj6lmMH0b25NcxRiT84",
  authDomain: "jamie-fds-todo-exercise.firebaseapp.com",
  databaseURL: "https://jamie-fds-todo-exercise.firebaseio.com",
  projectId: "jamie-fds-todo-exercise",
  storageBucket: "",
  messagingSenderId: "138347820613"
};
firebase.initializeApp(config);

addButtonEl.addEventListener('click', addBtnEvent);
addButtonEl.addEventListener('keyDown', addBtnEvent);
toDoInputEl.addEventListener('keyDown', addBtnEvent);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    path = `users/${firebase.auth().currentUser.uid}/todos`;
    document.querySelector('.init-box').classList.toggle('comp');
    document.querySelector('.head-wrap').classList.toggle('comp');
    getTodos();
  }
});

//todo리스트 전체 가져오기
async function getTodos() {
  const result = await firebase.database().ref(path);
  result.once('value', snapshot => {
    const todos = snapshot.val();
    if (todos) {
      toDoDiv.innerHTML = '<h2 class="readable-hidden">to do list</h2>';
      const entries = Object.entries(todos);
      for (let [name, value] of entries) {
        addTodo(name, value);
      }
    }
  });
}

//로그인처리
document.querySelector('.btn-login').addEventListener('click', async e => {
  await firebase.auth().signInWithPopup(provider);
});

//to do list 추가
async function addBtnEvent(e) {
  e.preventDefault();
  toDoDiv.classList.add('todo-list--loading');

  const todoTextArr = toDoInputEl.value.split(';');
  if (todoTextArr.length === 0) return;
  if ((e.type === "keydown" && e.key === "Enter") || e) {
    for (let item of todoTextArr) {
      if (item.length === 0) continue;

      const result = await firebase.database().ref(path).push({
        title: item,
        complete: false
      });
      result.once('value', snapshot => {
        const addedItem = snapshot.val();
        addTodo(snapshot.key, addedItem);
      });
    }
  }
}

function addTodo(id, obj) {
  toDoInputEl.value = "";
  const newDiv = document.createElement('div');
  const delBtn = document.createElement('button');
  newDiv.textContent = obj.title;
  newDiv.setAttribute('tabindex', 0);
  delBtn.className = 'btn-remove';
  delBtn.textContent = 'x';
  delBtn.addEventListener('click', e => { makeRemoveTodo(e, id) });
  newDiv.addEventListener('click', e => { completeTodo(e, id, !obj.complete) });
  newDiv.addEventListener('focus', e => {
    document.addEventListener('keydown', e => {
      if (e.target === newDiv) {
        completeTodo(e, id, !obj.complete)
      }
    });
  });
  if (obj.complete)
    newDiv.classList.add('complete');
  newDiv.appendChild(delBtn);
  toDoDiv.appendChild(newDiv);
  toDoDiv.classList.remove('todo-list--loading');
}

async function makeRemoveTodo(e, id) {
  e.stopPropagation();
  await firebase.database().ref(path + "/" + id).remove();
  const node = e.target.parentNode;
  node.parentNode.removeChild(node);
}

async function completeTodo(e, id, bool) {
  if (e.target !== e.currentTarget) return;
  if ((e.type === "keydown" && (e.key === "Enter" || e.key === "Space")) || e.type === "click") {
    await firebase.database().ref(path + "/" + id).update({ complete: bool });
    const item = e.target;
    if (item.classList.contains('complete')) {
      item.classList.remove('complete');
    } else {
      item.classList.add('complete');
    }
  }
}