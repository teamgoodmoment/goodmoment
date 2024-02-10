import {loadNewPage} from './modules.js'
const ddayBox = document.querySelector('div') // main.html 보고 dday표시할 위치 바꾸기
const stopBtn = document.querySelector('button') // (test용) 지우기
const readBtn = document.getElementById('read-btn') // main.html 보고 열람버튼 할 위치 바꾸기
const currentLetters = localStorage.getItem("currentLetters")
const maxLetters = localStorage.getItem("maxLetters")
const openingDate = localStorage.getItem("openingDate")
const openingTime = localStorage.getItem("openingTime")
const openingDateTime = new Date(openingDate+'T'+openingTime+":00")
const now = new Date()
let remainingTime = Math.floor((openingDateTime - now)/1000)
let remainingTimeSecs;
let remainingTimeMins;
let remainingTimeHours;
let remainingTimeDays;
let remainingTimes = [remainingTimeDays,remainingTimeHours,remainingTimeMins,remainingTimeSecs];

remainingTime=5; // (test용) 지우기

console.log(openingDateTime) // (test용) 지우기
console.log(now) // (test용) 지우기

const isTimerStart = function(){
    if((remainingTime<=0) || (currentLetters >= maxLetters)){
        return false
    }else{
        return true
    }
}

if(isTimerStart()){
    remainingTimes = getRemainingTimes(remainingTime)
    displayTimer()
    const timer = setInterval(()=>{
        remainingTime -= 1
        if((remainingTime<=0) || (currentLetters >= maxLetters) || (now > openingDateTime)){
            ddayBox.innerHTML='' // main.html 보고 열람버튼 할 위치 바꾸기
            readBtn.style.display = 'inline-block'; // main.html 보고 열람버튼 할 위치 바꾸기
            clearInterval(timer)
        }
        remainingTimes = getRemainingTimes(remainingTime)
        displayTimer()
    },1000)
}else{
    ddayBox.innerHTML='' // main.html 보고 열람버튼 할 위치 바꾸기
    readBtn.style.display = 'inline-block'; // main.html 보고 열람버튼 할 위치 바꾸기
}

stopBtn.addEventListener('click', ()=>{clearInterval(timer)}) // (test용) 지우기

readBtn.addEventListener('click', ()=>[ 
    loadNewPage('read')
])

function getRemainingTimes(remainingTime){
    remainingTimeSecs = remainingTime%60
    remainingTimeMins = Math.floor(remainingTime/60%60)
    remainingTimeHours = Math.floor(remainingTime/60/60%24)
    remainingTimeDays = Math.floor(remainingTime/60/60/24)
    return [remainingTimeDays,remainingTimeHours,remainingTimeMins,remainingTimeSecs]
}

function displayTimer(){ // main.html 보고 dday박스 위치 바꾸기
    if(remainingTimeDays>0){
        ddayBox.innerHTML=`&nbsp;D-${remainingTimeDays}`
    }else if(remainingTimeHours>0){
        ddayBox.innerHTML=`&nbsp;${remainingTimeHours}시간 전`
    }else if(remainingTimeMins>0){
        ddayBox.innerHTML=`&nbsp;${remainingTimeMins}분 전`
    }else if(remainingTimeSecs>0){
        ddayBox.innerHTML=`&nbsp;${remainingTimeSecs}초 전`
    }
}

