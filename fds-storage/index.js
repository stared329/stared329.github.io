const config = {
  apiKey: "AIzaSyCgcdSbmX031FO9ycnWubWCzm_eRxjSCuQ",
  authDomain: "jamie-fds-storage.firebaseapp.com",
  databaseURL: "https://jamie-fds-storage.firebaseio.com",
  projectId: "jamie-fds-storage",
  storageBucket: "jamie-fds-storage.appspot.com",
  messagingSenderId: "649594148687"
};
const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(config);
const auth = firebase.auth();
const storage = firebase.storage();
const imgsEl = document.querySelector('.img-list');
//로그인처리
document.querySelector('.btn-login').addEventListener('click', async e => {
  await auth.signInWithPopup(provider);
});

auth.onAuthStateChanged(function(user) {
  if (user) {
    document.querySelector('.init-box').classList.toggle('comp');
    document.querySelector('.upload-box').classList.toggle('comp');
  }
});

const inputEl = document.querySelector('#file-select')
inputEl.addEventListener('change', async e => {
  const file = inputEl.files[0];
  const refStr = `/images/${auth.currentUser.uid}:${new Date().getTime()}`;
  let uploadTask = await storage.ref(refStr).put(file);
  const imgEl = document.createElement('img');
  imgEl.src = uploadTask.downloadURL;
  imgsEl.appendChild(imgEl);
});