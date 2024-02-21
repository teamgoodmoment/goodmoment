import {loadNewPage} from './modules.js'

//url 복사
const btnShare = document.querySelector('.btn_share button');
const currentUrl=window.location.href;

btnShare.addEventListener('click', function (){
  console.log('a');
  window.navigator.clipboard.writeText(currentUrl).then(() => {
    alert(`현재 URL ${currentUrl} 클립보드에 저장되었습니다.`);
  });
})

//유저 이름 표시
let id = localStorage.getItem("id")
const storedUserData = JSON.parse(localStorage.getItem(`${id}userData`));
const userName = storedUserData.nickname;
const userNameText = document.querySelector('.main_title span');

userNameText.innerText = userName;


//쪽지 등록 갯수 반영
const currentLettersData = JSON.parse(localStorage.getItem(`${id}currentLetters`));
let letterCountText = document.querySelector('.sub_title span');
letterCountText.innerText = currentLettersData;

// 쪽지 버튼 갯수만큼 보이기
let btnLetterWrap = document.querySelector('.letter_wrap')
let letterList = '<span class="btn_letter"><button>편지</button></span>'
let letterListArr = []

for (let i = 0; i < currentLettersData; i ++) {
  letterListArr.push(letterList)
  btnLetterWrap.innerHTML = letterListArr.toString().replace(/,/g,'');
}

//버튼 페이지 이동
const btnLetterAdd = document.querySelector('.btn_fill button');
const btnLetterView = document.querySelectorAll('.btn_letter button');

btnLetterAdd.addEventListener('click',() => {
  loadNewPage('write')
})

let today = new Date();   

let hours = today.getHours();
let minutes = today.getMinutes();

let currentTime = `${hours}:${minutes}`

for (let el of btnLetterView) {
  if(letterListArr.length > 0 && openingTime === currentTime) {
    el.addEventListener('click',() => {
      loadNewPage('read')
    })
  } else{
    alert('입력된 행복쪽지가 없습니다. 추가해주세요.')
  }
}