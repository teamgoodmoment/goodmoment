import { loadNewPage } from "./modules.js";
const inputDate = document.getElementById("openingdate");
const inputTime = document.getElementById("openingtime");
const inputMaxLetters = document.getElementById("maxletters");
const createBtn = document.getElementById("createBtn");
const inputDateStyle = document.createElement("style");
const inputTimeStyle = document.createElement("style");

inputDate.min = getTodayString();

let openingDate;
let openingTime;
let maxLetters;

inputDate.addEventListener("change", () => {
  openingDate = removePlaceholderAndGetValue(inputDate, inputDateStyle);
});

inputTime.addEventListener("change", () => {
  openingTime = removePlaceholderAndGetValue(inputTime, inputTimeStyle);
});

createBtn.addEventListener("click", () => {
  maxLetters = inputMaxLetters.value;
  inputMaxLetters.value = "";

  if (maxLetters <= 7 && openingDate && openingTime) {
    setSettingsToLocalStorage();
    setSettingsToLocalStorage2();
    loadNewPage("main");

  } else if (maxLetters > 7) {
    alert("최대 쪽지 개수를 초과하였습니다.");
  } else {
    alert("유리병 설정 값을 모두 입력해주세요‼️");
  }
});

function setSettingsToLocalStorage() {
  localStorage.setItem("openingDate", openingDate);
  localStorage.setItem("openingTime", openingTime);
  localStorage.setItem("maxLetters", maxLetters);
  localStorage.setItem("currentLetters", 0);
  localStorage.setItem("moments", []);
}

//id 키 추가
function setSettingsToLocalStorage2() {
  let id = localStorage.getItem("id")

  localStorage.setItem(`${id}openingDate`, openingDate);
  localStorage.setItem(`${id}openingTime`, openingTime);
  localStorage.setItem(`${id}maxLetters`, maxLetters);
  localStorage.setItem(`${id}currentLetters`, 0);
  localStorage.setItem(`${id}moments`, []);

  console.log(localStorage)
}

function getTodayString() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = ("0" + (today.getMonth() + 1)).slice(-2);
  const todayDate = ("0" + today.getDate()).slice(-2);
  const todayString = [todayYear, todayMonth, todayDate].join("-");
  return todayString;
}

function removePlaceholderAndGetValue(inputBox, inputStyle) {
  inputStyle.innerHTML = `.settings > #${inputBox.id}::before{content=''; display: none;}`;
  document.head.appendChild(inputStyle);
  return inputBox.value;
}
