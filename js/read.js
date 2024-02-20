import {loadNewPage} from './modules.js';
const main = document.querySelector('main')
const homeBtn = document.getElementById('home-btn')
const loginBtn = document.getElementById('login-btn')
const registerBtn = document.getElementById('register-btn')
const writeBtn = document.getElementById('write-btn')
const backBtn = document.getElementById('back-btn')
const moments = JSON.parse(localStorage.getItem("moments"))

moments.forEach(moment => {
    const wrapper = document.createElement('div') // div : wrapper(text-title, text-cnt, text-datetime)
    const textTitle = document.createElement('div') // text-title
    const textCnt = document.createElement('div') // text-cnt
    const textDateTime = document.createElement('div') // text-datetime : wrapper(happiness, date, time)
    const happiness = document.createElement('span') // happiness
    const textDate = document.createElement('span') // text-date
    main.append(wrapper)
    wrapper.append(textTitle, textCnt, textDateTime)
    textDateTime.append(happiness, textDate)
    textTitle.classList.add('text-title')
    textCnt.classList.add('text-cnt')
    textDateTime.classList.add('text-datetime')
    textDate.classList.add('text-date')
    textTitle.textContent = moment.title
    happiness.textContent = moment.happiness+' '
    textDate.textContent = moment.date
    textCnt.textContent = moment.content
});
homeBtn.addEventListener('click',()=>{
    loadNewPage('main')
})
loginBtn.addEventListener('click',()=>{
    loadNewPage('login')
})
registerBtn.addEventListener('click',()=>{
    loadNewPage('register')
})
writeBtn.addEventListener('click',()=>{
    loadNewPage('write')
})
backBtn.addEventListener('click',()=>{
    loadNewPage('main')
})