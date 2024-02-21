import {loadNewPage} from './modules.js'

//url 복사
const btnShare = document.querySelector('.btn_share button');
const currentUrl = window.location.href;

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

//쪽지 여부에 따른 메세지 노출
if (currentLettersData === 0) {
  //없는 경우 
  document.querySelector('.sub_title_2').style.display = 'block';
  document.querySelector('.sub_title').style.display = 'none';
} else {
  //있는 경우 
  document.querySelector('.sub_title').style.display = 'block';
  document.querySelector('.sub_title_2').style.display = 'none';
}

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


//현재 쪽지 개수, 최대 개수 받기
const currentLetters = localStorage.getItem(`${id}currentLetters`)
const maxLetters = localStorage.getItem(`${id}maxLetters`)


btnLetterAdd.addEventListener('click',() => {
  if (currentLetters < maxLetters){
    loadNewPage('write')
  }else{
    alert("유리병의 행복이 꽉 채워졌습니다~! 열람을 위해 행복 쪽지를 클릭해주세요.")
  }
})

const openingDate = localStorage.getItem(`${id}openingDate`);
const openingTime = localStorage.getItem(`${id}openingTime`);

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

const hours = today.getHours();
const minutes = today.getMinutes();
const currentDate = `${year}-${month}-${date}`;
const currentTime = `${hours}:${minutes}`;

for (let el of btnLetterView) {
  if(letterListArr.length > 0) {
    if ( (currentLetters >= maxLetters) || (currentDate >= openingDate && currentTime >= openingTime)) {
      el.addEventListener('click',() => {
        loadNewPage('read')
      })
    } else {
      el.addEventListener('click',() => {
        alert("아직 열람 기간이 아닙니다.")
      })
    }
  } else{
    alert('입력된 행복 쪽지가 없습니다. 추가해주세요.')
  }
}