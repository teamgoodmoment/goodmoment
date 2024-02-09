import {loadNewPage} from './modules.js'
const inputDate = document.getElementById('openingdate')
const inputTime = document.getElementById('openingtime')
const inputMaxLetters = document.getElementById('maxletters')
const createBtn = document.getElementById('createBtn')
const inputDateStyle = document.createElement('style')
const inputTimeStyle = document.createElement('style')

inputDate.min = getTodayString()

let openingDate;
let openingTime;
let maxLetters;

inputDate.addEventListener('change', ()=>{
    openingDate = removePlaceholderAndGetValue(inputDate, inputDateStyle) 
} )

inputTime.addEventListener('change', ()=>{
    openingTime = removePlaceholderAndGetValue(inputTime, inputTimeStyle)
} )

createBtn.addEventListener('click', ()=>{
    maxLetters = inputMaxLetters.value
    inputMaxLetters.value = '';
    if(maxLetters && openingDate && openingTime){
        console.log('2');
        setSettingsToLocalStorage()
        loadNewPage('read')
    }else{
        alert('유리병 설정 값을 모두 입력해주세요‼️')
    }
})

function setSettingsToLocalStorage(){
    localStorage.setItem("openingDate", openingDate)
    localStorage.setItem("openingTime", openingTime)
    localStorage.setItem("maxLetters", maxLetters)
}

function getTodayString(){
    const today = new Date();
    const todayYear = today.getFullYear()
    const todayMonth = ('0'+(today.getMonth()+1)).slice(-2)
    const todayDate = ('0'+today.getDate()).slice(-2)
    const todayString = [todayYear,todayMonth,todayDate].join('-')
    return todayString
}

function removePlaceholderAndGetValue(inputBox, inputStyle){
    inputStyle.innerHTML=`.settings > #${inputBox.id}::before{content=''; display: none;}`
    document.head.appendChild(inputStyle);
    return inputBox.value
}


