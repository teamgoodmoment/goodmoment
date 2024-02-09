import {loadNewPage} from './modules.js';

// const moments = localStorage.getItem("moments")
// // moments: [] = [{ title: "", happiness: "", date: "", time: "", content: ""}, ...]
// if(moments !== (null | undefined)){
    
// }




const homeBtn = document.getElementById('home-btn')
const loginBtn = document.getElementById('login-btn')
const registerBtn = document.getElementById('register-btn')
const writeBtn = document.getElementById('write-btn')
const backBtn = document.getElementById('back-btn')

homeBtn.addEventListener('click',()=>{
    loadNewPage('settings')
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


// localStorage.getItem()