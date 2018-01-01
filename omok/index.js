let coordi, rowClass, colClass;
let isWhiteTurn;
let bArr;

document.addEventListener('DOMContentLoaded', newOmok);

function initOmok() {
  coordi = ".row-0 .col-0";
  rowClass = "row-0";
  colClass = "col-0";
  isWhiteTurn = false;
  bArr = new Array(15);
  for (let i = 0; i < bArr.length; i++) {
    bArr[i] = new Array(15).fill(0);
  }
  document.querySelectorAll('.black').forEach(el => {
    el.classList.remove('black');
  });
  document.querySelectorAll('.white').forEach(el => {
    el.classList.remove('white');
  });
}

function newOmok() {
  initOmok();
  document.querySelectorAll('.col').forEach(el => {
    el.addEventListener('click', e => {
      rowClass = Array.from(el.closest('.row').classList)[0];
      colClass = Array.from(el.classList)[0];
      coordi = `.${rowClass} .${colClass}`;
      document.querySelector(coordi).classList.add((isWhiteTurn) ? 'white' : 'black');
      let rowIdx = parseInt(rowClass.split('-')[1]) - 1;
      let colIdx = parseInt(colClass.split('-')[1]) - 1;
      bArr[rowIdx][colIdx] = (isWhiteTurn) ? 1 : 2;
      if (checkOmok(rowIdx, colIdx)) {
        if (confirm(`${(isWhiteTurn) ? "WHITE WIN" : "BLACK WIN"} Do you want replay?`))
          newOmok();
      } else
        isWhiteTurn = !isWhiteTurn;
    });
  });
}

function checkOmok(r, c) {
  // 가로방향 찾기
  if (count(bArr[r][c], r, c, 1, 0) >= 5)
    return true;
  // 세로방향 찾기 
  if (count(bArr[r][c], r, c, 0, 1) >= 5)
    return true;
  // 대각선 상향 찾기 
  if (count(bArr[r][c], r, c, 1, -1) >= 5)
    return true;
  // 대각선 하향 찾기
  if (count(bArr[r][c], r, c, 1, 1) >= 5)
    return true;

  return false;
}

function count(player, row, col, dX, dY) {
  let ct = 1; //카운트
  let r, c; //가로, 세로
  //마지막으로 돌이 놓인 위치를 기준으로 증가시키면서 다른 돌의 위치를 찾는다
  r = row + dX;
  c = col + dY;
  //가로 전체, 세로 전체에서 현재 돌의 값을 찾아서 카운트를 증가시킨다.
  while (r >= 0 && r < 15 && c >= 0 && c < 15 && bArr[r][c] === player) {
    ct++;
    r += dX;
    c += dY;
  }

  //마지막으로 돌이 놓인 위치를 기준으로 감소시키면서 다른 돌의 위치를 찾는다
  r = row - dX;
  c = col - dY;

  //가로 전체, 세로 전체에서 현재 돌의 값을 찾아서 카운트를 증가시킨다.
  while (r >= 0 && r < 15 && c >= 0 && c < 15 && bArr[r][c] === player) {
    ct++;
    r -= dX;
    c -= dY;
  }

  return ct;
}